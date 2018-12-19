import React, { Component } from 'react';
import Header from "../src/components/Header";
import Form  from "../src/components/Form";
import Board from "../src/components/Board";
import './App.scss';
import axios from "axios";
const url = "http://www.boredapi.com/api/activity/";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        activity: "",
        error: ""

    }
  }

  searchActivity =(type, participants, minPrice, maxPrice, minAccessibility, maxAccessibility ) => {

    axios({
        method:"get",
        url: url,
        params: {
          type: type,
          participants: participants,
          minprice: minPrice,
          maxprice: maxPrice,
          minaccessibility: minAccessibility,
          maxaccessibility: maxAccessibility

        }
    })
        .then(res=> {
            if ("activity" in res.data) {
                console.log("jest");
                this.setState({
                    activity: res.data.activity,
                    error: ''
                })
            }
            else {
                console.log(res.data.error);
                this.setState({
                    error: res.data.error,
                    activity: ''
                })
            }

        });



  };



  render() {
    return (
      <div>
          <Header />
          <Form handleSubmit={this.searchActivity}/>
          <Board text={this.state.activity + this.state.error}/>

      </div>
    );
  }
}

export default App;
