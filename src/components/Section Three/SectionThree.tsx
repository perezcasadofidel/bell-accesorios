import { type EmblaOptionsType } from 'embla-carousel'
import CarruselOne from '../CarruselOne/CarruselOne'
import '../../assets/css/embla.css'
import icono from '../../assets/img/img1.jpg'


const OPTIONS: EmblaOptionsType = {}
const SLIDES = [
    {
        id:"123",
        img:icono,
        titulo:"Descubre nuevos accesorios con Bell",
        texto1:"Blabla blab djoqwjdojwq dwoqjdowjqodjwq dwjqojdojwq dwqodjowqjoqdj",
        texto2:"owjdqodjowqjdowjqod djwqojdowqj jjdw"
    },
    {
        id:"124",
        img:icono,
        titulo:"Descubre las increibles aventuras de...",
        texto1:"Blabla blab djoqwjdojwq dwoqjdowjqodjwq dwjqojdojwq dwqodjowqjoqdj",
        texto2:"owjdqodjowqjdowjqod djwqojdowqj jjdw"
    },
    {
        id:"125",
        img:icono,
        titulo:"Josefa y su pandilla de locos",
        texto1:"Blabla blab djoqwjdojwq dwoqjdowjqodjwq dwjqojdojwq dwqodjowqjoqdj",
        texto2:"owjdqodjowqjdowjqod djwqojdowqj jjdw"
    },
    {
        id:"126",
        img:icono,
        titulo:"Ya no se que mas escribir",
        texto1:"Blabla blab djoqwjdojwq dwoqjdowjqodjwq dwjqojdojwq dwqodjowqjoqdj",
        texto2:"owjdqodjowqjdowjqod djwqojdowqj jjdw"
    },
    {
        id:"127",
        img:icono,
        titulo:"Scooby du papa",
        texto1:"Blabla blab djoqwjdojwq dwoqjdowjqodjwq dwjqojdojwq dwqodjowqjoqdj",
        texto2:"owjdqodjowqjdowjqod djwqojdowqj jjdw"
    },
]

export const SectionThree =()=>{
    return(
        <section className='w-full h-[60dvh] text-center bg-green-300 flex flex-col justify-center items-center' id='three'>
            <CarruselOne slides={SLIDES} options={OPTIONS} />
        </section>
    )
}