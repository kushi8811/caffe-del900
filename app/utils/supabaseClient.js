import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zwqiodgaqntpqftvpkqh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3cWlvZGdhcW50cHFmdHZwa3FoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE2NDgwMTcsImV4cCI6MjA3NzIyNDAxN30.sKbRy2z8Ywp0GPXBte57Q-XXziL55oBKbACx53wYzvo"; // Replace with your API key

export const supabase = createClient(supabaseUrl, supabaseKey);
