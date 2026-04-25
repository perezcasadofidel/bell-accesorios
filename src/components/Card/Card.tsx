import "./Card.css"
interface Props{
    cant:number,
    text:string,
    name:string,
    img:string
}

export const Card = (prop:Props) =>{
    return(
        <div className="w-full h-full flex flex-row items-center justify-around bg-gray-400 backdrop-blur-xs rounded-xl">
            <div className="w-[80%] h-[90%] flex flex-col items-start justify-around">
                <div>{prop.cant} estrellas</div>
                <div className="text-[10px] text-start">{prop.text}</div>
                <div>{prop.name}</div>
            </div>
            <img src={prop.img} alt="" className="size-10"/>
        </div>
    )
}
