import React from 'react';

class FormType extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: '',
            active: null
        }
    }

    handleClick = (position, type) => {
        if (this.state.active === position) {
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
        if (this.state.active === position) {
            return color;
        }
        return "";
    };

    render() {
        return (
            <div className={"form-type"}>
                <h3>Choose a type:</h3>
                <div className={"buttons"}>
                    <div
                        style={{color: this.myColor(0, "purple"), borderColor: this.myColor(0, "purple")}}
                        className={"button"}
                        onClick={e => this.handleClick(0, "recreating")}>
                        recreation
                    </div>
                    <div
                        style={{color: this.myColor(1, "gray"), borderColor: this.myColor(1, "gray")}}
                        className={"button"}
                        onClick={e => this.handleClick(1, "education")}>
                        education
                    </div>
                    <div
                        style={{color: this.myColor(2, "green"), borderColor: this.myColor(2, "green")}}
                        className={"button"}
                        onClick={e => this.handleClick(2, "relaxation")}>
                        relax
                    </div>
                    <div
                        style={{color: this.myColor(3, "plum"), borderColor: this.myColor(3, "plum")}}
                        className={"button"}
                        onClick={e => this.handleClick(3, "social")}>
                        social
                    </div>
                    <div
                        style={{color: this.myColor(4, "white"), borderColor: this.myColor(4, "white")}}
                        className={"button"}
                        onClick={e => this.handleClick(4, "charity")}>
                        charity
                    </div>
                    <div
                        style={{color: this.myColor(5, "red"), borderColor: this.myColor(5, "red")}}
                        className={"button"}
                        onClick={e => this.handleClick(5, "busywork")}>
                        busywork
                    </div>
                    <div
                        style={{color: this.myColor(6, "orange"), borderColor: this.myColor(6, "orange")}}
                        className={"button"}
                        onClick={e => this.handleClick(6, "cooking")}>
                        cooking
                    </div>
                </div>
            </div>
        )
    }
}

export default FormType;
