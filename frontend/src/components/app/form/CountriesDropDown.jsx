import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CountryItem from './CountryItem';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const CountriesDropDown = () => {
    const [showDropDown, setShowDropDown] = useState(true);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [countries, setCountries] = useState([]);
    const [countries2, setCountries2] = useState([]);

    const availableCountryAlphaCodes = ['SVK', 'GER', 'CZ', 'AT'];

    useEffect(() => {
        getCountries();
    }, []);

    const getCountries = async () => {
        const tempCountries = await Promise.all(
            availableCountryAlphaCodes.map(async (ctr) => {
                const uri = 'https://restcountries.com/v3.1/alpha/' + ctr;
                const tmp = await axios.get(uri);
                return tmp.data[0];
            })
        );

        setTimeout(() => {
            setCountries(tempCountries);
        }, 2000);

        countries.forEach((ctr) => {
            console.log(ctr);
        });
    };

    const selectCountryText = (
        <li>
            <span>Please select a country</span>
        </li>
    );

    const handleDropDown = () => {
        setShowDropDown(!showDropDown);
        console.log(showDropDown);
    };

    return (
        <div className="app-form-countries-drop-down-container">
            <button
                type="button"
                className="app-form-countries-drop-down-button"
                onClick={handleDropDown}
            >
                <ul>
                    {selectedCountry ? (
                        <CountryItem
                            imageUrl={selectedCountry.flags.svg}
                            imageAlt={selectedCountry.flags.alt}
                            countryLabel={selectedCountry.altSpellings[1]}
                        />
                    ) : (
                        selectCountryText
                    )}
                </ul>
            </button>
            <ul>
                {showDropDown ? (
                    countries.length ? (
                        countries.map((ctr) => {
                            return (
                                <CountryItem
                                    key={ctr.cca3}
                                    imageUrl={ctr.flags.svg}
                                    imageAlt={ctr.flags.alt}
                                    countryLabel={ctr.altSpellings[1]}
                                    // onClick={setSelectedCountry(ctr.cca3)}
                                />
                            );
                        })
                    ) : (
                        <AiOutlineLoading3Quarters className="animate-spin absolute inset-0 w-[5rem] h-[5rem] text-blue-500" />
                    )
                ) : (
                    <p>ok</p>
                )}
            </ul>
        </div>
    );
};

export default CountriesDropDown;
