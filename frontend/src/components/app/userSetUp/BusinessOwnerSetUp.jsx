import React from 'react';
import TextInput from '../form/TextInput';

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
                <TextInput label={'Business Name'} id={'businessName'} />
                <TextInput
                    label={'Business Identification Number'}
                    id={'businessIdentificationNumber'}
                />
                <TextInput label={'Tax Identification Number'} id={'taxIdentificationNumber'} />

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

                <TextInput label={'Legal form drop-down'} id={'legalForm'} />
                <TextInput label={'VAT Identification Number'} id={'vatIdentificationNumber'} />
            </div>
            <div className="business-owner-set-up-half">
                <TextInput label={'Country drop-down'} id={'country'} />
                <TextInput label={'Address line 1'} id={'addr1'} />
                <TextInput label={'Address line 2'} id={'addr2'} />
                <TextInput label={'Postal code'} id={'postalCode'} />
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
