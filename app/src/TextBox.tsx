import React from 'react';
import './App.css';

function TextBox(props: any) {
    return (
        <div className="TextBox">
            <label> {props.label} </label>
            <input type={'text'}
                   onChange={(event) => props.change(event.target.value)}/>
        </div>
    );
}

export default TextBox;