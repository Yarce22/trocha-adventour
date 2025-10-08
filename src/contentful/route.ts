import { contentfulClient } from "@/lib/contentful";

export const getAbout = async (): Promise<AboutData> => {
  const response = await contentfulClient.getEntries({
    content_type: 'about'
  });

  return response.items[0].fields as unknown as AboutData;
}