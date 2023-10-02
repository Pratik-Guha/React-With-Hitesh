import { useState } from "react"


const Obg = () => {
    const [color, setColor] = useState('gray')
  return (
    <>
        <div className="w-full h-screen duration-200 " style={{backgroundColor:color}}>
            <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
                <div className="flex flex-wrap bg-white gap-4 shadow-2xl justify-center px-8 py-5 rounded-3xl">
                    <button className="outline-none buttonoutline bg-red-500" onClick={()=>setColor("red")}>Red</button>
                    <button className="outline-none buttonoutline bg-green-500" onClick={()=>setColor("green")}>Green</button>
                    <button className="outline-none buttonoutline bg-blue-500" onClick={()=>setColor("blue")}>Blue</button>
                    <button className="outline-none buttonoutline bg-slate-900" onClick={()=>setColor("black")}>Dark</button>
                    <button className="outline-none buttonoutline bg-yellow-500" onClick={()=>setColor("yellow")}>Yellow</button>
                    <button className="outline-none buttonoutline bg-pink-500" onClick={()=>setColor("pink")}>Pink</button>
                    <button className="outline-none buttonoutline bg-violet-500" onClick={()=>setColor("violet")}>Violet</button>
                    <button className="outline-none buttonoutline bg-white" onClick={()=>setColor("white")}>White</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Obg