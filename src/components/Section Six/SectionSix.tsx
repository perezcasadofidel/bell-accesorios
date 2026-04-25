
export const SectionSix = () =>{
    return(
        <section className='w-full h-dvh text-center bg-white flex flex-col justify-center items-center gap-2' id='six'>
            <h3 className="font-bold text-2xl">Te puede interesar...</h3>
            <div className="w-[85%] h-[70%] bg-transparent rounded-xl flex flex-col justify-center items-center gap-1">
                <div className="w-full h-[50%] flex flex-rows justify-center items-center gap-1">
                    <div className="w-[25%] h-full bg-amber-600 rounded-[10px]"></div>
                    <div className="w-[25%] h-full bg-amber-700 rounded-[10px]"></div>
                    <div className="w-[50%] h-full bg-amber-800 rounded-[10px]"></div>
                </div>
                <div className="w-full h-[50%] flex flex-rows justify-center items-center gap-1">
                    <div className="w-[25%] h-full bg-blue-600 rounded-[10px]"></div>
                    <div className="w-[50%] h-full bg-blue-800 rounded-[10px]"></div>
                    <div className="w-[25%] h-full bg-blue-700 rounded-[10px]"></div>
                </div>

            </div>
        </section>
    )
}