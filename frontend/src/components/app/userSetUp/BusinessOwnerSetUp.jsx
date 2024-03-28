import React from 'react';

const BusinessOwnerSetUp = ({ setSelectedUser }) => {
    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            businessName: document.getElementById('businessName').value,
        };

        console.log(data);
    };

    return (
        <form className="business-owner-set-up-form" onSubmit={handleSubmit}>
            <div className="business-owner-set-up-half">
                <div className="user-set-up-form-input-container">
                    <label className="user-set-up-input-label" htmlFor="businessName">
                        Business name
                    </label>
                    <input
                        className="user-set-up-input-input"
                        type="text"
                        name="businessName"
                        id="businessName"
                    ></input>
                </div>
                <div className="user-set-up-form-input-container">
                    <label
                        className="user-set-up-input-label"
                        htmlFor="businessIdentificationNumber"
                    >
                        Business Identification Number
                    </label>
                    <input
                        className="user-set-up-input-input"
                        type="text"
                        name="businessIdentificationNumber"
                        id="businessIdentificationNumber"
                    ></input>
                </div>
                <div className="user-set-up-form-input-container">
                    <label className="user-set-up-input-label" htmlFor="taxIdentificationNumber">
                        Tax Identification Number
                    </label>
                    <input
                        className="user-set-up-input-input"
                        type="text"
                        name="taxIdentificationNumber"
                        id="taxIdentificationNumber"
                    ></input>
                </div>
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
                <div className="user-set-up-form-input-container">
                    <label className="user-set-up-input-label" htmlFor="legalForm">
                        Legal form drop-down
                    </label>
                    <input
                        className="user-set-up-input-input"
                        type="text"
                        name="legalForm"
                        id="legalForm"
                    ></input>
                </div>
                <div className="user-set-up-form-input-container">
                    <label className="user-set-up-input-label" htmlFor="vatIdentificationNumber">
                        VAT Identification Number
                    </label>
                    <input
                        className="user-set-up-input-input"
                        type="text"
                        name="vatIdentificationNumber"
                        id="vatIdentificationNumber"
                    ></input>
                </div>
            </div>
            <div className="business-owner-set-up-half">
                <div className="user-set-up-form-input-container">
                    <label className="user-set-up-input-label" htmlFor="">
                        Country
                    </label>
                    <input className="user-set-up-input-input" type="text" name="" id=""></input>
                </div>
                <div className="user-set-up-form-input-container">
                    <label className="user-set-up-input-label" htmlFor="">
                        Address line 1
                    </label>
                    <input className="user-set-up-input-input" type="text" name="" id=""></input>
                </div>
                <div className="user-set-up-form-input-container">
                    <label className="user-set-up-input-label" htmlFor="">
                        Address line 3
                    </label>
                    <input className="user-set-up-input-input" type="text" name="" id=""></input>
                </div>

                <div className="user-set-up-form-input-container">
                    <label className="user-set-up-input-label" htmlFor="">
                        Postal code
                    </label>
                    <input className="user-set-up-input-input" type="text" name="" id=""></input>
                </div>
            </div>

            <button
                onClick={() => {
                    setSelectedUser(0);
                }}
            >
                GO BACK
            </button>
            <input type="submit" value={'SUBMIT'}></input>
        </form>
    );
};

export default BusinessOwnerSetUp;
