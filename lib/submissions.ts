/* Sends a website form straight into Supabase (`baf_submissions`), where
   the Foundation admin panel (broadarks-foundation-backend) picks it up.

   Uses the public anon key: row-level security only lets it INSERT the
   form columns - it can never read submissions back. */

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export interface FormSubmission {
  kind?: "contact" | "application";
  name: string;
  email: string;
  phone?: string | null;
  organisation?: string | null;
  topics?: string[];
  message?: string;
  position?: string | null;
  resume_url?: string | null;
  details?: Record<string, unknown>;
  source_page?: string | null;
}

export async function submitForm(submission: FormSubmission): Promise<void> {
  if (!SUPABASE_URL || !ANON_KEY) {
    throw new Error("The form isn't connected yet.");
  }
  const res = await fetch(`${SUPABASE_URL}/rest/v1/baf_submissions`, {
    method: "POST",
    headers: {
      apikey: ANON_KEY,
      Authorization: `Bearer ${ANON_KEY}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify({
      kind: "contact",
      source_page: typeof window !== "undefined" ? window.location.pathname : null,
      ...submission,
    }),
  });
  if (!res.ok) {
    throw new Error("We couldn't send your message.");
  }
}
