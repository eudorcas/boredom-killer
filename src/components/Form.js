import React from 'react';
import FormType from './FormType';
import FormParticipants from './FormParticipants';
import FormRanges from './FormRanges';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: '',
            participants: '',
            price: '',
            accessibility: ''
        }

    }
    handleSubmit(e) {
        e.preventDefault();


    }
    handleType(e) {
        this.setState ({
            type: e.currentTarget.value

        });

    }
    handleParticipants(e) {
        this.setState ({
            participants: e.currentTarget.value
        })
    }
    handlePrice(e) {
        this.setState ({
            price: e.currentTarget.value/10
        })
    }
    handleAccess(e) {
        this.setState ({
            accessibility: e.currentTarget.value/10
        })
    }
    render() {
        return (
            <div className={"container"}>
                <h2 className={"form-header"}>Pick your preferences or just don't pick anything and let me surprise
                    you!</h2>
                <form onSubmit={e=>this.handleSubmit(e)} className={"form"}>
                    <FormType handleChange={e => this.handleType(e)}/>
                    <FormParticipants handleChange={e => this.handleParticipants(e)}/>
                    <FormRanges handlePriceChange={e => this.handlePrice(e)} handleAccessChange={e => this.handleAccess(e)}/>
                    <div className={"form-submit form-element"}>
                        <input type={"submit"} value={"Kill the boredom!"} className={"form-submit-button"}></input>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form;