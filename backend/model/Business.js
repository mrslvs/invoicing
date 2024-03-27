const { Sequelize } = require('sequelize');
const database = require('../config/database');

// -------------------------- legal form --------------------------- english ----------------------------- slovak
//                             živnosť                            self-employed                          živnostník
//                  spoločnosť s ručením obmedzeným           Ltd. (company limited)                       s.r.o.
//                       akciová spoločnosť                  JSC (joint stock company)                      a.s.

module.exports = database.define(
    'business',
    {
        id: {
            type: Sequelize.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        name: {
            // "Obchodné meno" (Trade Name)
            // Povinné pre  všetky typy podnikateľských subjektov (živnostníci, spoločnosti)
            // Mandatory for all business entities (self-employed, companies)
            // Poznámka: Obchodné meno sa musí zhodovať s názvom uvedeným v živnostenskom alebo obchodnom registri.
            // Note: The trade name must match the name listed in the trade or commercial register.
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
        },

        businessIdentificationNumber: {
            // "IČO" (Business Identification Number)
            // Povinné pre  všetky typy podnikateľských subjektov (živnostníci, spoločnosti)
            // Mandatory for all businesses (self-employed, companies, etc.)
            // Unique identification number assigned by the Slovak Business Register.
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
        },

        taxIdentificationNumber: {
            // "DIČ" (VAT Identification Number) (DICO)
            // Optional for non-VAT payers (self-employed with income below threshold)
            // Mandatory for VAT payers (companies, self-employed above threshold)
            // Unique identification number for VAT purposes.
            type: Sequelize.DataTypes.STRING,
            allowNull: true,
        },

        vatIdentificationNumber: {
            // "IČ DPH" (VAT Identification Number) (DICO)
            // Optional for non-VAT payers (self-employed with income below threshold)
            // Mandatory for VAT payers (companies, self-employed above threshold)
            // Unique identification number for VAT purposes.
            type: Sequelize.DataTypes.STRING,
            allowNull: true,
        },

        legalForm: {
            // "Právna forma" (Legal Form)
            // Specifies the legal structure of the business (self-employed, a.s.(JSC), s.r.o.(Ltd.)).
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
        },
        // "Sídlo" (Registered Office Address)
        // Mandatory for all businesses (self-employed, companies, etc.)
        // Represents the official legal address of the business.
        // Poznámka: Sídlo je adresa, na ktorej sa nachádza vedenie firmy a ktorá je zapísaná v príslušnom registri.
        // TABLE ADDRESS
    },
    {
        freezeTableName: true,
        timestamps: true,
    }
);
