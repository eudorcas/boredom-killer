import React, { Component } from 'react';
import Header from "../src/components/Header";
import Form  from "../src/components/Form";
import Board from "../src/components/Board";
import './App.scss';
import axios from "axios";
const url = "https://www.boredapi.com/api/activity/";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        activity: "",
        error: "",
        loading: false

    }
  }

  searchActivity =(type, participants, minPrice, maxPrice, minAccessibility, maxAccessibility ) => {

    this.setState({
          loading: true,
          activity: '',
          error: ''
    });

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
                this.setState({
                    activity: res.data.activity,
                    error: '',
                    loading: false
                })
            }
            else {
                this.setState({
                    error: res.data.error,
                    activity: '',
                    loading: false
                })
            }

        });



  };



  render() {
    return (
      <div>
          <Header />
          <Form handleSubmit={this.searchActivity}/>
          <Board text={this.state.activity + this.state.error} loading={this.state.loading}/>

      </div>
    );
  }
}

export default App;
