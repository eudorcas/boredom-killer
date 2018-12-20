import React from 'react';
import Button from '../components/Button';

const participants = [
    {
        value: "",
        id: "all-part",
        text: "all"
    },
    {
        value: "1",
        id: "one",
        text: "one"
    },
    {
        value: "2",
        id: "two",
        text: "two"
    },
    {
        value: "3",
        id: "three",
        text: "three"
    },
    {
        value: "4",
        id: "four",
        text: "four"
    }
];

const formParticipants = (props) => {

    const participantsList = participants.map(el => {
        return <Button key={el.id} handleChange={props.handleChange} id={el.id} name={"participants"} value={el.value}
                       text={el.text} class={""}/>
    });
    return (
        <div className={"form-participants form-element"}>
            <h3>Choose number of people: </h3>
            <div className={"buttons"}>
                {participantsList}
            </div>
        </div>
    )

};


export default formParticipants;