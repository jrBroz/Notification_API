import  {Request, Response,NextFunction} from 'express';
import { pinoLogger } from '../Helper/Logger';

function applyHTTPSHeader(request: Request, response: Response, next: NextFunction) : void {

  pinoLogger.info("Starting the process of applying Https header.");

  // Tells the browser to use HTTPS.
  response.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');

  pinoLogger.info("HTTPS Applied.");

  next();

}


function protectAgainstXss(request: Request, response: Response, next: NextFunction) : void {

  pinoLogger.info("Starting the process of applying X-XSS-Protection.");


  // Tries to mitigate Xss Attacks.
  response.setHeader('X-XSS-Protection', '1; mode=block');
  
  pinoLogger.info("X-XSS-Protection Applied.");

  next();

}

function protectAgainstClickJacking(request: Request, response: Response, next: NextFunction) : void {

  pinoLogger.info("Starting the process of applying Protection against Cick Jacking.");


  //Mitigates the risk of ClickJacking attack.
  response.setHeader('X-Frame-Options', 'DENY');
    
  pinoLogger.info("Click jacking protection applied.");

  next();

}

function applyNoReferrerPolicy(request:Request,response: Response, next: NextFunction) : void {

  pinoLogger.info("Starting the process of applying 'No Referer' Policy.");

  // Protects user's privacy by preventing the sharing of potentially sensitive information.
  response.setHeader('Referrer-Policy', 'no-referrer');
  
  pinoLogger.info("No referrer policy applied.");
  next();
}


function protectAgainstMimeSniffing(request:Request, response: Response, next: NextFunction) : void {

  pinoLogger.info("Starting the process of applying Protection against Mime Sniffing .");

  // Avoids MIME sniffing (Browser attempts to guess the mime type of a resource when not specified in http header).
  response.setHeader('X-Content-Type-Options', 'nosniff');

  pinoLogger.info("Mime Sniffing protection applied.");

  next();

}

function applyContentSecurityPolicy(request:Request, response: Response, next: NextFunction) : void{

  pinoLogger.info("Starting the process of applying the Content-Security-Policy.");

  // Defines a CSP, which defines where the browser can load resources(scripts, images and more). Also protects from XSS attacks.
  response.setHeader('Content-Security-Policy', "default-src 'self'; script-src 'self'; object-src 'none'");

  pinoLogger.info("Content-Security-Policy applied.");

  next();

}

function applyPermissionsPolicy(request:Request, response: Response, next: NextFunction) : void {

  pinoLogger.info("Starting the process of setting the Permissions Policy.");


  // 'No one' can access camera, microphone or geolocation without permission.
  response.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');

  pinoLogger.info("PermissionsPolicy applied.");

  next();
}


export const securityLayer = {

  applyPermissionsPolicy,
  applyContentSecurityPolicy,
  applyNoReferrerPolicy,
  applyHTTPSHeader,
  protectAgainstClickJacking,
  protectAgainstMimeSniffing,
  protectAgainstXss
} 