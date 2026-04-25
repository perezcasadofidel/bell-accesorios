import icono from '../../assets/img/img1.jpg'
import { Card } from '../Card/Card'

export const SectionFive = ()=>{
    return(
        <section className='w-full h-[70dvh] text-center bg-emerald-200 flex flex-col items-center justify-center' id='five'>
            <div className='w-[95%] h-[95%] backdrop-blur-xs bg-transparent flex flex-col items-center justify-center gap-2'>
                <h3 className='font-bold text-2xl'>Testimonios</h3>
                <div className="grid grid-cols-2 grid-rows-2 gap-2 w-[95%] h-[80%]">
                    <Card
                    cant={5}
                    text='lorem dwqjodjowqjpodwq dwqjodjwqojdopwqj ihijojdwqod jodwqjodjwqojdwq dwqojdojwqodjowq jdowqjodjwqojdpowq djwqodjowqjdojwq odjwqojdowqjdowq dowqjodjwqodpowq  '
                    name='Lucia Medina'
                    img={icono}/>
                    <Card
                    cant={5}
                    text='lorem dwqjodjowqjpodwq dwqjodjwqojdopwqj ihijojdwqod jodwqjodjwqojdwq dwqojdojwqodjowq jdowqjodjwqojdpowq djwqodjowqjdojwq odjwqojdowqjdowq dowqjodjwqodpowq  '
                    name='Leandro Rodriguez'
                    img={icono}/>
                    <Card
                    cant={5}
                    text='lorem dwqjodjowqjpodwq dwqjodjwqojdopwqj ihijojdwqod jodwqjodjwqojdwq dwqojdojwqodjowq jdowqjodjwqojdpowq djwqodjowqjdojwq odjwqojdowqjdowq dowqjodjwqodpowq  '
                    name='Giadys Torres'
                    img={icono}/>
                    <Card
                    cant={5}
                    text='lorem dwqjodjowqjpodwq dwqjodjwqojdopwqj ihijojdwqod jodwqjodjwqojdwq dwqojdojwqodjowq jdowqjodjwqojdpowq djwqodjowqjdojwq odjwqojdowqjdowq dowqjodjwqodpowq  '
                    name='Sandra Caballes'
                    img={icono}/>
                </div>
            </div>
        </section>
    )
}