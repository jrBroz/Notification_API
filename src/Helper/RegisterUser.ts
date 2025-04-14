import { validateEmail } from './ValidateEmail';
import { pinoLogger } from './Logger';
import { supabase } from '../models/supabase';
import { AuthError } from '@supabase/supabase-js';

export async function registerUser(newEmail: string, newPassword: string) {

    const validEmail = await validateEmail(newEmail);
    
    const {error} = await supabase.auth.signUp({

    email: validEmail,
    password: newPassword
})

    if(error) {
        pinoLogger.error(error);
        throw new AuthError("Error occurred while registering.");
    }

   pinoLogger.info("User registered successfully.");
}
