import Image from "next/image";
import { RouteCards } from "@/components/RouteCards";
import { getRoutes } from "@/lib/contentfulServices";

import banner from "@/assets/images/hero_1.jpg"

export default async function RutasPage() {
  const routes = await getRoutes()

  return (
    <main className="">
      <section className="relative">
        <div className="w-full h-screen">
          <Image src={banner} alt="banner" className="w-full h-full object-cover" />
        </div>

        <div className="w-full h-full flex flex-col justify-center items-center gap-6 my-20 px-12">
          <h1 className="text-3xl font-bold text-center">La aventura en el <br /> Eje Cafetero</h1>
          <p className="text-lg text-center">Descubre la belleza natural del Eje Cafetero a través de nuestras rutas de senderismo. Cada ruta ofrece una experiencia única, con diferentes niveles y puntos de interés</p>
        </div>
      </section>

      <RouteCards routes={routes} />
    </main>
  )
}