'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Customers', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },
            fullName: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            phoneNumber: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
            },
            email: {
                type: Sequelize.STRING,
                allowNull: true,
                unique: true,
            },
            gender: {
                type: Sequelize.ENUM('male', 'female', 'other'),
                allowNull: true,
            },
            vehicleType: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            vehiclePlateNumber: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            address: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            totalSpend: {
                type: Sequelize.DECIMAL(12, 2),
                allowNull: false,
                defaultValue: 0,
            },
            tier: {
                type: Sequelize.ENUM('bronze', 'silver', 'gold'),
                allowNull: false,
                defaultValue: 'bronze',
            },
            lastVisitAt: {
                type: Sequelize.DATE,
                allowNull: true,
            },
            createdAt: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.fn('now'),
            },
            updatedAt: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.fn('now'),
            },
        });
    },

    down: async (queryInterface) => {
        await queryInterface.dropTable('Customers');
        await queryInterface.sequelize.query('DROP TYPE IF EXISTS "enum_Customers_gender";');
        await queryInterface.sequelize.query('DROP TYPE IF EXISTS "enum_Customers_tier";');
    },
};
