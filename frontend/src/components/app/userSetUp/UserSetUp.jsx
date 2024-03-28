import React, { useEffect, useState } from 'react';
import RoleSelection from './RoleSelection';
import '../../../assets/styles/app/userSetUp.css';
import BusinessOwnerSetUp from './BusinessOwnerSetUp';
import EmployeeSetUp from './EmployeeSetUp';

const UserSetUp = () => {
    const [selectedUser, setSelectedUser] = useState(0);

    useEffect(() => {
        console.log(selectedUser);
    }, [selectedUser]);

    return (
        <main className="user-set-up-main">
            {selectedUser === 1 ? (
                <BusinessOwnerSetUp setSelectedUser={setSelectedUser} />
            ) : selectedUser === 2 ? (
                <EmployeeSetUp setSelectedUser={setSelectedUser} />
            ) : (
                <RoleSelection setSelectedUser={setSelectedUser} />
            )}
        </main>
    );
};

export default UserSetUp;
