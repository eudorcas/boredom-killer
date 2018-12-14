import React from 'react';
import FormType from './FormType';
import FormParticipants from './FormParticipants';

class Form extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className={"form container"}>
                <h2 className={"form-header"}>Pick your preferences or just don't pick anything and let me surprise
                    you!</h2>
                <FormType />
                <FormParticipants />
            </div>
        )
    }
}

export default Form;