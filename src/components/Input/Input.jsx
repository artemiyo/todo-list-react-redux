import React from "react";
import './Input.scss';

const Input = ({name, value, label, ...props}) => {
    return (
        <label className='form-input'>
            <span className="form-input__label">{label}</span>
            <input
                type="text"
                name={name}
                value={value}
                className="form-input__task"
                {...props}
            />
        </label>
    )
}

export default Input;
