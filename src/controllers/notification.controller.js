import { sendSMS } from '../utils/termii.js';

export const sendSmsNotification = async (req, res) => {
    const { phoneNumber, message } = req.body;

    try {
        const result = await sendSMS(phoneNumber, message);
        res.status(200).json({ success: true, message: 'SMS sent', data: result });
    } catch (err) {
        console.error('Failed to send SMS:', err.message);
        res.status(502).json({ success: false, message: 'Failed to send SMS' });
    }
};
