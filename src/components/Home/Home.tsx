import icono from '../../assets/img/img1.jpg'

export const Home = () =>{
    return(
        <div className='w-12 h-12 hover:scale-115 transition-scale duration-500'>
            <a href="#root" className='w-full h-full'>
                <img  className="w-full h-full" src={icono} alt="" title="Home"></img>
            </a>
        </div>
    )
}