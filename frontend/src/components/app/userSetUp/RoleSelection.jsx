import React, { useState } from 'react';
import '../../../assets/styles/app/roleSelection.css';

const RoleSelection = ({ setSelectedUser }) => {
    // const [selectedUser, setSelectedUser] = useState(0);

    const selectUser = (u) => {
        setSelectedUser(u);
    };

    return (
        <div className="role-selection-parent-div">
            <div className="role-selection-option">
                <button onClick={() => selectUser(1)}>I want to set up my business</button>
            </div>
            <div className="role-selection-option">
                <button onClick={() => selectUser(2)}>I am an employee</button>
            </div>
        </div>
    );
};

export default RoleSelection;
