import { Next } from '../Next/Next'

export const SectionTwo = () =>{
    return(
        <section className='bg-white w-full h-dvh text-center flex flex-col justify-center items-center gap-2' id='two'>
            <h3 className="font-bold text-2xl">Colecciones</h3>
            <div className='bg-transparent flex flex-row justify-center items-center gap-1 w-[85%] h-[75%]'>
                <div className='w-[40%] h-full flex flex-col justify-center items-center gap-1'>
                    <div className='bg-blue-300 w-full h-[75%] flex flex-col justify-end items-center rounded-[10px]'>
                        <Next
                        text='Colección Nueva Primavera'
                        >
                        </Next>
                    </div>
                    <div className='bg-blue-700 w-full h-[25%] rounded-[10px]'>
                    </div>
                </div>
                <div className='w-[60%] h-full flex flex-col justify-center items-center gap-1'>
                    <div className='w-full h-[25%] flex flex-row justify-center items-center gap-1'>
                        <div className='bg-emerald-500 h-full w-[20%] rounded-[10px]'></div>
                        <div className='bg-emerald-700 h-full w-[20%] rounded-[10px]'></div>
                        <div className='bg-emerald-950 h-full w-[60%] rounded-[10px]'></div>
                    </div>
                    <div className='bg-amber-800 w-full h-[75%] rounded-[10px] flex flex-col justify-end items-center'>
                        <Next
                        text='Colección de Otoño'
                        >
                        </Next>
                    </div>
                </div>
            </div>
        </section>
    )
}