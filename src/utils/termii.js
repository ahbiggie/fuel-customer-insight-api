import axios from 'axios';
import config from '../config/env.js';

export const sendSMS = async (phoneNumber, message) => {
    const { termiiApiKey, termiiSenderId, termiiBaseUrl } = config.sms;

    const response = await axios.post(`${termiiBaseUrl}/api/sms/send`, {
        to: phoneNumber,
        from: termiiSenderId,
        sms: message,
        type: 'plain',
        channel: 'generic',
        api_key: termiiApiKey,
    });

    return response.data;
};
