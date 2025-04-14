import {createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config();

export const supabase = createClient(process.env.PUBLIC_URL!, process.env.ANON_PUBLIC_KEY!);