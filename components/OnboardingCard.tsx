export default function Card({heading, description , handleClick} : {heading:string, description: string , handleClick:()=> void}) {
    return <div className="absolute bottom-8 left-[50%] translate-x-[-50%] translate-y-[-50%] w-[50%] max-w-60 mx-auto bg-slate-100 rounded-2xl p-4 ">
        <div className="text-lg font-extrabold text-center ">
            {heading}
        </div>
        <div className="text-center text-slate-600 tracking-tighter text-xs">
            {description}
        </div>
        <button 
        onClick={handleClick}
        className="bg-slate-950 w-full p-2 rounded-lg text-slate-200 mt-4"
        >Next</button>
    </div>
}