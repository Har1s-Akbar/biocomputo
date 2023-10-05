'use client'
import Image from "next/image"
import {useState} from 'react'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import logo from '../_assets/bio.png'
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
          <div className="flex items-center">
            <DialogTrigger className="ml-3">
              <Image src="https://img.icons8.com/ios-glyphs/30/menu--v3.png" alt="menu--v3" width={30} height={30}/>
            </DialogTrigger>
            <Image src={logo} alt="logo" width={150} height={150} className="ml-14"/>
          </div>
          <DialogContent className='w-10/12 m-aut'>
            <NavigationMenu>
            <NavigationMenuList className='flex flex-col items-start'>
                <NavigationMenuItem className='hover:bg-secondary text-teal-700 transition duration-300 delay-300 ease-in-out py-2 px-4 rounded'>
                  <Link href="#home" legacyBehavior passHref>
                    <NavigationMenuLink className='flex items-end'>    
                    <Image src="https://img.icons8.com/puffy/32/experimental-home-puffy.png" className='opacity-60' alt="experimental-home-puffy" width={25} height={25}/>
                      <p className='mx-2'>
                        Home
                      </p>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className='hover:bg-secondary transition duration-300 text-teal-700 delay-300 ease-in-out py-2 px-4 rounded'>
                  <Link href="#about" legacyBehavior passHref>
                    <NavigationMenuLink className='flex items-end'>    
                    <Image src="https://img.icons8.com/fluency-systems-regular/48/info--v1.png" className='opacity-60' alt="info--v1" width={25} height={25}/>
                      <p className='mx-2'>
                        About
                      </p>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className='hover:bg-secondary transition duration-300 text-teal-700 delay-300 ease-in-out py-2 px-4 rounded'>
                  <Link href="#card" legacyBehavior passHref>
                    <NavigationMenuLink className='flex items-end'>    
                    <Image src="https://img.icons8.com/external-outlines-amoghdesign/32/external-dna-education-vol-02-outlines-amoghdesign.png" alt="external-dna-education-vol-02-outlines-amoghdesign" width={25} height={25}/>
                    <p className="mx-3">
                      Genomics
                    </p>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className='hover:bg-secondary transition duration-300 text-teal-700 delay-300 ease-in-out py-2 px-4 rounded'>
                  <Link href="#card" legacyBehavior passHref>
                    <NavigationMenuLink className='flex items-end'>
                    <Image src="https://img.icons8.com/fluency-systems-regular/48/blood-sample.png" alt="blood-sample" width={25} height={25}/>
                    <p className="mx-3">
                      Biocomputo
                    </p>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className='hover:bg-secondary transition duration-300 text-teal-700 delay-300 ease-in-out py-2 px-4 rounded'>
                  <Link href="#card" legacyBehavior passHref>
                    <NavigationMenuLink className='flex items-end'>
                    <Image src="https://img.icons8.com/ios/50/peptide.png" alt="peptide" width={25} height={25}/>
                    <p className="mx-3">
                      Metagenomics
                    </p>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className='hover:bg-secondary transition duration-300 text-teal-700 delay-300 ease-in-out py-2 px-4 rounded'>
                  <Link href="#card" legacyBehavior passHref>
                    <NavigationMenuLink className='flex items-end'>
                    <Image src="https://img.icons8.com/ios/50/protein.png" alt="protein" width={25} height={25}/>
                    <p className="mx-3">
                      Proteomics
                    </p>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className='hover:bg-secondary transition duration-300 text-teal-700 delay-300 ease-in-out py-2 px-4 rounded'>
                <Link href="#card" legacyBehavior passHref>
                    <NavigationMenuLink className='flex items-end'>
                    <Image src="https://img.icons8.com/material-outlined/24/hand-with-pen.png" alt="hand-with-pen" width={25} height={25}/>
                    <p className="mx-3">
                      Technical Writing
                    </p>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className='hover:bg-secondary transition duration-300 text-teal-700 delay-300 ease-in-out py-2 px-4 rounded'>
                <Link href="#contact" legacyBehavior passHref>
                    <NavigationMenuLink className='flex item-end'>
                    <Image src="https://img.icons8.com/ios/50/contact-card.png" alt="contact-card" width={25} height={25}/>
                    <p className="mx-3">
                      Contact
                    </p>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </DialogContent>
        </Dialog>
    </main>
  )
}

export default NavMob