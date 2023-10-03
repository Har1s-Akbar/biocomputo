'use client'

import { motion } from 'framer-motion'
import diag from '../_assets/diag.png'
import Image from 'next/image'

function Workflow() {
  return (
    <main className="flex flex-col items-center mt-10 mb-16">
        <div className='mb-10'>
            <h1 className="text-3xl text-center font-medium text-blue-600 my-5">WORK FLOW OF A BIOCOMPUTOMICS PROJECT</h1>
        </div>
        <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1}}
        viewport={{once:true, amount:0.1}}
        className='w-11/12'>
            <Image src={diag} className='mx-auto' height={300} width={1100} alt='diag'/>
        </motion.div>
    </main>
  )
}

export default Workflow