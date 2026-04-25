
export const SectionOne = () =>{
    return(
        <section className='w-full h-[80dvh] text-center flex flex-col justify-center items-center bg-orange-200' id='one'>
            <div className='flex flex-col justify-center items-center bg-transparent backdrop-blur-xs w-[40%] max-w-120 h-[35%] max-h-62.5 gap-3 rounded-xl shadow-sm shadow-gray-400'>
                <div className='flex flex-col justify-center items-center'>
                    <h3 className='text-[22px] font-medium m-0'>Joyería con resina</h3>
                    <h4 className='text-[18px] font-normal m-0'>Descubre nuevos estilos</h4>
                </div>
                <button type='button' className='text-white border-0 bg-emerald-900 hover:scale-105 transition-scale duration-500  min-w-10 min-h-7.5 w-[10dvw] h-[5dvh] text-[12px] cursor-pointer rounded-lg'>Explorar Tienda</button>
            </div>
        </section>
    )
}