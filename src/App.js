import React, { Component } from 'react';
import './App.css';
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
        <h1>{this.state.activity}</h1>
        <p>{this.state.type}</p>
      </div>
    );
  }
}

export default App;
