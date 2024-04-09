import React, { useEffect, useState } from 'react';
import TextInput from '../form/TextInput';
import RadioInput from '../form/RadioInput';
import axios from 'axios';
import CountriesDropDown from '../form/CountriesDropDown';
import CountryItem from '../form/CountryItem';

const BusinessOwnerSetUp = ({ setSelectedUser }) => {
    const handleSubmit = async (e) => {
        e.preventDefault();

        const countries = await axios.get('https://restcountries.com/v3.1/all');

        const data = {
            businessName: document.getElementById('businessName').value,
        };

        // console.log(countries.data[1].flags.svg);
        // console.log(countries.data[1].altSpellings[1]);
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

                <div className="app-form-radio-container">
                    <p className="app-form-input-label ">Are you a tax payer?</p>
                    <RadioInput label={'Yes'} id={'isTaxPayer'} value={true} />
                    <RadioInput label={'No'} id={'isTaxPayer'} value={false} />
                </div>

                <TextInput label={'Legal form drop-down'} id={'legalForm'} />
                <TextInput label={'VAT Identification Number'} id={'vatIdentificationNumber'} />
            </div>
            <div className="business-owner-set-up-half">
                <TextInput label={'Country drop-down'} id={'country'} />
                <TextInput label={'Address line 1'} id={'addr1'} />
                <TextInput label={'Address line 2'} id={'addr2'} />
                <TextInput label={'Postal code'} id={'postalCode'} />
                <CountriesDropDown />
            </div>

            <button
                type="button"
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
