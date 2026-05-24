// ====================================================
// SITE_URL: prefer env var during development so metadata
// can point to localhost or a public tunnel URL when needed.
// Set NEXT_PUBLIC_SITE_URL (or SITE_URL) in your environment
// or .env to override the default.
// ====================================================
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  "http://localhost:3000";

export const SITE_NAME = "Phongsavanh International Hospital";

