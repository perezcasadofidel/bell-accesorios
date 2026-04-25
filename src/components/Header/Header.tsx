import carrito from '../../assets/icons/shopping-cart.svg'
import corazon from '../../assets/icons/heart.svg'
import user from '../../assets/icons/circle-user-round.svg'
import lupita from '../../assets/icons/search.svg'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from "motion/react";
import { Home } from '../Home/Home'
import { Icono } from '../Icono/Icono'

const navItems = [
  { name: "Inicio", href: "#one" },
  { name: "Colecciones", href: "#two" },
  { name: "Accesorios", href: "#three" },
  { name: "Productos", href: "#four" },
  { name: "Testimonios", href: "#five" },
  { name: "Más...", href: "#six" },
];


export const Header =()=>{
    
    const [activeSection, setActiveSection] = useState("");
    useEffect(() => {
        const observerOptions = {
          root: null,
          rootMargin: "-60% 0px -60% 0px",
          threshold: 0,
        };//opciones que se le envia al observer para ver a que distancia detecta

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });//cambia la seccion activa al id de la seccion actual
        };

        const observer = new IntersectionObserver(
          observerCallback,
          observerOptions,
        );

        // Observar las secciones
        const sections = document.querySelectorAll("section[id]");//recoge a todas las section con id
        sections.forEach((section) => observer.observe(section));

        return () => {
          sections.forEach((section) => observer.unobserve(section));
        };
    }, []);//se usa useEffect porque se esperan cambios con el observer

    return(
        <section className='w-full h-[15dvh] fixed bg-transparent text-center shadow-xs flex items-center justify-around backdrop-blur-xs z-102' id='header'>
            <Home/>
            <div className='w-3/5 h-4/5'>
                <div className='w-full h-1/2 flex flex-row items-center justify-around'>
                    <form action="" className='text-black w-2/5 h-4/5 rounded-[50px] border-none pl-2.5 focus:outline-0 bg-white text-[12px] relative'>
                      <input type="text" className='w-full h-full rounded-[50px] focus:outline-0' />
                      <button type="submit"><img  className="w-4 h-4 hover:scale-105 transition-scale duration-500 cursor-pointer absolute top-2 right-2" src={lupita} alt="" title="Carrito"></img></button>
                    </form>
                    
                    <div className='flex flex-row items-center justify-between w-1/3'>
                        <Icono
                          link='#root'
                          children={
                            <img  className="w-6 h-6 hover:scale-115 transition-scale duration-500" src={carrito} alt="" title="Carrito"></img>
                          }
                        />
                        <Icono
                          link='#root'
                          children={
                            <img  className="w-6 h-6 hover:scale-115 transition-scale duration-500" src={corazon} alt="" title="Corazon"></img>
                          }
                        />
                        <Icono
                          link='#root'
                          children={
                            <img  className="w-6 h-6 hover:scale-115 transition-scale duration-500" src={user} alt="" title="Perfil"></img>
                          }
                        />
                    </div> 
                </div>
                <div className='w-full h-1/2 flex flex-row items-center justify-between'>
                    {navItems.map((item, key) => (
                        <motion.a
                          key={key}
                          href={item.href}
                          className={`cursor-pointer decoration-0 text-black text-[14px] hover:text-orange-950 hover:scale-115 transition-all duration-500 relative ${
                            activeSection === item.href.slice(1) ? "text-orange-950 font-bold" : ""
                          }`}
                          animate={{
                            color:
                              activeSection === item.href.slice(1)
                                ? "text-black"
                                : "text-orange-950",
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {item.name}
                          <AnimatePresence mode="wait">
                            <motion.div
                              className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-950"
                              initial={{ opacity: 0 }}
                              animate={{
                                opacity: activeSection === item.href.slice(1) ? 1 : 0,
                              }}//si es la seccion activa se utiliza la animacion
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.1, ease: "easeInOut" }}
                            />
                          </AnimatePresence>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    )
}