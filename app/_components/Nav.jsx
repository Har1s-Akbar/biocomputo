"use client"

import React from 'react'
import { Separator } from '@/components/ui/separator'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
import Link from 'next/link'


function Nav() {
  return (
    <main className='w-full border-y-2 py-3 mt-10 bg-white shadow-md border-2 flex items-center justify-center'>
        <NavigationMenu>
          <NavigationMenuList>
              <NavigationMenuItem className='hover:bg-secondary text-teal-700 transition duration-300 delay-300 ease-in-out py-2 px-4 rounded'>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem className='hover:bg-secondary transition duration-300 text-teal-700 delay-300 ease-in-out py-2 px-4 rounded'>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink>
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem className='hover:bg-secondary transition duration-300 text-teal-700 delay-300 ease-in-out py-2 px-4 rounded'>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink>
                    Genomics
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem className='hover:bg-secondary transition duration-300 text-teal-700 delay-300 ease-in-out py-2 px-4 rounded'>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink>
                    Biocomputomic
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem className='hover:bg-secondary transition duration-300 text-teal-700 delay-300 ease-in-out py-2 px-4 rounded'>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink>
                    Matagenomics
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem className='hover:bg-secondary transition duration-300 text-teal-700 delay-300 ease-in-out py-2 px-4 rounded'>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink>
                    Protemics
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem className='hover:bg-secondary transition duration-300 text-teal-700 delay-300 ease-in-out py-2 px-4 rounded'>
              <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink>
                    Technical writing
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem className='hover:bg-secondary transition duration-300 text-teal-700 delay-300 ease-in-out py-2 px-4 rounded'>
              <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink>
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
    </main>
  )
}

export default Nav