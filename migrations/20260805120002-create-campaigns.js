'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Campaigns', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            description: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            rewardType: {
                type: Sequelize.ENUM('discount_percent', 'discount_flat', 'bonus_points', 'free_item'),
                allowNull: false,
            },
            rewardValue: {
                type: Sequelize.DECIMAL(10, 2),
                allowNull: false,
            },
            startDate: {
                type: Sequelize.DATEONLY,
                allowNull: false,
            },
            endDate: {
                type: Sequelize.DATEONLY,
                allowNull: false,
            },
            isActive: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: true,
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
        await queryInterface.dropTable('Campaigns');
        await queryInterface.sequelize.query('DROP TYPE IF EXISTS "enum_Campaigns_rewardType";');
    },
};
