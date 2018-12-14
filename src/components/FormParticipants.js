import React from 'react';

class FormParticipants extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            participants: '',
            active: null,

        }
    }
    handleClick = (position, type) => {
        if (this.state.active === position) {
            this.setState({
                participants: '',
                active: null
            })
        }
        else {
            this.setState({

                active: position
            })
        }
    };

    myColor = (position) => {
        if (this.state.active === position) {
            return "blue";
        }
        return "";
    };

    render() {
        return (
            <div className={"form-participants"}>
                <h3>Choose a number of people: </h3>
                <div className={"buttons"}>
                    <div
                        style={{color: this.myColor(0), borderColor: this.myColor(0)}}
                        className={"button"}
                        onClick={e => this.handleClick(0, "1")}>
                        one
                    </div>
                    <div
                        style={{color: this.myColor(1), borderColor: this.myColor(1)}}
                        className={"button"}
                        onClick={e => this.handleClick(1, "2")}>
                        two
                    </div>
                    <div
                        style={{color: this.myColor(2), borderColor: this.myColor(2)}}
                        className={"button"}
                        onClick={e => this.handleClick(2, "3")}>
                        three
                    </div>
                    <div
                        style={{color: this.myColor(3), borderColor: this.myColor(3)}}
                        className={"button"}
                        onClick={e => this.handleClick(3, "4")}>
                        four
                    </div>
                </div>
            </div>
        )
    }
}


export default FormParticipants;