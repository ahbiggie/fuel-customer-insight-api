# Fuel Customer Insight API (CPB Tracking System)

## Capstone Project Overview
This repository contains the backend REST API for the **Fuel Customer Insight API** (also known as the **CPB Tracking System**). This application serves as a backend service for fuel retail stations to register customers, record purchases and visits, measure customer lifetime value, identify changes in customer visit patterns, manage time-bound loyalty campaigns, and trigger notifications via an external SMS service.

This project is developed and submitted as a **Capstone Project** requirement.

### Student Details
* **Student Name:** Shaibu Lawal Yusuf
* **Student ID:** BAD/2026/TC-7/0100

---

##  Key Features

* **Customer Registration & Management:** Register, update, and manage customer details to maintain a central profile directory.
* **Purchase & Visit Tracking:** Record customer purchase details (e.g., fuel volume, total amount, product type) and log visits to analyze interaction history.
* **Customer Value Measurement:** Measure customer value metrics (e.g., average spend, visit frequency, lifetime value) to support tier-based customer categorization.
* **Visit Pattern & Churn Detection:** Analyze changes in visit intervals to detect anomalies, drop-offs, or shifts in customer patterns.
* **Loyalty Campaign Manager:** Create, update, and manage time-bound promotional campaigns and reward rules to incentivize engagement.
* **SMS Communication Gateway:** Integrate with external SMS APIs to send automated alerts, campaign promotions, and transaction receipts to registered customers.

---

## Tech Stack & Architecture

* **Runtime Environment:** Node.js
* **Web Framework:** Express.js (v5.x)
* **Database Interface:** SQL-based (e.g., PostgreSQL/MySQL) config files and environment mappings
* **Architecture:** Model-View-Controller (MVC) structure optimized for modularity and scalability

---

## Project Structure

```text
fuel-customer-insight-api/
├── docs/                 # Project documentation
├── migrations/           # Database migration files
├── seeders/              # Database seed scripts
├── src/
│   ├── app.js            # Express application setup
│   ├── config/           # Configuration files (Database, SMS gateway, etc.)
│   ├── controllers/      # Route controllers (Request handling logic)
│   ├── helpers/          # Helper utilities & functions
│   ├── middlewares/      # Express middlewares (Authentication, validation)
│   ├── models/           # Database models
│   ├── services/         # Business logic layer (SMS service, customer analytics)
│   └── utils/            # General helper methods
├── tests/                # Automated tests (Unit and integration tests)
├── .env.example          # Sample environment variables configuration
├── server.js             # API entrypoint script
├── package.json          # Node.js project manifest & dependencies
└── README.md             # Project documentation (this file)
```

---

## Getting Started

### Prerequisites
Make sure you have the following installed on your local machine:
* [Node.js](https://nodejs.org/) (v18.x or higher recommended)
* [npm](https://www.npmjs.com/) (Node Package Manager)
* [PostgreSQL](https://www.postgresql.org/) (or your preferred SQL database engine)

### Setup & Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/ahbiggie/fuel-customer-insight-api.git
   cd fuel-customer-insight-api
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory and copy the contents of `.env.example`:
   ```bash
   cp .env.example .env
   ```
   Open the `.env` file and populate it with your local configuration:
   ```env
   PORT=3000
   DB_HOST=localhost
   DB_PORT=5432
   DB_NAME=fuel_insight_db
   DB_USER=postgres
   DB_PASSWORD=yourpassword
   ```

4. **Run Migrations (if applicable):**
   *Configure migration commands here or run database initialization scripts as needed.*

5. **Start the Application:**
   * **Development Mode:**
     ```bash
     node server.js
     ```

---

## 🔌 API Documentation (Planned Endpoints)

### Customers
* `POST /api/customers` - Register a new customer
* `GET /api/customers` - Retrieve list of all customers
* `GET /api/customers/:id` - Get details of a specific customer

### Purchases & Visits
* `POST /api/purchases` - Record a purchase & visit
* `GET /api/purchases/customer/:id` - Fetch all purchases for a specific customer

### Analytics
* `GET /api/analytics/customer-value/:id` - Get value metrics for a customer
* `GET /api/analytics/visit-patterns` - Get patterns and alert on churn risk

### Campaigns
* `POST /api/campaigns` - Create a loyalty campaign
* `GET /api/campaigns` - Get list of campaigns

### SMS Notifications
* `POST /api/notifications/sms` - Send custom SMS or run campaign triggers

