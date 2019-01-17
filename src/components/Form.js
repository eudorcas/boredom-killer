import React from 'react';
import FormType from './FormType';
import FormParticipants from './FormParticipants';
import FormPrice from './FormPrice';
import FormAccessibility from './FormAccessibility';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: '',
            participants: '',
            minPrice: '',
            maxPrice: '',
            minAccessibility: '',
            maxAccessibility: ''
        }

    }

    handleType(e) {
        this.setState({
            type: e.currentTarget.value

        });

    }

    handleParticipants(e) {
        this.setState({
            participants: e.currentTarget.value
        })
    }

    handlePrice(e) {
        if (e.currentTarget.value === "cheap") {
            this.setState({
                minPrice: "0",
                maxPrice: "0.2"
            })
        }
        else if (e.currentTarget.value === "normal") {
            this.setState({
                minPrice: "0.3",
                maxPrice: "0.6"
            })
        }
        else {
            this.setState({
                minPrice: "",
                maxPrice: ""
            })
        }
    }

    handleAccess(e) {
        if (e.currentTarget.value === "common") {
            this.setState({
                minAccessibility: "0",
                maxAccessibility: "0.2"
            })
        }
        else if (e.currentTarget.value === "medium") {
            this.setState({
                minAccessibility: "0.3",
                maxAccessibility: "0.6"
            })
        }

        else {
            this.setState({
                minAccessibility: "",
                maxAccessibility: ""
            })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleSubmit(this.state.type, this.state.participants, this.state.minPrice, this.state.maxPrice, this.state.minAccessibility, this.state.maxAccessibility);
    };

    render() {
        return (
            <div className={"container"}>
                <h2 className={"form-header"}>Pick your preferences or just don't pick anything and let me surprise
                    you!</h2>
                <form onSubmit={e => this.handleSubmit(e)} className={"form"}>
                    <FormType handleChange={e => this.handleType(e)}/>
                    <FormParticipants handleChange={e => this.handleParticipants(e)}/>
                    <FormPrice handleChange={e => this.handlePrice(e)}/>
                    <FormAccessibility handleChange={e => this.handleAccess(e)}/>
                    <div className={"form-submit form-element"}>
                        <input onSubmit={e => this.handleSubmit(e)} type={"submit"} value={"Kill the boredom!"}
                               className={"form-submit-button"}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form;