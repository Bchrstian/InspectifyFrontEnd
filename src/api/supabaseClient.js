import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nvifqzlxbvgfshjuovyk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im52aWZxemx4YnZnZnNoanVvdnlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU2MTE5NjgsImV4cCI6MjAzMTE4Nzk2OH0.o4meEochJhJQf58q6wP-lhqjDd6lOtKhGraDdOleYhU";
export const supabase = createClient(supabaseUrl, supabaseKey);
