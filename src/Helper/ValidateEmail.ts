import { pinoLogger } from "./Logger";

export async function validateEmail(email: string) {

    pinoLogger.info("Initializing process of registering user.");

    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    if(regex.test(email) === false) throw new Error("Email inválido.");
    
    pinoLogger.info("User's email passed email's validation.");

    return email;
}