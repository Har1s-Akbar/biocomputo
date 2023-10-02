import Image from "next/image"
import control_panel from '../_assets/control-panel-animate.svg'
import fingerprint from '../_assets/Fingerprint-bro.svg'

function About() {
  return (
    <main className="bg-white w-full lg:pt-16">
        <div className="bg-white rounded-lg lg:grid lg:grid-cols-2 lg:px-5 lg:items-start justify-center custom-shadow mx-auto md:w-11/12 lg:w-10/12 md:pb-3">
            <div>
                <Image src={control_panel} width={500} height={500} className="mx-auto" alt='about' />
            </div>
            <div className=" flex flex-col items-center justify-center mt-5">
                <h1 className="text-3xl font-medium text-blue-600 my-5">About Us</h1>
                <p className="italic opacity-70 w-9/12 mx-auto lg:w-full md:w-11/12">At biocomputomics, we have a vision to integrate biological and computational applications to proliferate scientific research. We have a mission to apply the power of computational biology to recommend solution to complex biological and data analysis problems faced by students and researchers in public and private research institutes, biotechnology companies, and universities.</p>
                <div className="mt-10 flex flex-col w-9/12 md:w-11/12 m-auto">
                    <div className="flex mb-10">
                            <Image src={fingerprint} className="lg:p-2 h-20 border shadow-md bg-gray-50 rounded-lg hover:bg-blue-700 hover:bg-gray-200 delay-200 duration-200" width={70} height={70} alt="fingerprint"/>
                        <div className="ml-5 lg:w-9/12">
                            <h1 className="text-xl mb-2 text-cyan-600 font-semibold">LOREM IPSUM</h1>
                            <p className="text-sm opacity-80 font-normal">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                        </div>
                    </div>
                    <div className="flex mb-10">
                        <Image src={fingerprint} className="lg:p-2 h-20 border shadow-md bg-gray-50 rounded-lg hover:bg-blue-700 hover:bg-gray-200 delay-200 duration-200" width={70} height={70} alt="fingerprint"/>
                        <div className="ml-5 lg:w-9/12">
                            <h1 className="text-xl mb-2 text-cyan-600 font-semibold">NEMO ENIM</h1>
                            <p className="text-sm opacity-80 font-normal">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default About