import React from 'react';
import './InputField.css';


const InputField = (props) => {
    return(
        <div className={"firstColDiv"}>
            <input className={"inputFieldStyle"} placeholder={props.name}/>
        </div>
    );
};
export default InputField