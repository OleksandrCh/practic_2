import React, {Component} from 'react';
import './Count.css'

function Count({count}) {
    return (
        <div className='myClass'>
            <h1>{count}</h1>
        </div>
    );
}

export default Count;
