import { getRoutesById } from "@/lib/contentfulServices";
import Image from "next/image";

import bg from 'public/bitmap.png'

import './styles.css'

const RouteDetail = async ({ params }: { params: { ruta: string } }) => {
  const route = await getRoutesById(params.ruta)
  console.log(route);

  return(
    <main>
      <section className="relative w-full h-screen">
        <div className="w-full h-full after:content-[''] after:absolute after:inset-0 after:bg-black/50 after:w-full after:h-full after:z-10">
          <Image 
            src={route.tourImages[0].fields.file.url.replace('//', 'https://')}
            alt={route.tourImages[0].fields.title}
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold text-center w-full">{route.title}</h1>
      </section>

      <section className={`relative w-full h-auto overflow-hidden mt-32`}>
        <div className="hidden lg:block absolute w-full h-full top-0 left-0 z-20">
          <Image
            src={bg}
            alt="bg"
            width={500}
            height={500}
            className="w-full h-full object-contain"
          />
        </div>

        <article className="flex flex-col pt-10 lg:flex-row lg:items-center">
          <div 
            className="w-[120%] h-[300px] bg-cover bg-center bg-no-repeat shadow-lg xl:h-[600px]"
            style={{
              backgroundImage: `url(${route.imgStep1.fields.file.url.replace('//', 'https://')})`,
              maskImage: "url('/masks/mask1.png')",
              maskSize: '100% 100%', 
              maskRepeat: 'no-repeat',
              WebkitMaskImage: "url('/masks/mask1.png')",
              WebkitMaskSize: '100% 100%',
              WebkitMaskRepeat: 'no-repeat',
            }}
            role="img"
            aria-label={route.imgStep1.fields.title}
          />
          
          <div className="p-10 text-lg text-center lg:text-2xl lg:w-[70%]">
            <h3>{route.step1}</h3>
          </div>
        </article>

        <article className="flex flex-col pt-20 lg:flex-row lg:items-center lg:pl-32">
        <div 
          className="w-[100%] h-[300px] bg-cover bg-center bg-no-repeat shadow-lg lg:order-2 xl:h-[600px]"
          style={{
            backgroundImage: `url(${route.imgSetp2.fields.file.url.replace('//', 'https://')})`,
            maskImage: "url('/masks/mask2.png')",
            maskSize: '100% 100%', 
            maskRepeat: 'no-repeat',
            WebkitMaskImage: "url('/masks/mask2.png')",
            WebkitMaskSize: '100% 100%',
            WebkitMaskRepeat: 'no-repeat',
          }}
          role="img"
          aria-label={route.imgSetp2.fields.title}
        />
        
        <div className="p-10 text-lg text-center lg:order-1 lg:w-[70%] lg:p-0 lg:text-2xl">
          <h3>{route.step2}</h3>
        </div>
        </article>

        <article className="flex flex-col pt-20 lg:flex-row lg:items-center lg:pr-20">
        <div 
          className="w-[120%] h-[300px] bg-cover bg-center bg-no-repeat shadow-lg lg:h-[400px] lg:w-[100%] xl:h-[600px]"
          style={{
            backgroundImage: `url(${route.imgStep3.fields.file.url.replace('//', 'https://')})`,
            maskImage: "url('/masks/mask3.png')",
            maskSize: '100% 100%', 
            maskRepeat: 'no-repeat',
            WebkitMaskImage: "url('/masks/mask3.png')",
            WebkitMaskSize: '100% 100%',
            WebkitMaskRepeat: 'no-repeat',
          }}
          role="img"
          aria-label={route.imgStep3.fields.title}
        />
        
        <div className="p-10 text-lg text-center lg:w-[70%] lg:p-0 lg:text-2xl">
          <h3>{route.step3}</h3>
        </div>
        </article>
      </section>
      
      <div className="hidden lg:block relative w-full h-[calc(100vh-300px)] bottom-0 left-0 z-10" >
        <Image
          src={route.imgEnding.fields.file.url.replace('//', 'https://')}
          alt={route.imgEnding.fields.title}
          width={500}
          height={500}
          className="absolute left-0 -top-10 xl:-top-16 w-full h-full object-cover"
        />
      </div>
    </main>
  )
}

export default RouteDetail