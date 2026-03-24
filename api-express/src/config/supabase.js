const { createClient } = require('@supabase/supabase-js');
const supabaseUrl = 'https://wqqgeqvzniyeigduowci.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndxcWdlcXZ6bml5ZWlnZHVvd2NpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQwMjc5ODMsImV4cCI6MjA4OTYwMzk4M30.baGLtXb0nFEdewEgfsWcj4qjmGCRJ2G_olHYkf_DPao';
const supabase = createClient(supabaseUrl, supabaseKey);
module.exports = supabase;
