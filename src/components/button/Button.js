import React, {Component} from 'react';
import './Button.css';

function Button(props){
    const myClick = () => {
        props.myFunc();
        console.log('click');
    };
        return (
            <div>

                <button onClick={myClick}>{props.nameButton}</button>
            </div>
        );
}

export default Button;