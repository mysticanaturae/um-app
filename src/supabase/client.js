// Supabase connection

import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://oqmjblrmrwwjfakhwoec.supabase.co";
const SUPABASE_KEY = "sb_publishable_ql5MWoNfzgcMRn0QLCOKPg_RPvG2nHt";

export const supabase = createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);