import { registerUser } from "../Helper/RegisterUser";
import {Request, Response} from 'express';
import { AuthError } from "@supabase/supabase-js";
import { pinoLogger } from "../Helper/Logger";
import { router } from "../server";

router.post('/register', async (request: Request, response: Response) => {
    
    try { 
        const userEmail = request.body.email;   
        const password = request.body.password;
    

        registerUser(userEmail, password);
        response.sendStatus(201);
        pinoLogger.info(response.sendStatus(201));
    }
    catch(error) {throw new AuthError('there was an error in the authentication process');}
});

export default router;