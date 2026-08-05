import dotenv from 'dotenv';

dotenv.config();

const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    db: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT ? Number(process.env.DB_PORT) : undefined,
        name: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
    },
    sms: {
        termiiApiKey: process.env.TERMII_API_KEY,
        termiiSenderId: process.env.TERMII_SENDER_ID,
        termiiBaseUrl: process.env.TERMII_BASE_URL || 'https://api.ng.termii.com',
    },
};

export default config;