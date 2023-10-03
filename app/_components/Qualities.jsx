'use client'
import {useState, useEffect} from 'react'
import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import { urlFor } from "../_lib/sanity"

import { motion } from "framer-motion"

const parentAnimate={
  start:{
    opacity:0.9
  },
  end:{
    opacity:1
  }
}

const childAnimate={
  start:{
    y:500,
},
end:{
    y:0,
    transition:{type:'spring', bounce:0.2, ease:'linear', stiffness:50, velocity:1, mass:0.5}
}
}

function Qualities({data}) {
    const [grid, setgrid] = useState(3)

    const getGrid = () =>{
        if(data.length <3){
            setgrid(data.length)
        }else{
            return grid
        }
    }
  
    useEffect(()=> {getGrid}, [data, getGrid])  

  return (
    <motion.main
        initial={'start'}
        whileInView={'end'}
        viewport={{once:true, amount:1}}
        variants={parentAnimate}
        transition={{staggerChildren:0.1}}
    className="flex items-center flex-col justify-center overflow-x-hidden">
        <div className="mb-5">
            <h1 className="text-3xl font-semibold text-blue-600 text-center my-5">WHY CHOOSE BIOCOMPUTOMICS</h1>
        </div>
        <div className={grid<3 === true? "grid grid-cols-1 lg:flex items-center justify-center justify-items-center w-10/12 gap-10":"grid grid-cols-1 lg:grid-cols-3 justify-items-center w-10/12 gap-10 md:grid-cols-2"}>
            {data.map((item, index)=>{
            return <motion.div variants={childAnimate} key={index} className="flex flex-col items-center justify-center">
                    <Image className="p-2 border shadow-lg bg-gray-50 rounded-full hover:bg-blue-700 hover:bg-gray-200 delay-200 duration-200" src={urlFor(item.image).url()} alt={item.title} width={70} height={70}/>    
                    <h1 className="text-blue-600 text-xl my-3 font-medium">{item.title}</h1>
                    <Separator className=' h-[2px] bg-cyan-600 w-1/6 my-2 border-cyan-600'/>
                    <div className=" my-2">
                        <p className="text-center text-sm">{item.content}</p>
                    </div>
                </motion.div>
            })}
            
        </div>
    </motion.main>
  )
}

export default Qualities