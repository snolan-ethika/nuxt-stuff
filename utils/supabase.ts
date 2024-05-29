import { createClient } from '@supabase/supabase-js'

const supabaseUrl: string | undefined = process.env.SUPABASE_URL;
const supabaseKey: string | undefined = process.env.SUPABASE_KEY;
let supabase: any = undefined
if(supabaseKey && supabaseUrl) {
   supabase = createClient(supabaseUrl, supabaseKey)
}
export default supabase