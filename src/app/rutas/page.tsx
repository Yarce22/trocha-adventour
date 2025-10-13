import Image from "next/image";
import { RouteCards } from "@/components/RouteCards";
import { getRoutes } from "@/lib/contentfulServices";

export default async function RutasPage() {
  const routes = await getRoutes()

  return (
    <main className="">
      <section className="relative">
        <div className="w-full h-screen">
          <Image src={routes.banner.fields.file.url.replace('//', 'https://')}
            alt="banner"
            width={500} height={500}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full h-full flex flex-col justify-center items-center gap-6 my-20 px-12">
          <h1 className="text-3xl font-bold text-center">{routes.title}</h1>
          <h3 className="text-lg text-center">{routes.description}</h3>
        </div>
      </section>

      <RouteCards routes={routes.routes} />
    </main>
  )
}