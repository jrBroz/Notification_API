import { securityLayer } from './middleware/SecurityMiddleware';
import { pinoLogger } from './Helper/Logger';
import express from 'express';
export const jwt = require('jsonwebtoken');
export const app = express();
export const router = express.Router();
import { apiRateLimiter } from './middleware/Rate-limiter';


const sendNotificationRoute = require('./Routes/Send-notification').default;
const sendEmailNotificatioRoute = require('./Routes/Send-notification-email').default;
const registerUserRoute = require('./Routes/Register').default;
const loginUserRoute = require('./Routes/Login').default;


//global middlewares
app.use(apiRateLimiter);
app.use(express.json());
app.disable("x-powered-by"); // 'Reduces' fingerprinting


//  Security
app.use(securityLayer.applyHTTPSHeader)
app.use(securityLayer.applyPermissionsPolicy);
app.use(securityLayer.applyNoReferrerPolicy)
app.use(securityLayer.applyContentSecurityPolicy)

app.use(securityLayer.protectAgainstClickJacking)
app.use(securityLayer.protectAgainstMimeSniffing)
app.use(securityLayer.protectAgainstXss)


//Routes
app.use(sendNotificationRoute);
app.use(sendEmailNotificatioRoute);
app.use(registerUserRoute);
app.use(loginUserRoute);


app.listen(3333, () => pinoLogger.info("Server is up and running..."));