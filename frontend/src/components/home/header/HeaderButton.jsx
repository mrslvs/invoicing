import React from 'react';

const HeaderButton = ({ buttonText, id, selection, setSelection, additionalClasses }) => {
    let classes = 'home-header-button home-animated-hover ' + additionalClasses;
    return (
        <button
            value={buttonText}
            onClick={(e) => {
                setSelection(id);
            }}
            className={selection === id ? classes + ' home-header-active' : classes}
        >
            {buttonText}
        </button>
    );
};

export default HeaderButton;
