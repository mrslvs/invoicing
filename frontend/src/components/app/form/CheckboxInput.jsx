import React from 'react';

const CheckboxInput = () => {
    return (
        <div className="user-set-up-form-input-container">
            <p className="user-set-up-input-label">Are you a tax payer?</p>
            <div className="business-owner-set-up-form-is-tax-payer-parent">
                <div className="business-owner-set-up-form-checkbox-container">
                    <label>
                        Yes
                        <input
                            className="user-set-up-input-input"
                            type="checkbox"
                            name="isTaxPayer"
                            id="isTaxPayer"
                        ></input>
                    </label>
                </div>
                <div className="business-owner-set-up-form-checkbox-container">
                    <label>
                        No
                        <input
                            className="user-set-up-input-input"
                            type="checkbox"
                            name="isTaxPayer"
                            id="isTaxPayer"
                        ></input>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default CheckboxInput;
