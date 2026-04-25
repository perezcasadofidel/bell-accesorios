import CarruselTwo from '../CarruselTwo/CarruselTwo'
import '../../assets/css/embla2.css'
import { type EmblaOptionsType } from 'embla-carousel'
import icono from '../../assets/img/img1.jpg'

const OPTIONS: EmblaOptionsType = { dragFree: true }
const SLIDES = [
    {
        id:"123",
        img:icono,
        name:"Aretes Mini-Flores",
        precio:300,
        texto1:"muela parte 1",
        texto2:"Metal, redondo, negro..."
    },
    {
        id:"124",
        img:icono,
        name:"Anillo Retoño",
        precio:800,
        texto1:"muela parte 1",
        texto2:"Redondo, metal, brillo..."
    },
    {
        id:"125",
        img:icono,
        name:"Anillo Floral",
        precio:700,
        texto1:"muela parte 1",
        texto2:"Redondo, metal, flores..."
    },
    {
        id:"126",
        img:icono,
        name:"Pulsera Lola",
        precio:600,
        texto1:"muela parte 1",
        texto2:"Tela, redondo, verde..."
    },
    {
        id:"127",
        img:icono,
        name:"Zapatilla Kamikaze",
        precio:900,
        texto1:"muela parte 1",
        texto2:"Dura, apestosa, fea..."
    },
]

export const SectionFour = ()=>{
    return(
        <section className='w-full h-[80dvh] text-center bg-amber-100 flex flex-col justify-center items-center' id='four'>
            <h3 className="font-bold text-2xl mb-2 mt-[12dvh]">Productos destacados</h3>
            <CarruselTwo slides={SLIDES} options={OPTIONS} />
        </section>
    )
}