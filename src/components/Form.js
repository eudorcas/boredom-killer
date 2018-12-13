import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: '',
            active: null
        }
    }

    handleClick = (position, type) => {
      if(this.state.active===position) {
          this.setState({
              clicked: '',
              active: null
          })
      }
      else {
          this.setState({
              clicked: type,
              active: position
          })
      }
    };

    myColor = (position, color) => {
        if(this.state.active === position) {
            return color;
        }
        return "";
    };

    render() {
        return (
            <div className={"form container"}>
                <h2 className={"form-header"}>Pick you preferences or just don't pick anything and let me surprise
                    you!</h2>
                <div className={"form-type"}>
                    <h3>Choose a type:</h3>
                    <div className={"type-buttons"}>
                        <div style={{color: this.myColor(0, "purple"), borderColor: this.myColor(0, "purple")}} className={"type-button recr"} onClick={e => this.handleClick(0, "recreating")}>recreation</div>
                        <div style={{color: this.myColor(1, "gray"), borderColor: this.myColor(1, "gray")}} className={"type-button ed"} onClick={ e => this.handleClick(1, "education")}>education</div>
                        <div style={{color: this.myColor(2, "green"), borderColor: this.myColor(2, "green")}} className={"type-button relax"} onClick={e => this.handleClick(2, "relaxation")}>relax</div>
                        <div style={{color: this.myColor(3, "plum"), borderColor: this.myColor(3, "plum")}} className={"type-button social"} onClick={e => this.handleClick(3, "social")}>social</div>
                        <div style={{color: this.myColor(4, "white"), borderColor: this.myColor(4, "white")}} className={"type-button charity"} onClick={e => this.handleClick(4, "charity")}>charity</div>
                        <div style={{color: this.myColor(5, "red"),  borderColor: this.myColor(5, "red")}} className={"type-button busy"} onClick={e => this.handleClick(5, "busywork")}>busywork</div>
                        <div style={{color: this.myColor(6, "orange"), borderColor: this.myColor(6, "orange")}} className={"type-button cook"} onClick={e => this.handleClick(6, "cooking")}>cooking</div>
                    </div>
                    <p>{this.state.clicked}</p>
                </div>
            </div>
        )
    }
}

export default Form;