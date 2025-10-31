import { createClient, SanityClient } from "@sanity/client";

export const client: SanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET as string,
  apiVersion: "2025-10-31", // Use today's date or your schema's latest date
  useCdn: false, // true = faster, cached; false = always fetch fresh
  token: process.env.SANITY_READ_TOKEN,
});
