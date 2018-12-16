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
                        recreation <i className="fas fa-bowling-ball"></i>
                    </div>
                    <div
                        style={{color: this.myColor(1, "gray"), borderColor: this.myColor(1, "gray")}}
                        className={"button"}
                        onClick={e => this.handleClick(1, "education")}>
                        education <i className="fas fa-graduation-cap"></i>
                    </div>
                    <div
                        style={{color: this.myColor(2, "green"), borderColor: this.myColor(2, "green")}}
                        className={"button"}
                        onClick={e => this.handleClick(2, "relaxation")}>
                        relax <i className="fas fa-spa"></i>
                    </div>
                    <div
                        style={{color: this.myColor(3, "plum"), borderColor: this.myColor(3, "plum")}}
                        className={"button"}
                        onClick={e => this.handleClick(3, "social")}>
                        social <i className="fas fa-glass-cheers"></i>
                    </div>
                    <div
                        style={{color: this.myColor(4, "white"), borderColor: this.myColor(4, "white")}}
                        className={"button"}
                        onClick={e => this.handleClick(4, "charity")}>
                        charity <i className="fas fa-hand-holding-heart"></i>
                    </div>
                    <div
                        style={{color: this.myColor(5, "red"), borderColor: this.myColor(5, "red")}}
                        className={"button"}
                        onClick={e => this.handleClick(5, "busywork")}>
                        busywork <i className="fas fa-briefcase"></i>
                    </div>
                    <div
                        style={{color: this.myColor(6, "orange"), borderColor: this.myColor(6, "orange")}}
                        className={"button"}
                        onClick={e => this.handleClick(6, "cooking")}>
                        cooking <i className="fas fa-utensils"></i>
                    </div>
                </div>
            </div>
        )
    }
}

export default FormType;
