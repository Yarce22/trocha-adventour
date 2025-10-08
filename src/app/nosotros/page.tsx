import Image from "next/image";
import { getAbout } from "@/contentful/route";
export default async function AboutPage() {
    const about = await getAbout();
    
    return (
        <main className="">
          {/*Banner con imagen principal*/}
            <section>
                <div className="w-full h-screen">
                  <Image
                    src={about.banner?.fields.file.url.replace("//", "https://")}
                    alt={about.banner?.fields.title}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover" />
                </div>
            </section>

            {/*Sección de la historia de la empresa*/}
            <section className="py-20 px-24">
              <h2 className="w-full text-3xl font-bold text-center mb-12">¿Quiénes Somos?</h2>

              <div className="flex flex-col gap-10 md:flex-row">
                <p className="order-2 md:order-1 md:w-1/2">{about.whoUs}</p>
                <div className="w-full order-1 aspect-square max-h-[400px] md:order-2 md:w-1/2">
                  <Image
                    src={about.usImg?.fields.file.url.replace("//", "https://")}
                    alt={about.usImg?.fields.title}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover rounded-2xl" />
                </div>
              </div>
            </section>

            {/*Sección de la misión y visión de la empresa*/}
            <section>
              <article>
                <h2>Misión</h2>
                <p>{about.mision}</p>
              </article>

              <article>
                <h2>Visión</h2>
                <p>{about.vision}</p>
              </article>  
            </section>

            {/*Sección de los valores de la empresa*/}
            <section>
              <article>
                <h2>Valores</h2>
                <p>{about.values}</p>
              </article>
            </section>
        </main>
    )
}
