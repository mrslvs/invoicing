import React from 'react';

const BusinessOwnerSetUp = ({ setSelectedUser }) => {
    return (
        <div>
            <p>BusinessOwnerSetUp</p>
            <button
                onClick={() => {
                    setSelectedUser(0);
                }}
            >
                GO BACK BUTTON
            </button>
        </div>
    );
};

export default BusinessOwnerSetUp;