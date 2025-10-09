import { contentfulClient } from "@/lib/contentful";

export const getAbout = async (): Promise<AboutData> => {
  const response = await contentfulClient.getEntries({
    content_type: 'about'
  });

  return response.items[0].fields as unknown as AboutData;
}

export const getHeroImgs = async (): Promise<HeroImg[]> => {
  const response = await contentfulClient.getEntries({
    content_type: 'hero'
  })

  if (!response.items) {
    throw new Error('No se encontraron imágenes para el slider');
  }

  const transformHeroImgs = response.items.map((item) => ({
    title: item.fields.title,
    subtitle: item.fields.subtitle,
    description: item.fields.description,
    img: item.fields.image,
  }))

  return transformHeroImgs as unknown as HeroImg[]
}

export const getRoutes = async (): Promise<Route[]> => {
  const response = await contentfulClient.getEntries({
    content_type: 'route'
  })

  if (!response.items) {
    throw new Error('No se encontraron rutas');
  }

  const transformRoutes = response.items.map((item) => ({
    id: item.sys.id,
    title: item.fields.title,
    description: item.fields.description,
    description2: item.fields.description2,
    difficulty: item.fields.difficulty,
    time: item.fields.time,
    image: item.fields.tourImages,
    characteristics: item.fields.characteristics,
  }))

  return transformRoutes as unknown as Route[]
}
