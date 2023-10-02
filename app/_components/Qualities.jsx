'use client'
import {useState, useEffect} from 'react'
import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import { urlFor } from "../_lib/sanity"

function Qualities({data}) {
    const [grid, setgrid] = useState(3)

    const getGrid = () =>{
        if(data.length <3){
            setgrid(data.length)
        }else{
            return grid
        }
    }
  
    useEffect(()=> getGrid, [data])  

  return (
    <main className="flex items-center flex-col justify-center">
        <div className="mb-5">
            <h1 className="text-3xl font-semibold text-blue-600 text-center my-5">WHY CHOOSE BIOCOMPUTOMICS</h1>
        </div>
        <div className={grid<3 === true? "grid grid-cols-1 lg:flex items-center justify-center justify-items-center w-10/12 gap-10":"grid grid-cols-1 lg:grid-cols-3 justify-items-center w-10/12 gap-10 md:grid-cols-2"}>
            {data.map((item)=>{
            return <div key={item._id} className="flex flex-col items-center justify-center">
                    <Image className="p-2 border shadow-lg bg-gray-50 rounded-full hover:bg-blue-700 hover:bg-gray-200 delay-200 duration-200" src={urlFor(item.image).url()} alt={item.title} width={70} height={70}/>    
                    <h1 className="text-blue-600 text-xl my-3 font-medium">{item.title}</h1>
                    <Separator className=' h-[2px] bg-cyan-600 w-1/6 my-2 border-cyan-600'/>
                    <div className=" my-2">
                        <p className="text-center text-sm">{item.content}</p>
                    </div>
                </div>
            })}
            
        </div>
    </main>
  )
}

export default Qualities