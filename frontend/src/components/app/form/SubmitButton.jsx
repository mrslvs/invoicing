import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const SubmitButton = ({ parentDivClasses, isDisabled = false, isLoading, buttonLabel }) => {
    const enabledClasses = 'app-submit-button';
    const disabledClasses = 'home-submit home-submit-disabled';
    return (
        <div className={parentDivClasses}>
            {isLoading ? (
                <AiOutlineLoading3Quarters className="home-loading-icon" />
            ) : (
                <input
                    type="submit"
                    disabled={isDisabled}
                    className={isDisabled ? disabledClasses : enabledClasses}
                    value={buttonLabel}
                />
            )}
        </div>
    );
};

export default SubmitButton;
