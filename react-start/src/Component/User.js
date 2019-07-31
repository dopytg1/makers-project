import React from "react";

function User(props) {
    return(
        <div className="person">
            <h1>Name: {props.name}</h1>
            <p>Age: {props.age}</p>
            <button onClick={props.deletePerson}>Delete Person</button>
        </div>
    );
}

export default User;