import React from 'react';

const TextInput = ({ label, id, type = 'text', isValid = true, onChange }) => {
    // label will be multi-language ID
    return (
        <div className="home-input-container">
            <label
                htmlFor={id}
                className={isValid ? 'home-input-label' : 'home-input-label text-red-500'}
            >
                {label}
            </label>
            <input type={type} name={id} id={id} className="home-input-text" onChange={onChange} />
        </div>
    );
};

export default TextInput;
