import { pinoLogger } from "./Logger";
import { supabase } from '../models/supabase';

export default async function checkEmailExists(email: string)   {

    pinoLogger.info("Starting process of checking if email exists in Database.");
    const data = await supabase.from("users").select("email").eq('email', email); // Selecting where email == parameter email}

    if(data) {
        pinoLogger.error("User already exists, can not register it again.");
        return;
    }

    pinoLogger.info("User email is up to sign up.");
}