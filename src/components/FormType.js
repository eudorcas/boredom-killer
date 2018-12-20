import React from 'react';
import Button from '../components/Button';

const types = [
    {value: "",
    id: "all",
    text: "all ",
    class: "fas fa-question"},
    {value: "recreational",
    id: "recreational",
    text: "recreation ",
    class: "fas fa-bowling-ball"},
    {value: "education",
    id: "education",
    text: "education ",
    class: "fas fa-graduation-cap"},
    {value: "relaxation",
    id: "relaxation",
    text: "relax ",
    class:"fas fa-spa"},
    {value: "social",
    id: "social",
    text: "social ",
    class: "fas fa-glass-cheers"},
    {value: "charity",
    id: "charity",
    text: "charity ",
    class:"fas fa-hand-holding-heart"},
    {value: "busywork",
    id: "busywork",
    text: "busywork ",
    class: "fas fa-briefcase"},
    {value: "cooking",
    id: "cooking",
    text: "cooking ",
    class: "fas fa-utensils"}];

const formType = (props) => {

    const typeList = types.map(el => {
        return <Button key={el.id} handleChange={props.handleChange} id={el.id} name={"type"} value={el.value} text={el.text} class={ el.class}/>
});
    return (
        <div className={"form-type form-element"}>
            <h3>Choose type:</h3>
            <div className={"buttons"}>
                {typeList}
            </div>
        </div>
    )


};

export default formType;
