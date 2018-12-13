import React, { Component } from 'react';
import Header from "../src/components/Header";
import './App.scss';
import axios from "axios";
const url = "http://www.boredapi.com/api/activity/";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activity: "",
        type: ""
    }
  }

  componentDidMount() {
    axios({
        method:"get",
        url: url,
        params: {
          type: "social",

        }
    })
        .then(res=> {
          this.setState({
              activity: res.data.activity,
              type: res.data.type
          })
        })
        .catch(res=>{
          this.setState({
              activity: res.data
          })
        })
  }



  render() {
    return (
      <div>
          <Header />

      </div>
    );
  }
}

export default App;
