import React, { useEffect, useState } from 'react';
import TextInput from '../form/TextInput';
import RadioInput from '../form/RadioInput';
import axios from 'axios';
import CountriesDropDown from '../form/CountriesDropDown';
import useTranslation from '../../../hooks/useTranslation';

const BusinessOwnerSetUp = ({ setSelectedUser }) => {
    const { t } = useTranslation();
    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            businessName: document.getElementById('businessName').value,
        };
    };

    return (
        <form className="business-owner-set-up-form" onSubmit={handleSubmit}>
            <div className="business-owner-set-up-half">
                <TextInput label={t('app-business-set-up-business-name')} id={'businessName'} />
                <TextInput
                    label={t('app-business-set-up-business-identification-number')}
                    id={'businessIdentificationNumber'}
                />
                <TextInput
                    label={t('app-business-set-up-tax-identification-number')}
                    id={'taxIdentificationNumber'}
                />

                <div className="app-form-radio-container">
                    <p className="app-form-input-label ">{t('app-business-set-up-tax-payer')}</p>
                    <RadioInput label={'Yes'} id={'isTaxPayer'} value={true} />
                    <RadioInput label={'No'} id={'isTaxPayer'} value={false} />
                </div>

                <TextInput label={'Legal form drop-down'} id={'legalForm'} />
                <TextInput
                    label={t('app-business-set-up-vat-identification-number')}
                    id={'vatIdentificationNumber'}
                />
            </div>
            <div className="business-owner-set-up-half">
                <TextInput label={'Country drop-down'} id={'country'} />
                <TextInput label={t('app-business-set-up-address-line-1')} id={'addr1'} />
                <TextInput label={t('app-business-set-up-address-line-2')} id={'addr2'} />
                <TextInput label={t('app-business-set-up-postal-code')} id={'postalCode'} />
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
