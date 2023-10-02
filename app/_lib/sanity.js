import { createClient } from "next-sanity";
import ImageUrlBuilder from "@sanity/image-url";

const projectId = process.env.NEXT_PUBLIC_PROJECTID
const dataset = process.env.NEXT_PUBLIC_DATASET;
const apiVersion = "2023-01-01";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});
const builder = ImageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}