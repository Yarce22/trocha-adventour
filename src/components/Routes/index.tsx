import { SliderRoutes } from '../SliderRoutes'
import { getRoutes } from '@/lib/contentfulServices'

const Routes: React.FC = async () => {
  const routes = await getRoutes()

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Nuestras Rutas
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Descubre senderos únicos en el corazón del eje cafetero, desde caminatas familiares
            hasta desafíos extremos para montañistas experimentados.
          </p>
        </div>

        <SliderRoutes routes={routes.routes} />
        
      </div>
    </section>
  )
}

export { Routes }
