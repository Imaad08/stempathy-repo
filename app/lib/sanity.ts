import { createClient } from "next-sanity";

const projectId = "mi1ta12r";
const dataset = "production";
const apiVersion = "2025-03-07";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});
