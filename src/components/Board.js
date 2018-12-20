import React from 'react';

const board = (props) => {
    return (
        <div className={"container"}>
            <div className={"board"}>
                <p>{props.loading ? <div className={"signal"}/> : null}{props.text}</p>
            </div>
        </div>
    )

};


export default board;