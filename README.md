# Fuel Customer Insight System (CPB Tracking System)

## Capstone Project Details
This project is developed and submitted as a **Capstone Project** requirement.

---

## Project Overview
This project is a computer server system built for petrol stations. It helps station managers keep track of their customers, log how much fuel they buy, measure customer loyalty, see when customers stop visiting, set up reward schemes, and send text messages to customers.

---

## Main Features

* **Save Customer Information:** Keep a list of registered customers with their names and contact details.
* **Log Purchases & Visits:** Record every time a customer buys fuel, noting how much they bought, what type of fuel, and the date of their visit.
* **Measure Customer Loyalty:** Calculate how much customers spend and how often they visit to see who the most loyal customers are.
* **Spot Changes in Visit Habits:** Automatically notice when regular customers stop showing up so the station can reach out to them.
* **Manage Reward Schemes:** Set up special, limited-time offers and point systems to encourage customers to return.
* **Send Text Messages:** Connect to a text messaging service to send promotional offers, updates, and transaction alerts directly to customers' mobile phones.

---

## Project Organization

Here is a simple look at where files are kept in this project:
* **docs/**: Project notes and documentation.
* **migrations/** & **seeders/**: Files used to build the database tables and fill them with initial sample information.
* **src/**: The main folder holding the code.
  * **config/**: Settings for database connections and texting services.
  * **controllers/**: Code that handles incoming requests and sends back answers.
  * **models/**: Outlines of what a customer, a purchase, or a reward scheme looks like in the database.
  * **services/**: Extra helper systems, like the one that connects to the text message sender.
* **tests/**: Checks and tests to make sure the code works properly.
* **server.js**: The main switch that starts the entire system.

---

## How to Set Up and Run the Project

### What you need on your computer:
1. **Node.js**: The software engine that runs the code.
2. **npm**: A tool to install extra helper packages.
3. **PostgreSQL**: A database program to store customer and purchase details.

### Steps to install:

1. **Download the project files:**
   ```bash
   git clone https://github.com/ahbiggie/fuel-customer-insight-api.git
   cd fuel-customer-insight-api
   ```

2. **Install the project tools:**
   Run this command to download the packages the project needs:
   ```bash
   npm install
   ```

3. **Set up the settings file:**
   Make a copy of the `.env.example` file and rename the copy to `.env`. Open this new `.env` file and type in your database username, password, and port details:
   ```env
   PORT=3000
   DB_HOST=localhost
   DB_PORT=5432
   DB_NAME=fuel_insight_db
   DB_USER=postgres
   DB_PASSWORD=yourpassword
   ```

4. **Start the system:**
   Run this command to start the server:
   ```bash
   node server.js
   ```
   The system will start running and listen for connections on port 3000.

---

## System Options (API Capabilities)

The system is designed to perform the following actions:

* **Customer Options:** Register a new customer, get a list of all customers, or view a single customer's profile.
* **Purchase Options:** Log a new fuel purchase, or see a history of all purchases made by a customer.
* **Analysis Options:** Calculate how much a customer has spent over time, or check if they are visiting less often than usual.
* **Reward Options:** Create new promotional campaigns, or see a list of active campaigns.
* **Messaging Options:** Send a text message to a customer.

---

## License
This project is licensed under the ISC License.
