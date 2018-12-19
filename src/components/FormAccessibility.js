import React from 'react';
import Button from '../components/Button';

const access = [
    {value: "",
        id: "all-access",
        text: "all"},
    {value: "common",
        id: "common",
        text: "common"},
    {value: "medium",
    id: "medium",
    text: "medium"},
    {value: "unique",
        id: "unique",
        text: "unique"}
];

const formAccessibility = (props) => {

    const accessList = access.map(el => {
       return <Button key={el.id} handleChange={props.handleChange} id={el.id} name={"accessibility"} value={el.value} text={el.text} class={""}/>
    });

    return (

        <div className={"form-accessibility form-element"}>
            <h3>Choose accessibility: </h3>
            <div className={"buttons"}>
                {accessList}
            </div>
        </div>


    )


};


export default formAccessibility;