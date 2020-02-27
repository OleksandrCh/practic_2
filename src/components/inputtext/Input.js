import React from 'react';
import './inputtext.css'

function Input(props) {
    return (
        <input type="number" value={props.value} onChange={props.enter}/>
    );
}

export default Input;