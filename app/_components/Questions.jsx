'use client'
import {useState, useEffect} from 'react'
import { motion } from 'framer-motion'
function Questions({data}) {
    const [grid, setgrid] = useState(2)

    const getGrid = () =>{
        if(data.length <4){
            setgrid(data.length)
        }else{
            return grid
        }
    }

    useEffect(()=> {getGrid()},[])

    const parentAnimate={
        start:{
            opacity:0
        },
        end:{
            opacity:1
        }
    }

    const childAnimate = {
        start:{
            x:1000
        },
        end:{
            x:0,
            transition:{type:'spring', bounce:0.2, ease:'linear', stiffness:50, velocity:1, mass:0.5}
        }
    }


  return (
    <main className="flex flex-col overflow-x-hidden items-center justify-center mb-10">
        <div className="flex items-center justify-center">
            <h1 className="text-3xl font-medium text-blue-600 my-10 text-center">Frequently Asked Questions</h1>
        </div>
        <motion.div 
        initial={'start'}
        whileInView={'end'}
        viewport={{once:true, amount:1}}
        variants={parentAnimate}
        transition={{staggerChildren:0.5}}
        className={data.length<2 === true? "grid grid-cols-1 lg:flex items-center justify-center gap-y-10 justify-items-center w-5/12 m-auto":"grid grid-cols-1 lg:grid-cols-2 gap-y-10 justify-items-center w-11/12 m-auto"}>
            {data.map((item, index)=>{
                return <motion.div
                variants={childAnimate}
                key={index} className="flex flex-col w-11/12 md:w-full">
                    <h1 className="text-2xl text-blue-600 my-2">{item.title}</h1>
                    <p className="leading-6 w-11/12 opacity-80">{item.content}</p>
                    <div className="flex flex-col my-3 w-11/12 mx-auto lg:w-full">
                        {item.ponits.map((point, index)=>{
                           return <ul key={index} className="list">
                                <li className="mx-4 my-2 opacity-80">{point}</li>
                            </ul>
                        })}
                    </div>
                </motion.div>
            })}
        </motion.div>
    </main>
  )
}

export default Questions