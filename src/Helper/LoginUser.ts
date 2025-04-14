import {AuthError} from '@supabase/supabase-js';
import { pinoLogger } from './Logger';

import { supabase } from '../models/supabase';



export async function loginUser(userEmail: string, userPassword: string) {

    pinoLogger.info("Initiating the process of login user in..");

    const {data, error} =  await supabase.auth.signInWithPassword({
        email: userEmail,
        password: userPassword
    })
    
    if (error) {
        pinoLogger.error(error)
        throw new AuthError('there was an error in the authentication process');
    
    }
    if(data) pinoLogger.info("User logged in successfully.");
}