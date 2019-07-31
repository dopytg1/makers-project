import React from "react";

function User(props) {
    const incAge = function() {
            if(props.increaseAge){
                return(
                    <button onClick={props.increaseAge}> +1 to age</button>
                )
            }
    }
    return(
        <div className="person">
            <h1>Name: {props.name}</h1>
            <p>Age: {props.age}</p>
            <button onClick={props.changeFunc}>Change name</button>
            {incAge()}
        </div>
    );
}

export default User;