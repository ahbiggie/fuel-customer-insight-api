import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Purchase = sequelize.define('Purchase', {
    customerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    productType: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fuelVolume: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    unitPrice: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
    },
    totalAmount: {
        type: DataTypes.DECIMAL(12, 2),
        allowNull: false,
    },
    paymentMethod: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    stationLocation: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    purchaseDate: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
}, {
    tableName: 'Purchases',
    timestamps: true,
});

export default Purchase;
