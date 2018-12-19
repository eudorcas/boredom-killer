import React from 'react';

const formPrice = (props) => {

    return (

            <div className={"form-price form-element"}>
                <h3>Choose price: </h3>
                <div className={"buttons"}>
                    <input onChange={props.handleChange} type={"radio"} id={"all-prices"} name={"prices"} value={""} />
                    <label
                        htmlFor="all-prices"
                        className={"button"}>
                        all
                    </label>
                    <input onChange={props.handleChange} type={"radio"} id={"cheap"} name={"prices"} value={"cheap"}/>
                    <label
                        htmlFor="cheap"
                        className={"button"}>
                        cheap
                    </label>
                    <input onChange={props.handleChange} type={"radio"} id={"normal"} name={"prices"} value={"normal"}/>
                    <label
                        htmlFor={"normal"}
                        className={"button"}>
                        normal
                    </label>
                    <input onChange={props.handleChange} type={"radio"} id={"expensive"} name={"prices"} value={"expensive"}/>
                    <label
                        htmlFor={"expensive"}
                        className={"button"}>
                        expensive
                    </label>
                </div>
            </div>


    )


};


export default formPrice;