import React, { useState } from 'react';
import useTranslation from '../../../hooks/useTranslation';

const RoleSelection = ({ setSelectedUser }) => {
    const { t } = useTranslation();
    const selectUser = (userId) => {
        setSelectedUser(userId);
    };

    return (
        <div className="role-selection-parent-div dark:bg-darkBackground">
            <button onClick={() => selectUser(1)} className="role-selection-option">
                {t('app-role-selection-set-up-business-button')}
            </button>
            <button onClick={() => selectUser(2)} className="role-selection-option">
                {t('app-role-selection-employee-button')}
            </button>
        </div>
    );
};

export default RoleSelection;
