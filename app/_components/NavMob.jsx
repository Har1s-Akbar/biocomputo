'use client'
import Image from "next/image"
import {useState} from 'react'
import Link from "next/link"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


function NavMob() {
  return (
    <main className='w-full border-y-2 relative py-3 bg-white shadow-md border-2'>
        <Dialog className=''>
          <DialogTrigger className="ml-3">  
            <Image src="https://img.icons8.com/ios-glyphs/30/menu--v3.png" alt="menu--v3" width={30} height={30}/>
          </DialogTrigger>
          <DialogContent className='w-10/12 m-aut'>
            <Link href='/'>
              Home
            </Link>
            <Link href='/'>
              About
            </Link>
            <Link href='/'>
              Genomics
            </Link>
            <Link href='/'>
              Biocomputo
            </Link>
            <Link href='/'>
              Metagenomics
            </Link>
            <Link href='/'>
              Proteomics
            </Link>
            <Link href='/'>
              Technical Writing
            </Link>
            <Link href='/'>
              Contact
            </Link>
          </DialogContent>
        </Dialog>
    </main>
  )
}

export default NavMob