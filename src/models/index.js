import sequelize from '../config/database.js';
import Customer from './Customer.js';
import Purchase from './Purchase.js';
import Campaign from './Campaign.js';

Customer.hasMany(Purchase, { foreignKey: 'customerId', onDelete: 'CASCADE' });
Purchase.belongsTo(Customer, { foreignKey: 'customerId' });

export { sequelize, Customer, Purchase, Campaign };
