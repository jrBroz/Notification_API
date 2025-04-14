import { Request, Response} from 'express';
import { pinoLogger } from "../Helper/Logger";
import { verifyToken } from '../middleware/AuthMiddleware';
import { router } from '../server';
import { createTransport } from 'nodemailer';
import { validateAllEmailFields } from '../Helper/validateAllEmailFields';

import dotenv from 'dotenv';
dotenv.config();

router.post('/send-notification/email', verifyToken, (request: Request, response: Response) : void => {

    pinoLogger.info("User Accessed notification/email route.");

    pinoLogger.info("Creating nodeMailer transporter ");
    const transporter = createTransport({

        host: 'sandbox.smtp.mailtrap.io',
        port: 2525,
        auth: {
            user: 'e91876f4ad732e', // Normally it would be in a .env file, however for the purpose of the exercise it is ok.
            pass: '6f41c8e6312b39',   
        }
    })

    const mailOptions = {

        from: process.env.FROM,
        to: request.body.to ,
        subject: request.body.subject,
        text: request.body.subject
    };


    validateAllEmailFields(mailOptions.to, mailOptions.subject, mailOptions.text, response);    

    transporter.sendMail(mailOptions, (err) => {

        if(err) {
            pinoLogger.error(err)
            response.status(400).json();
            return;
        }

        pinoLogger.info("Email Successfully sent")
        response.status(200).json();


    })
});

export default router;