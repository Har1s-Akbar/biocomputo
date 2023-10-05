"use client"
import Image from 'next/image'
import React from 'react'
import { Separator } from '@/components/ui/separator'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
  } from "@/components/ui/navigation-menu"
import Link from 'next/link'


function Nav() {
  return (
    <main className='w-full border-y-2 py-3 bg-white shadow-md border-2 flex items-center justify-center'>
        <NavigationMenu>
          <NavigationMenuList>
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
    </main>
  )
}

export default Nav