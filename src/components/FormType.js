import React from 'react';

const formType = (props) => {

        return (
            <div className={"form-type form-element"}>
                <h3>Choose a type:</h3>
                <div className={"buttons"}>
                    <input onChange={props.handleChange} type={"radio"} id={"all"} name={"type"} value={""}/>
                    <label
                        htmlFor={"all"}
                        className={"button"}>
                        all <i className="fas fa-question"></i>
                    </label>
                    <input onChange={props.handleChange} type={"radio"} id={"recreating"} name={"type"} value={"recreating"}/>
                    <label
                        htmlFor={"recreating"}
                        className={"button"}>
                        recreation <i className="fas fa-bowling-ball"></i>
                    </label>
                    <input onChange={props.handleChange} type={"radio"} id={"education"} name={"type"} value={"education"}/>
                    <label
                        htmlFor={"education"}
                        className={"button"}>
                        education <i className="fas fa-graduation-cap"></i>
                    </label>
                    <input onChange={props.handleChange} type={"radio"} id={"relaxation"} name={"type"} value={"relaxation"}/>
                    <label
                        htmlFor={"relaxation"}
                        className={"button"}>
                        relax <i className="fas fa-spa"></i>
                    </label>
                    <input onChange={props.handleChange} type={"radio"} id={"social"} name={"type"} value={"social"}/>
                    <label
                        htmlFor={"social"}
                        className={"button"}>
                        social <i className="fas fa-glass-cheers"></i>
                    </label>
                    <input onChange={props.handleChange} type={"radio"} id={"charity"} name={"type"} value={"charity"}/>
                    <label
                        htmlFor={"charity"}
                        className={"button"}>
                        charity <i className="fas fa-hand-holding-heart"></i>
                    </label>
                    <input onChange={props.handleChange} type={"radio"} id={"busywork"} name={"type"} value={"busywork"}/>
                    <label
                        htmlFor={"busywork"}
                        className={"button"}>
                        busywork <i className="fas fa-briefcase"></i>
                    </label>
                    <input onChange={props.handleChange} type={"radio"} id={"cooking"} name={"type"} value={"cooking"}/>
                    <label
                        htmlFor={"cooking"}
                        className={"button"}>
                        cooking <i className="fas fa-utensils"></i>
                    </label>
                </div>
            </div>
        )


};

export default formType;
