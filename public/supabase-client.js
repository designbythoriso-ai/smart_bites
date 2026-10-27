import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const SUPABASE_URL = 'YOUR_SUPABASE_PROJECT_URL';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Testing Credentials Guide:
// Set these up in Supabase Auth -> Users
// Customer: customer@maestrobites.com / pass123
// Merchant: merchant@maestrobites.com / pass123
// Technician: tech@maestrobites.com / admin456