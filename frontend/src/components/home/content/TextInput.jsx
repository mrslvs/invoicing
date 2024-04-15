import React from 'react';

const TextInput = ({
    label,
    id,
    type = 'text',
    isValid = true,
    onChange,
    additionalParentDivClasses,
    additionalLabelClasses,
    additionalInputClasses,
}) => {
    // label will be multi-language ID
    const baseParentDivClasses = 'home-input-container ' + additionalParentDivClasses;
    const baseLabelClasses = 'home-input-label ' + additionalLabelClasses;
    const baseInputClasses = 'home-input-text ' + additionalInputClasses;

    return (
        <div className={baseParentDivClasses}>
            <label
                htmlFor={id}
                className={isValid ? baseLabelClasses : baseLabelClasses + ' text-red-500'}
            >
                {label}
            </label>
            <input type={type} name={id} id={id} className={baseInputClasses} onChange={onChange} />
        </div>
    );
};

export default TextInput;
