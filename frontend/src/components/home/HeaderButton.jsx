import React from 'react';

const HeaderButton = ({ buttonText, selection, setSelection, className }) => {
    let classes = 'home-header-button home-animated-hover' + className;
    return (
        <button
            value={buttonText}
            onClick={(e) => {
                setSelection(e.target.value);
            }}
            className={selection === buttonText ? classes + ' home-header-active' : classes}
        >
            {buttonText}
        </button>
    );
};

export default HeaderButton;
