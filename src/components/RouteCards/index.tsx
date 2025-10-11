import Image from "next/image"
import Link from "next/link"

const RouteCards:React.FC<{routes: Route[]}> = ({ routes }) => {
  return (
    <section className="flex flex-col gap-10">
      <h3 className="text-2xl font-bold text-center">Nuestras rutas</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 place-content-center px-10 gap-10 lg:px-32">
        {routes.map((route) => (
            <div
              key={route.id}
              className="flex flex-col h-full rounded-2xl shadow-lg"
            >
              <div className="max-h-1/2">
                <Image
                  src={route.image[0].fields.file.url.replace('//', 'https://')}
                  alt={route.title}
                  width={500}
                  height={500}
                  className="rounded-t-2xl w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col h-full justify-between gap-6 p-4 md:p-6 lg:p-10">
                <div className="flex flex-col gap-2">
                  <h2 className="text-xl font-bold">{route.title}</h2>
                  <p>{route.description2}</p>
                </div>

                <div className="flex justify-between">
                  <Link
                    href={`/rutas/${route.id}`}
                    className="bg-primary text-secondary hover:cursor-pointer hover:text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95"
                  >
                    Conoce más
                  </Link>
                  <span
                    className={`hidden px-3 py-1.5 rounded-full text-sm font-semibold md:flex items-center gap-1.5 backdrop-blur-sm ${route.difficulty === 'Fácil'&& 'bg-green-200/90 text-green-700' || route.difficulty === 'Medio' && 'bg-yellow-200/90 text-yellow-700' || route.difficulty === 'Difícil'&& 'bg-red-200/90 text-red-700'}`} 
                  >
                    {route.difficulty}
                  </span>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  )
}

export { RouteCards }
