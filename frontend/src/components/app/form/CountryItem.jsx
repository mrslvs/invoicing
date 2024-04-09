import React from 'react';

const CountryItem = ({ imageUrl, imageAlt, countryLabel }) => {
    return (
        <li>
            <img
                src={imageUrl}
                alt={imageAlt}
                className="app-form-country-item-flag w-[5rem] h-[5rem]"
            />
            <span className="app-form-country-item-name">{countryLabel}</span>
        </li>
    );
};

export default CountryItem;
