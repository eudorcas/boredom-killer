import React from 'react';

const formAccessibility = (props) => {

    return (

        <div className={"form-accessibility form-element"}>
            <h3>Choose an accessibility: </h3>
            <div className={"buttons"}>
                <input onChange={props.handleChange} type={"radio"} id={"all-access"} name={"accessibility"} value={""} />
                <label
                    htmlFor="all-access"
                    className={"button"}>
                    all
                </label>
                <input onChange={props.handleChange} type={"radio"} id={"common"} name={"accessibility"} value={"common"}/>
                <label
                    htmlFor="common"
                    className={"button"}>
                    common
                </label>
                <input onChange={props.handleChange} type={"radio"} id={"medium"} name={"accessibility"} value={"medium"}/>
                <label
                    htmlFor={"medium"}
                    className={"button"}>
                    medium
                </label>
                <input onChange={props.handleChange} type={"radio"} id={"unique"} name={"accessibility"} value={"unique"}/>
                <label
                    htmlFor={"unique"}
                    className={"button"}>
                    unique
                </label>
            </div>
        </div>


    )


};


export default formAccessibility;