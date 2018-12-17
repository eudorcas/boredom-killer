import React from 'react';

const formRanges = (props) => {

    return (
        <div className={"form-ranges"}>
            <div className={"form-price form-element"}>
                <h3>Choose a price: </h3>
                <span>cheap</span>
                <input onChange={props.handlePriceChange} type={"range"} className={"slider"} name={"price"} min={"0"}
                       max={"10"} step={"1"}/>
                <span>expensive</span>
            </div>
            <div className={"form-accessibility form-element"}>
                <h3>Choose an accessibility: </h3>
                <span>common</span>
                <input onChange={props.handleAccessChange} type={"range"} className={"slider"} name={"accessibility"} min={"0"} max={"10"} step={"1"}/>
                <span>unique</span>
            </div>
        </div>
    )


}


export default formRanges;