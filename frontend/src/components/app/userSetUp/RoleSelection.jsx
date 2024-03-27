import React, { useState } from 'react';
import '../../../assets/styles/app/roleSelection.css';

const RoleSelection = ({ setSelectedUser }) => {
    const selectUser = (userId) => {
        setSelectedUser(userId);
    };

    return (
        <div className="role-selection-parent-div">
            <button onClick={() => selectUser(1)} className="role-selection-option">
                I want to set up my business
            </button>
            <button onClick={() => selectUser(2)} className="role-selection-option">
                I am an employee
            </button>
        </div>
    );
};

export default RoleSelection;
