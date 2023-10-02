'use client'

import Image from "next/image"
import { urlFor } from "../_lib/sanity"

function Companies({data}) {
  return (
    <main className="lg:py-10 grid lg:grid-cols-6 grid-cols-2 py-5 gap-5 lg:w-10/12 mx-auto justify-items-center">
      {data[0].icons.map((icon)=>{
          return <Image width={50} height={50} src={urlFor(icon).url()} alt="medium-logo"/>
        })}
    </main>
  )
}

export default Companies