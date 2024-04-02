import React from 'react';
import TextInput from '../form/TextInput';
import RadioInput from '../form/RadioInput';

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

                {/* <div className="user-set-up-form-input-container"> */}
                <div className="app-form-radio-container">
                    <p className="app-form-input-label ">Are you a tax payer?</p>
                    {/* <div className="business-owner-set-up-form-is-tax-payer-parent"> */}
                    <RadioInput label={'Yes'} id={'isTaxPayer'} value={true} />
                    <RadioInput label={'No'} id={'isTaxPayer'} value={false} />
                    {/* </div> */}
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
