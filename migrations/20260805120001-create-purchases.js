'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Purchases', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },
            customerId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Customers',
                    key: 'id',
                },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            },
            productType: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            fuelVolume: {
                type: Sequelize.DECIMAL(10, 2),
                allowNull: false,
            },
            unitPrice: {
                type: Sequelize.DECIMAL(10, 2),
                allowNull: true,
            },
            totalAmount: {
                type: Sequelize.DECIMAL(12, 2),
                allowNull: false,
            },
            paymentMethod: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            stationLocation: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            purchaseDate: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.fn('now'),
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

        await queryInterface.addIndex('Purchases', ['customerId']);
        await queryInterface.addIndex('Purchases', ['purchaseDate']);
    },

    down: async (queryInterface) => {
        await queryInterface.dropTable('Purchases');
    },
};
