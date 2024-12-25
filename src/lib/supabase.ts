import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

// Replace these with your Supabase project URL and anon key
const supabaseUrl = 'https://tcjmxajirjbxczmsfsct.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjam14YWppcmpieGN6bXNmc2N0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUwNzg1NDQsImV4cCI6MjA1MDY1NDU0NH0.UXvWbgKV2QZalDpF7O-bMNKXT45vyIp3LfSjysPIVVU';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
    flowType: 'pkce',
  },
}); 