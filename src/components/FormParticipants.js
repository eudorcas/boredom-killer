import React from 'react';

const formParticipants = () =>  {
        return (
            <div className={"form-participants form-element"}>
                <h3>Choose a number of people: </h3>
                <div className={"buttons"}>
                    <input type={"radio"} id={"all-part"} name={"participants"} />
                    <label
                        htmlFor="all-part"
                        className={"button"}>
                        all
                    </label>
                    <input type={"radio"} id={"one"} name={"participants"} />
                    <label
                        htmlFor="one"
                        className={"button"}>
                        one
                    </label>
                    <input type={"radio"} id={"two"} name={"participants"} />
                    <label
                        htmlFor={"two"}
                        className={"button"}>
                        two
                    </label>
                    <input type={"radio"} id={"three"} name={"participants"} />
                    <label
                        htmlFor={"three"}
                        className={"button"}>
                        three
                    </label>
                    <input type={"radio"} id={"four"} name={"participants"} />
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