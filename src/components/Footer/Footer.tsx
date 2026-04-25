import { Home } from "../Home/Home"
import { Icono } from "../Icono/Icono"


export const Footer = () =>{
    return(
        <section className="w-full h-[50dvh] text-center bg-[#a17a56] flex flex-row items-center justify-between" id="footer">

            <div className='h-[70%] w-[35%] flex flex-col justify-center items-start gap-10 ml-[10%]'>
                <Home/>
                <div className='h-[35%] w-full'>
                    <p className='text-start text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores dolor veritatis, placeat esse sapiente sequi numquam, molestiae eligendi doloribus minus facere accusamus </p>
                </div>
                <div className='h-[10%] w-full'>
                    <p className='text-start text-white'>Bell Accesorios 2025</p>
                </div>
            </div>

            <div className='h-[60%] w-[30%] flex flex-row justify-around items-center mr-[10%]'>
                <div className='flex flex-col h-full w-[45%] justify-start items-start text-start'>
                    <h3 className='font-bold text-[1.2rem] text-white'>Navegación</h3>
                    <a href="#two" className='font-semibold mt-2 text-white hover:text-gray-300 transition-all duration-300'>Colecciones</a>
                    <a href="#four" className='font-semibold text-white hover:text-gray-300 transition-all duration-300'>Productos</a>
                    <a href="#root" className='mt-2 text-white hover:text-gray-300 transition-all duration-300'>Lola</a>
                    <a href="#root" className=' text-white hover:text-gray-300 transition-all duration-300'>Lolita</a>
                    <a href="#root" className=' text-white hover:text-gray-300 transition-all duration-300'>Esta</a>
                    <a href="#root" className=' text-white hover:text-gray-300 transition-all duration-300'>Loquita</a>
                </div>
                <div className='flex flex-col h-full w-[45%] justify-start items-start text-start'>
                    <h3 className='font-bold text-[1.2rem] text-white'>Contáctanos</h3>
                    <a href="#root" className='mt-2 text-white hover:text-gray-300 transition-all duration-300'>Sobre Nosotros</a>
                    <a href="#root" className=' text-white hover:text-gray-300 transition-all duration-300'>Fios</a>
                    <a href="#root" className=' text-white hover:text-gray-300 transition-all duration-300'>FAQs</a>
                    <div className='mt-2.5 grid grid-cols-3 grid-rows-2 gap-2.5'>
                        <Icono
                            link="https://facebook.com"
                            children={
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucidelucide-facebook-icon lucide-facebook hover:scale-115 transition-scale duration-500"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                            }
                        />
                        <Icono
                            link="https://instagram.com"
                            children={
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram-icon lucide-instagram hover:scale-115 transition-scale duration-500"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                            }
                        />
                        <Icono
                            link="https://twitter.com"
                            children={
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter-icon lucide-twitter hover:scale-115 transition-scale duration-500"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                            }
                        />
                        <Icono
                            link="https://youtube.com"
                            children={
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube-icon lucide-youtube hover:scale-115 transition-scale duration-500"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
                            }
                        />
                        <Icono
                            link="https://twitch.com"
                            children={
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitch-icon lucide-twitch hover:scale-115 transition-scale duration-500"><path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"/></svg>
                            }
                        />
                        <Icono
                            link="https://linkedin.com"
                            children={
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin-icon lucide-linkedin hover:scale-115 transition-scale duration-500"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                            }
                        />
                    </div>
                </div>
            </div>

        </section>
    )
}