'use client'
import Image from "next/image"
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
      opacity:0
  },
  end:{
      y:0,
      opacity:1,
      transition:{type:'spring', bounce:0.2, ease:'linear', stiffness:50, velocity:1, mass:0.5}
  }
  }

function About({data}) {
  return (
    <motion.main
    id="about"
    initial={'start'}
    whileInView={'end'}
    viewport={{once:true, amount:0.3}}
    variants={parentAnimate}
    transition={{staggerChildren:0.7}}
    className="w-full lg:pt-16">
        <motion.div
        className="bg-gray-50 rounded-lg lg:grid lg:grid-cols-2 lg:px-5 lg:items-start justify-center custom-shadow mx-auto md:w-11/12 lg:w-10/12 md:pb-3">
            <motion.div>
                <Image src={urlFor(data[0].image).url()} width={500} height={500} className="mx-auto" alt='about' />
            </motion.div>
            <motion.div className=" flex flex-col items-center justify-center mt-5">
                <h1 className="text-3xl font-medium text-blue-600 my-5">About Us</h1>
                <p className="italic opacity-70 w-9/12 mx-auto lg:w-full md:w-11/12">{data[0].content}</p>
                <motion.div className="mt-10 flex flex-col w-9/12 md:w-11/12 m-auto">
                    {data.slice(1).map((item, index)=>{
                        return <motion.div
                        variants={childAnimate}
                        key={index} className="flex mb-10">
                            <Image src={urlFor(item.image).url()} className="lg:p-2 h-20 border shadow-md bg-gray-50 rounded-lg hover:bg-blue-700 hover:bg-gray-200 delay-200 duration-200" width={70} height={70} alt="fingerprint"/>
                            <div className="ml-5 lg:w-9/12">
                            <h1 className="text-xl mb-2 text-cyan-600 font-semibold">{item.title}</h1>
                            <p className="text-sm opacity-80 font-normal">{item.content}</p>
                        </div>
                    </motion.div>
                    })}
                </motion.div>
            </motion.div>
        </motion.div>
    </motion.main>
  )
}

export default About