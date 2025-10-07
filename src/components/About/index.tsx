import Image from "next/image"

import certificated from '@/assets/icons/certificated.svg'
import users from '@/assets/icons/users.svg'
import security from '@/assets/icons/shield.svg'
import heart from '@/assets/icons/heart.svg'
import start from '@/assets/icons/star.svg'

const cards = [
  {icon:certificated, title:'10+ Años de Experiencia', description:'Una década guiando aventureros por los senderos más espectaculares del eje cafetero.'},
  {icon:users, title:'Guías Certificados', description:'Nuestros guías están certificados por la ANATO y conocen cada rincón de la región.'},
  {icon:security, title:'Seguridad Garantizada', description:'Equipos de alta calidad, protocolos de seguridad estrictos y seguros integrales.'},
  {icon:heart, title:'Turismo Sostenible', description:'Comprometidos con la conservación y el desarrollo comunitario local.'}
]

const About: React.FC = () => {
  return (
    <section className="py-10 px-16">
      <div className="flex flex-wrap justify-evenly gap-10 ">
        {cards.map((card, index) => (
          <div key={index} className="flex flex-col items-center justify-center text-center gap-4 max-w-[250px] py-6 px-10 bg-secondary/80 rounded-2xl hover:bg-primary/10">
            <div className="w-24 h-24 p-6 bg-primary/20 rounded-2xl">
              <Image src={card.icon} alt={card.title} className="w-full h-full object-cover" />
            </div>
            <span className="text-xl font-bold">{card.title}</span>
            <span>{card.description}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-evenly gap-4 bg-primary text-secondary mt-10 py-6 px-10 rounded-2xl">
        <div className="flex flex-col items-center justify-center">
          <span className="text-4xl font-bold">2,500+</span>
          <span className="text-xl">Trocheros felices</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="text-4xl font-bold">50+</span>
          <span className="text-xl">Rutas exploradas</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="text-4xl font-bold">15</span>
          <span className="text-xl">Rutas únicas</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="flex items-center gap-2 text-4xl font-bold">4.9 <Image src={start} alt="star" className="w-6 h-6" /></span>
          <span className="text-xl">Calificación promedio</span>
        </div>
      </div>
    </section>
  )
}

export { About }