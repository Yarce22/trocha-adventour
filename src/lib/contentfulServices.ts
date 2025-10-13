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

export const getRoutes = async (): Promise<Routes> => {
  const response = await contentfulClient.getEntries({
    content_type: 'routes'
  })

  if (!response.items) {
    throw new Error('No se encontraron rutas');
  }

  const routeData = response.items[0].fields.route;
  if (!Array.isArray(routeData)) {
    throw new Error('Expected route to be an array');
  }

  const typedRouteData = routeData as unknown as Array<ContentfulEntry<Route>>;

  const transformTours = typedRouteData.map((item) => ({
    id: item?.sys.id,
    title: item?.fields.title,
    description: item?.fields.description,
    description2: item?.fields.description2,
    difficulty: item?.fields.difficulty,
    time: item?.fields.time,
    tourImages: item?.fields.tourImages,
    characteristics: item?.fields.characteristics,
    step1: item?.fields.step1,
    step2: item?.fields.step2,
    step3: item?.fields.step3,
    imgStep1: item?.fields.imgStep1,
    imgStep2: item?.fields.imgStep2,
    imgStep3: item?.fields.imgStep3,
    imgEnding: item?.fields.imgEnding,
  }))

  const transformRoutes = response.items.map((item) => ({
    id: item?.sys.id,
    banner: item?.fields.banner,
    title: item?.fields.title,
    description: item?.fields.description,
    routes: transformTours,
  }))

  return transformRoutes[0] as unknown as Routes
}

export const getRoutesById = async (id: string): Promise<Route[]> => {
  const response = await contentfulClient.getEntries({
    content_type: 'route',
    'sys.id': id
  })

  if (!response.items) {
    throw new Error('No se encontraron rutas');
  }

  return response.items[0].fields as unknown as Route[]
}

export const getAllies = async (): Promise<Ally[]> => {
  const response = await contentfulClient.getEntries({
    content_type: 'allies'
  })

  if (!response.items) {
    throw new Error('No se encontraron rutas');
  }

  const transformAllies = response.items.map((item) => ({
    name: item.fields.name,
    description: item.fields.description,
    logo: item.fields.logo,
    url: item.fields.allyPage,
  }))

  return transformAllies as unknown as Ally[]
}