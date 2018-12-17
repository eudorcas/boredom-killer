import React from 'react';
import FormType from './FormType';
import FormParticipants from './FormParticipants';
import FormPrice from './FormRanges';

class Form extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className={"container"}>
                <h2 className={"form-header"}>Pick your preferences or just don't pick anything and let me surprise
                    you!</h2>
                <form className={"form"}>
                    <FormType/>
                    <FormParticipants/>
                    <FormPrice/>
                    <div className={"form-submit form-element"}>
                        <input type={"submit"} value={"Kill the boredom!"} className={"form-submit-button"}></input>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form;