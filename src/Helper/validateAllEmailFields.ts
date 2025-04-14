import { Response } from 'express';
import { pinoLogger } from './Logger';

export function validateAllEmailFields(to: string, subject: string, text: string, response: Response) {

    pinoLogger.info("Starting the process of validating all email fields");
 
    if(!to) {

        pinoLogger.error('Field: "To" can not be empty');
        response.status(400).json();
        throw new Error("Empty field.");
    }

    if(!subject) {

        pinoLogger.error('Field: "subject" can not be empty');
        response.status(400);
        throw new Error("Empty field.");
    }

    if(!text) {

        pinoLogger.error('Field: "Text" can not be empty');
        response.status(400);
        throw new Error("Empty field.");       
    }
    
    pinoLogger.info("Validation completed.");


}