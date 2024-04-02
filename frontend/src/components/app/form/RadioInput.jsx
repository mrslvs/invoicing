import React from 'react';
import '../../../assets/styles/app/form.css';

const RadioInput = ({ label, id, value, onChange }) => {
    return (
        <div className="app-form-radio-option-container">
            <label htmlFor={id} className="">
                {label}
                <input
                    type="radio"
                    name={id}
                    id={id}
                    value={value}
                    className="app-form-radio-input"
                    onChange={onChange}
                ></input>
            </label>
        </div>
    );
};

export default RadioInput;
