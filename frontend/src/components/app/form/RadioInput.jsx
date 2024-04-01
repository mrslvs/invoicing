import React from 'react';

const RadioInput = ({ label, id, value }) => {
    return (
        <div className="app-form-checkbox-container">
            <label htmlFor={id} className="">
                {label}
                <input
                    type="radio"
                    name={id}
                    id={id}
                    value={value}
                    className="user-set-up-input-input"
                ></input>
            </label>
        </div>
    );
};

export default RadioInput;
