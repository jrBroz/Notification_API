import { loginUser } from "../Helper/LoginUser";
import {Request, Response} from 'express';
import { router, jwt } from "../server";
import { pinoLogger } from "../Helper/Logger";

router.post('/login', async (request: Request, response: Response) => {

    try {
        const userEmail: string = request.body.email;   
        const password:  string = request.body.password;

        pinoLogger.info(request.body); // ????

        await loginUser(userEmail, password);
        

        // Generates jwt token
        const accessToken = jwt.sign({email: userEmail},process.env.SECRET_KEY, {expiresIn: '1h'});
        response.json({accessToken: accessToken});
        
        pinoLogger.info("Generated JWT Token");


    } catch(error) {pinoLogger.error("Error", error)}  
})

export default router;