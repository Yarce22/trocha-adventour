import Image from "next/image";
import { getAbout } from "@/lib/contentfulServices";

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
            <section className="p-10 md:p-16 lg:py-20 lg:px-24">
              <h2 className="w-full text-3xl font-bold text-center mb-12">¿Quiénes Somos?</h2>

              <div className="flex flex-col gap-10 lg:flex-row">
                <p className="order-2 lg:order-1 lg:w-1/2">{about.whoUs}</p>
                <div className="w-full order-1 aspect-square max-h-[400px] lg:order-2 lg:w-1/2">
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
            <section className="flex flex-col gap-10 px-10 py-16 bg-secondary/50 lg:px-24 lg:gap-20 lg:flex-row">
              <article className="bg-primary/20 p-10 rounded-2xl">
                <h2 className="w-full text-3xl font-bold text-center mb-12">Misión</h2>
                <p>{about.mision}</p>
              </article>

              <article className="bg-primary/20 p-10 rounded-2xl">
                <h2 className="w-full text-3xl font-bold text-center mb-12">Visión</h2>
                <p>{about.vision}</p>
              </article>  
            </section>

            {/*Sección de los valores de la empresa*/}
            <section className="flex flex-col gap-10 px-10 py-16 bg-secondary/50 lg:px-24 lg:gap-20 lg:flex-row">
              <article>
                <h2 className="w-full text-3xl font-bold text-center mb-8">Valores</h2>
                <p className="mb-12 text-center text-lg font-semibold">{about.valuesDescription}</p>

                <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-16">
                  {about.values.map((value, index) => (
                    <div key={index} className="flex flex-col max-w-[320px] lg:max-w-[350px] h-auto md:h-[350px] bg-primary/20 rounded-2xl p-8">
                      <h3 className="w-full text-xl font-bold text-center mb-4">{value.fields.title}</h3>
                      <p>{value.fields.description}</p>
                    </div>
                  ))}
                </div>
              </article>
            </section>
        </main>
    )
}
