import {Request, Response} from 'express';
import { pinoLogger } from "../Helper/Logger";
import { verifyToken } from '../middleware/AuthMiddleware';
import { router } from '../server';
const notifier = require('node-notifier');

// Per default will be a desktop notification, payload(title, message) must be customizable.

router.post('/send-notification',verifyToken,(request: Request, response: Response)  : void => {

    pinoLogger.info("User Accessed notification route. ");

    let payload  = request.body;
    let title : string | undefined | null = payload.title;
    let msg : string | undefined | null = payload.message;

    pinoLogger.info('Sending Notification process.')

    if (!title) {
        pinoLogger.error(`Title can not be empty.`);
        response.status(400).json({message: 'Notification must have a title.'})
        return;
    }

    if (!msg) {
        pinoLogger.error("Message can not be empty.");
        response.status(400).json({message: 'Message must not be empty.'})
        return;
    }

    notifier.notify({
        title: title,
        message: msg
    });

    response.status(200).json({ message: 'Notification was successfully sent.' })
})

export default router;