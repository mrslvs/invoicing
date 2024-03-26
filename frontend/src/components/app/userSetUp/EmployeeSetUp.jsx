import React from 'react';

const EmployeeSetUp = ({ setSelectedUser }) => {
    return (
        <div>
            <p>EmployeeSetUp</p>
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

export default EmployeeSetUp;
