// src/utils/supabase.ts
import { createClient } from '@supabase/supabase-js';


const supabaseUrl = 'https://bunotdzqvgbrvgbpdexq.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ1bm90ZHpxdmdicnZnYnBkZXhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ5OTg3NjYsImV4cCI6MjA2MDU3NDc2Nn0.T5FdMoaKIRdqWf9zsk2wAXtFqAU2mJ6nMAsVEVkWUMQ';
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
