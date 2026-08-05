import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Customer = sequelize.define('Customer', {
    fullName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
        validate: { isEmail: true },
    },
    gender: {
        type: DataTypes.ENUM('male', 'female', 'other'),
        allowNull: true,
    },
    vehicleType: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    vehiclePlateNumber: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    totalSpend: {
        type: DataTypes.DECIMAL(12, 2),
        allowNull: false,
        defaultValue: 0,
    },
    tier: {
        type: DataTypes.ENUM('bronze', 'silver', 'gold'),
        allowNull: false,
        defaultValue: 'bronze',
    },
    lastVisitAt: {
        type: DataTypes.DATE,
        allowNull: true,
    },
}, {
    tableName: 'Customers',
    timestamps: true,
});

export default Customer;
