import React from "react";
import img from "../img/gun.png";

const header = () => {
    return <div className={"header"}>
        <h1>Boredom Killer
            <img src={img} alt="gun"/>
        </h1>

    </div>
};

export default header;