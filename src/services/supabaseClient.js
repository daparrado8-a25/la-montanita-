const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || 'https://atwikmqtbpeupavgfsoq.supabase.co';
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_qpLgYF143fxiE4xzyZJu1w_brRBSVzh';

export async function sb(table, method, body, query) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}${query || ''}`, {
    method: method || 'GET',
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      'Content-Type': 'application/json',
      Prefer: 'return=representation',
    },
    body: body ? JSON.stringify(body) : null,
  });

  if (!res.ok) throw new Error(await res.text());

  const text = await res.text();
  return text ? JSON.parse(text) : null;
}
