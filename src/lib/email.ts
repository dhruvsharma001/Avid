import Mailjet from 'node-mailjet';
import { getErrorText } from './utils';

const mailjet = new Mailjet({
    apiKey: process.env.NEXT_PRIVATE_MAILJET_API_KEY,
    apiSecret: process.env.NEXT_PRIVATE_MAILJET_API_SECRET,
})

export const sendMail = async (toEmail: string, subject: string, text: string, HTML: string) => {



    const request = mailjet.post('send', { version: 'v3.1' }).request({
        Messages: [
            {
                From: {
                    Email: 'no-reply@blinkadz.com',
                    Name: 'Blinkadz',
                },
                To: [
                    {
                        Email: toEmail,
                    },
                ],
                Subject: subject,
                TextPart: text,
                HTMLPart: HTML
            },
        ],
    });

    try {
        const response = await request;
        return response.body;
    } catch (err) {
        const error = getErrorText(err);
        return error;
    }
};