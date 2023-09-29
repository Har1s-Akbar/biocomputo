import Image from "next/image"
import control_panel from '../_assets/control-panel-animate.svg'
import fingerprint from '../_assets/Fingerprint-bro.svg'

function About() {
  return (
    <main className="bg-white w-full lg:pt-10">
        <div className="bg-white lg:flex lg:px-5 lg:items-center justify-center shadow-2xl mx-auto lg:mt-10 lg:w-10/12">
            <div> 
                <Image src={control_panel} width={600} height={600} alt='about' />
            </div>
            <div className="w-1/2 flex flex-col items-center justify-center">
                <h1 className="text-3xl font-medium text-blue-600 my-5">About Us</h1>
                <p className="italic opacity-70">At biocomputomics, we have a vision to integrate biological and computational applications to proliferate scientific research. We have a mission to apply the power of computational biology to recommend solution to complex biological and data analysis problems faced by students and researchers in public and private research institutes, biotechnology companies, and universities.</p>
                <div className="mt-10">
                    <div className="lg:flex w-full">
                        <div className="p-2 border shadow-md bg-gray-50 rounded-lg hover:bg-blue-700 hover:bg-gray-200 transition delay-75 duration-75">
                            <Image src={fingerprint} width={70} height={70} alt="fingerprint"/>
                        </div>
                        <div className="ml-5 lg:w-9/12">
                            <h1 className="text-xl mb-2 text-cyan-600 font-semibold">LOREM IPSUM</h1>
                            <p className="text-sm opacity-80 font-normal">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default About