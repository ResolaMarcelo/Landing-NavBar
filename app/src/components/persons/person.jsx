import React from 'react'

function person(props) {
    return (
        <div>
            <img src={  props.img} alt="" />
            <h1>    {props.name} </h1>
            <p>     {props.role} </p>

        </div>
    )
}

export default person
