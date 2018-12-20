import React from 'react';
import Button from '../components/Button';

const prices = [
    {
        id: "all-prices",
        value: "",
        text: "all"
    },
    {
        id: "cheap",
        value: "cheap",
        text: "cheap"
    },
    {
        id: "normal",
        value: "normal",
        text: "normal"
    },
    {
        id: "expensive",
        value: "expensive",
        text: "expensive"
    }
];
const formPrice = (props) => {

    const pricesList = prices.map(el => {
        return <Button key={el.id} handleChange={props.handleChange} id={el.id} name={"prices"} value={el.value}
                       text={el.text} class={""}/>
    });

    return (

        <div className={"form-price form-element"}>
            <h3>Choose price: </h3>
            <div className={"buttons"}>
                {pricesList}
            </div>
        </div>
    )


};

export default formPrice;