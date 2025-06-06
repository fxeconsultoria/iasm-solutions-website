import { createClient } from '@supabase/supabase-js'

// Placeholder values - replace with your actual Supabase URL and anon key
const supabaseUrl = process.env.VITE_SUPABASE_URL!
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
