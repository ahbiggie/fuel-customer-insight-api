'use strict';

module.exports = {
    up: async (queryInterface) => {
        const now = new Date();

        const customers = [
            { id: 1, fullName: 'Adaeze Okafor', phoneNumber: '+2348031234501', email: 'adaeze.okafor@example.com', gender: 'female', vehicleType: 'Sedan', vehiclePlateNumber: 'ABC-123XY', address: '12 Allen Avenue, Ikeja', totalSpend: 120000, tier: 'gold', lastVisitAt: new Date('2026-08-01') },
            { id: 2, fullName: 'Chinedu Okoye', phoneNumber: '+2348031234502', email: 'chinedu.okoye@example.com', gender: 'male', vehicleType: 'SUV', vehiclePlateNumber: 'LSD-456AB', address: '5 Adeola Odeku St, VI', totalSpend: 35000, tier: 'silver', lastVisitAt: new Date('2026-07-25') },
            { id: 3, fullName: 'Blessing Umeh', phoneNumber: '+2348031234503', email: 'blessing.umeh@example.com', gender: 'female', vehicleType: 'Hatchback', vehiclePlateNumber: 'KJA-789CD', address: '9 Ogui Road, Enugu', totalSpend: 10000, tier: 'bronze', lastVisitAt: new Date('2026-08-03') },
            { id: 4, fullName: 'Tunde Bakare', phoneNumber: '+2348031234504', email: 'tunde.bakare@example.com', gender: 'male', vehicleType: 'Truck', vehiclePlateNumber: 'OYO-321EF', address: '22 Ring Road, Ibadan', totalSpend: 12000, tier: 'bronze', lastVisitAt: new Date('2026-06-20') },
            { id: 5, fullName: 'Ngozi Eze', phoneNumber: '+2348031234505', email: 'ngozi.eze@example.com', gender: 'female', vehicleType: 'Sedan', vehiclePlateNumber: 'ANM-654GH', address: '3 Zik Avenue, Awka', totalSpend: 8000, tier: 'bronze', lastVisitAt: new Date('2026-04-01') },
            { id: 6, fullName: 'Emeka Nwosu', phoneNumber: '+2348031234506', email: 'emeka.nwosu@example.com', gender: 'male', vehicleType: 'SUV', vehiclePlateNumber: 'ABJ-987IJ', address: '14 Aminu Kano Cr, Abuja', totalSpend: 125000, tier: 'gold', lastVisitAt: new Date('2026-08-04') },
            { id: 7, fullName: 'Fatima Sule', phoneNumber: '+2348031234507', email: 'fatima.sule@example.com', gender: 'female', vehicleType: 'Sedan', vehiclePlateNumber: 'KAN-159KL', address: '7 Zaria Road, Kano', totalSpend: 9000, tier: 'bronze', lastVisitAt: new Date('2026-06-05') },
            { id: 8, fullName: 'Ibrahim Musa', phoneNumber: '+2348031234508', email: 'ibrahim.musa@example.com', gender: 'male', vehicleType: 'Truck', vehiclePlateNumber: 'SOK-753MN', address: '18 Sultan Road, Sokoto', totalSpend: 7000, tier: 'bronze', lastVisitAt: new Date('2026-01-15') },
        ].map((c) => ({ ...c, createdAt: now, updatedAt: now }));

        await queryInterface.bulkInsert('Customers', customers);
        await queryInterface.sequelize.query(
            'SELECT setval(pg_get_serial_sequence(\'"Customers"\', \'id\'), (SELECT MAX(id) FROM "Customers"));'
        );

        const purchases = [
            { customerId: 1, productType: 'PMS', fuelVolume: 40, unitPrice: 1125, totalAmount: 45000, paymentMethod: 'card', stationLocation: 'Ikeja Station', purchaseDate: new Date('2026-07-01') },
            { customerId: 1, productType: 'PMS', fuelVolume: 35, unitPrice: 1140, totalAmount: 40000, paymentMethod: 'cash', stationLocation: 'Ikeja Station', purchaseDate: new Date('2026-07-15') },
            { customerId: 1, productType: 'Diesel', fuelVolume: 30, unitPrice: 1160, totalAmount: 35000, paymentMethod: 'transfer', stationLocation: 'Ikeja Station', purchaseDate: new Date('2026-08-01') },

            { customerId: 2, productType: 'PMS', fuelVolume: 18, unitPrice: 1120, totalAmount: 20000, paymentMethod: 'card', stationLocation: 'VI Station', purchaseDate: new Date('2026-07-10') },
            { customerId: 2, productType: 'PMS', fuelVolume: 13, unitPrice: 1150, totalAmount: 15000, paymentMethod: 'cash', stationLocation: 'VI Station', purchaseDate: new Date('2026-07-25') },

            { customerId: 3, productType: 'PMS', fuelVolume: 9, unitPrice: 1110, totalAmount: 10000, paymentMethod: 'cash', stationLocation: 'Enugu Station', purchaseDate: new Date('2026-08-03') },

            { customerId: 4, productType: 'Diesel', fuelVolume: 10, unitPrice: 1200, totalAmount: 12000, paymentMethod: 'transfer', stationLocation: 'Ibadan Station', purchaseDate: new Date('2026-06-20') },

            { customerId: 5, productType: 'PMS', fuelVolume: 7, unitPrice: 1140, totalAmount: 8000, paymentMethod: 'cash', stationLocation: 'Awka Station', purchaseDate: new Date('2026-04-01') },

            { customerId: 6, productType: 'PMS', fuelVolume: 44, unitPrice: 1130, totalAmount: 50000, paymentMethod: 'card', stationLocation: 'Abuja Station', purchaseDate: new Date('2026-07-20') },
            { customerId: 6, productType: 'PMS', fuelVolume: 35, unitPrice: 1140, totalAmount: 40000, paymentMethod: 'cash', stationLocation: 'Abuja Station', purchaseDate: new Date('2026-07-28') },
            { customerId: 6, productType: 'Diesel', fuelVolume: 30, unitPrice: 1160, totalAmount: 35000, paymentMethod: 'transfer', stationLocation: 'Abuja Station', purchaseDate: new Date('2026-08-04') },

            { customerId: 7, productType: 'PMS', fuelVolume: 8, unitPrice: 1125, totalAmount: 9000, paymentMethod: 'cash', stationLocation: 'Kano Station', purchaseDate: new Date('2026-06-05') },

            { customerId: 8, productType: 'Diesel', fuelVolume: 6, unitPrice: 1160, totalAmount: 7000, paymentMethod: 'cash', stationLocation: 'Sokoto Station', purchaseDate: new Date('2026-01-15') },
        ].map((p) => ({ ...p, createdAt: now, updatedAt: now }));

        await queryInterface.bulkInsert('Purchases', purchases);

        const campaigns = [
            { name: 'August Fuel Splash', description: '5% off PMS purchases above 20L for all customers.', rewardType: 'discount_percent', rewardValue: 5, startDate: '2026-08-01', endDate: '2026-08-31', isActive: true, createdAt: now, updatedAt: now },
            { name: 'Gold Tier Bonus', description: 'Flat ₦2000 discount for gold tier customers.', rewardType: 'discount_flat', rewardValue: 2000, startDate: '2026-08-01', endDate: '2026-09-30', isActive: true, createdAt: now, updatedAt: now },
            { name: 'Win-Back July', description: 'Bonus points to re-engage at-risk and churned customers.', rewardType: 'bonus_points', rewardValue: 500, startDate: '2026-07-01', endDate: '2026-07-31', isActive: false, createdAt: now, updatedAt: now },
        ];

        await queryInterface.bulkInsert('Campaigns', campaigns);
    },

    down: async (queryInterface) => {
        await queryInterface.bulkDelete('Campaigns', null, {});
        await queryInterface.bulkDelete('Purchases', null, {});
        await queryInterface.bulkDelete('Customers', null, {});
    },
};
