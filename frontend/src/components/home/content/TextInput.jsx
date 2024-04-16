import React from 'react';

const TextInput = ({
    label,
    id,
    type = 'text',
    isValid = true,
    onChange,
    additionalParentDivClasses,
    additionalInputClasses,
}) => {
    // label will be multi-language ID
    const baseParentDivClasses = 'home-input-container ' + additionalParentDivClasses;
    const baseInputClasses =
        'home-input-text ' + (isValid ? '' : 'border border-red-500 ') + additionalInputClasses;

    return (
        <div className={baseParentDivClasses}>
            <input
                type={type}
                name={id}
                id={id}
                className={baseInputClasses}
                onChange={onChange}
                placeholder={label}
            />
        </div>
    );
};

export default TextInput;
