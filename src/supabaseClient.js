import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey)

if (!isSupabaseConfigured) {
  console.warn('VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are required in your environment')
}

// fall back to empty strings so createClient doesn't receive undefined
export const supabase = createClient(supabaseUrl ?? '', supabaseAnonKey ?? '')
