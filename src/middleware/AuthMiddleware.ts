import  {Request, Response,NextFunction} from 'express';
import { JsonWebTokenError, JwtPayload } from 'jsonwebtoken';
import { pinoLogger } from '../Helper/Logger';
const jwt = require('jsonwebtoken');

export function verifyToken(req: Request, res: Response, next: NextFunction ) : void {

    const authHeader = req.headers['authorization'];
    const token  = authHeader?.toString().split(' ')[1] // Returns either undefined or a string

    if (!token) {
         res.status(401).json({ error: 'Access denied' });
         return;
    }

    jwt.verify(token, process.env.SECRET_KEY, (error: JsonWebTokenError, decoded: JwtPayload ) => {

        if (error) {
            pinoLogger.error('Error occurred while verifying token:', error);
            res.status(403).json({ error: 'Invalid token' });
            return;
        }
        next();
    });  
}