import React, { useEffect, useState } from 'react';
import RoleSelection from './userSetUp/RoleSelection';
import '../../assets/styles/app/userSetUp.css';
import BusinessOwnerSetUp from './userSetUp/BusinessOwnerSetUp';

const UserSetUp = () => {
    const [selectedUser, setSelectedUser] = useState(0);

    useEffect(() => {
        console.log(selectedUser);
    }, [selectedUser]);

    return (
        <main className="user-set-up-main">
            {selectedUser === 1 ? (
                <BusinessOwnerSetUp />
            ) : selectedUser === 2 ? (
                <p>ho</p>
            ) : (
                <RoleSelection setSelectedUser={setSelectedUser} />
            )}
        </main>
    );
};

export default UserSetUp;
