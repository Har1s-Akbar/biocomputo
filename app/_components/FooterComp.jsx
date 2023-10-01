'use client'

import Link from "next/link"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

function FooterComp() {
    return (
      <main className="footer px-16 py-20">
        <div className="grid grid-cols-[23rem_minmax(3rem,_1fr)_20rem_30rem] w-full justify-items-center grid-cols-4">
          <div className="flex flex-col items-start justify-start">
              <div className="mb-5">
                  <p className="text-white text-sm mb-1">Biocomputomic</p>
                  <p className="text-white text-sm mb-1">Pakistan</p>
                  <p className="text-white text-sm mb-1">NY 535022, Karachi</p>
              </div>
              <div>
                  <p className="text-white text-sm my-1"><span className="font-bold">Phone:</span> +92 3152089238</p>
                  <p className="text-white text-sm my-1"><span className="font-bold">Email:</span> biocomputomics@gmail.com</p>
              </div>
              <div className="my-2 flex">
                <Link href='/' className="mx-2">
                    <Image src="https://img.icons8.com/ios-filled/50/FFFFFF/twitter.png" alt="twitter" width={25} height={25}/>    
                </Link>
                <Link href='/' className="mx-2">
                    <Image src="https://img.icons8.com/ios-filled/50/FFFFFF/facebook-new.png" alt="facebook-new" width={25} height={25}/>    
                </Link>
                <Link href='/' className="mx-2">
                    <Image src="https://img.icons8.com/ios-filled/50/FFFFFF/instagram-new--v1.png" alt="instagram-new--v1" width={25} height={25}/>    
                </Link>
                <Link href='/' className="mx-2">
                    <Image src="https://img.icons8.com/ios-filled/50/FFFFFF/skype.png" alt="skype" width={25} height={25}/>    
                </Link>
                <Link href='/' className="mx-2">
                    <Image src="https://img.icons8.com/ios-filled/50/FFFFFF/linkedin.png" alt="linkedin" width={25} height={25}/>    
                </Link>
              </div>
          </div>
          <div className="flex flex-col items-start justify-self-start justify-start">
            <h1 className="text-base font-medium text-white">Useful Links</h1>
            <div>
              <Link href='/' className="flex items-center text-white my-3">
              <Image src="https://img.icons8.com/metro/26/EBEBEB/forward.png" alt="forward" className="opacity-60 mr-5" width={12} height={12}/>
              <p className="text-sm opacity-90">Home</p>
              </Link>
              <Link href='/' className="flex items-center text-white my-3">
              <Image src="https://img.icons8.com/metro/26/EBEBEB/forward.png" alt="forward" className="opacity-60 mr-5" width={12} height={12}/>
              <p className="text-sm opacity-90">About Us</p>
              </Link>
              <Link href='/' className="flex items-center text-white my-3">
              <Image src="https://img.icons8.com/metro/26/EBEBEB/forward.png" alt="forward" className="opacity-60 mr-5" width={12} height={12}/>
              <p className="text-sm opacity-90">Services</p>
              </Link>
              <Link href='/' className="flex items-center text-white my-3">
              <Image src="https://img.icons8.com/metro/26/EBEBEB/forward.png" alt="forward" className="opacity-60 mr-5" width={12} height={12}/>
              <p className="text-sm opacity-90">Terms of Service</p>
              </Link>
              <Link href='/' className="flex items-center text-white my-3">
              <Image src="https://img.icons8.com/metro/26/EBEBEB/forward.png" alt="forward" className="opacity-60 mr-5" width={12} height={12}/>
              <p className="text-sm opacity-90">Privacy Policy</p>
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start justify-self-start">
            <h1 className="font-medium text-base text-white">Our Services</h1>
            <div>
              <Link href='/' className="flex items-center text-white my-3">
              <Image src="https://img.icons8.com/metro/26/EBEBEB/forward.png" alt="forward" className="opacity-60 mr-5" width={12} height={12}/>
              <p className="text-sm opacity-90">Metagenomics</p>
              </Link>
              <Link href='/' className="flex items-center text-white my-3">
              <Image src="https://img.icons8.com/metro/26/EBEBEB/forward.png" alt="forward" className="opacity-60 mr-5" width={12} height={12}/>
              <p className="text-sm opacity-90">Genomics</p>
              </Link>
              <Link href='/' className="flex items-center text-white my-3">
              <Image src="https://img.icons8.com/metro/26/EBEBEB/forward.png" alt="forward" className="opacity-60 mr-5" width={12} height={12}/>
              <p className="text-sm opacity-90">Technical Writing Skills</p>
              </Link>
              <Link href='/' className="flex items-center text-white my-3">
              <Image src="https://img.icons8.com/metro/26/EBEBEB/forward.png" alt="forward" className="opacity-60 mr-5" width={12} height={12}/>
              <p className="text-sm opacity-90">Facilis Impedit</p>
              </Link>
              <Link href='/' className="flex items-center text-white my-3">
              <Image src="https://img.icons8.com/metro/26/EBEBEB/forward.png" alt="forward" className="opacity-60 mr-5" width={12} height={12}/>
              <p className="text-sm opacity-90">Proteomics</p>
              </Link>
            </div>
          </div>
          <div className="flex w-full flex-col items-start justify-start w-full justify-self-start">
            <h1 className="text-base font-medium text-white">Our Newsletter</h1>
            <p className="text-sm text-white my-4 leading-6">Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
            <div className="flex w-full">
              <Input type='text' placeholder=''/>
              <Button className='bg-blue-700'>Subscribe</Button>
            </div>
          </div>
        </div>
      </main>
    )
  }
  export default FooterComp