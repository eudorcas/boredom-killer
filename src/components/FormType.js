import React from 'react';

const formType = () => {
            return (
                <div className={"form-type form-element"}>
                    <h3>Choose a type:</h3>
                    <div className={"buttons"}>
                        <input type={"radio"} id={"all"} name={"type"}/>
                        <label
                            htmlFor={"all"}
                            className={"button"}>
                            all <i className="fas fa-question"></i>
                        </label>
                        <input type={"radio"} id={"recreating"} name={"type"}/>
                        <label
                            htmlFor={"recreating"}
                            className={"button"}>
                            recreation <i className="fas fa-bowling-ball"></i>
                        </label>
                        <input type={"radio"} id={"education"} name={"type"}/>
                        <label
                            htmlFor={"education"}
                            className={"button"}>
                            education <i className="fas fa-graduation-cap"></i>
                        </label>
                        <input type={"radio"} id={"relaxation"} name={"type"}/>
                        <label
                            htmlFor={"relaxation"}
                            className={"button"}>
                            relax <i className="fas fa-spa"></i>
                        </label>
                        <input type={"radio"} id={"social"} name={"type"}/>
                        <label
                            htmlFor={"social"}
                            className={"button"}>
                            social <i className="fas fa-glass-cheers"></i>
                        </label>
                        <input type={"radio"} id={"charity"} name={"type"}/>
                        <label
                            htmlFor={"charity"}
                            className={"button"}>
                            charity <i className="fas fa-hand-holding-heart"></i>
                        </label>
                        <input type={"radio"} id={"busywork"} name={"type"}/>
                        <label
                            htmlFor={"busywork"}
                            className={"button"}>
                            busywork <i className="fas fa-briefcase"></i>
                        </label>
                        <input type={"radio"} id={"cooking"} name={"type"}/>
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
