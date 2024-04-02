import React from 'react';
import '../../../assets/styles/app/form.css';

const TextInput = ({ label, id, type = 'text', isValid = true, onChange }) => {
    return (
        <div className="app-form-input-container">
            <label htmlFor={id} className="app-form-input-label">
                {label}
            </label>
            <input
                type={type}
                name={id}
                id={id}
                className="app-form-input-text"
                onChange={onChange}
            />
        </div>
    );
};

export default TextInput;
