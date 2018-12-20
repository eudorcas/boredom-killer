import React from 'react';

const button = (props) => {
    return (
        <>
            <input onChange={props.handleChange} type={"radio"} id={props.id} name={props.name} value={props.value}/>
            <label
                htmlFor={props.id}
                className={"button"}>
                {props.text}
                {props.class.length !== 0 ? <i className={props.class}></i> : null}
            </label>
        </>
    )


};

export default button;