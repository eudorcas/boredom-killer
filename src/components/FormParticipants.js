import React from 'react';

const formParticipants = (props) =>  {
        return (
            <div className={"form-participants form-element"}>
                <h3>Choose a number of people: </h3>
                <div className={"buttons"}>
                    <input onChange={props.handleChange} type={"radio"} id={"all-part"} name={"participants"} value={""} />
                    <label
                        htmlFor="all-part"
                        className={"button"}>
                        all
                    </label>
                    <input onChange={props.handleChange} type={"radio"} id={"one"} name={"participants"} value={"1"}/>
                    <label
                        htmlFor="one"
                        className={"button"}>
                        one
                    </label>
                    <input onChange={props.handleChange} type={"radio"} id={"two"} name={"participants"} value={"2"}/>
                    <label
                        htmlFor={"two"}
                        className={"button"}>
                        two
                    </label>
                    <input onChange={props.handleChange} type={"radio"} id={"three"} name={"participants"} value={"3"}/>
                    <label
                        htmlFor={"three"}
                        className={"button"}>
                        three
                    </label>
                    <input onChange={props.handleChange} type={"radio"} id={"four"} name={"participants"} value={"4"}/>
                    <label
                        htmlFor="four"
                        className={"button"}>
                        four
                    </label>
                </div>
            </div>
        )

};


export default formParticipants;