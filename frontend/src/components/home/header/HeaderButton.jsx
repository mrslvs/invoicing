import React from 'react';

const HeaderButton = ({ buttonText, selection, setSelection, additionalClasses }) => {
    let classes = 'home-header-button home-animated-hover ' + additionalClasses;
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
