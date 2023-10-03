'use client'

import { motion, stagger } from "framer-motion"
import Image from "next/image"
import { urlFor } from "../_lib/sanity"

const variants = {
  start: { opacity: 0, y:100},
  end: { opacity: 1 , y:0},
  transition:{
    type:"spring",
    bounce:0.3,
    duration:3
  }
}

function Companies({data, index}) {
  return (
    <motion.main
    className="lg:py-10 grid lg:grid-cols-6 grid-cols-2 py-5 gap-5 lg:w-10/12 mx-auto justify-items-center">
      {data[0].icons.map((icon, index)=>{
          return <motion.div 
          key={index}
          initial="start"
          transition={{staggerChildren:1}}
          viewport={{once: true, amount:0.4}}
          whileInView="end"
          variants={variants}>
            <Image width={50} key={index} height={50} src={urlFor(icon).url()} alt="medium-logo"/>
          </motion.div>
        })}
    </motion.main>
  )
}

export default Companies