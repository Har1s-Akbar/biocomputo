import Image from "next/image"

function Questions() {
  return (
    <main className="flex flex-col items-center justify-center mb-10">
        <div className="flex items-center justify-center">
            <h1 className="text-3xl font-medium text-blue-600 my-10 text-center">Frequently Asked Questions</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 justify-items-center w-11/12 m-auto">
            <div className="flex flex-col w-11/12 md:w-full">
                <h1 className="text-2xl text-blue-600 my-2">vel illum qui dolorem eum</h1>
                <p className="leading-6 opacity-80">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero impedit inventore culpa vero accusamus in nostrum dignissimos modi, molestiae. Autem iusto esse necessitatibus ex corporis earum quaerat voluptates quibusdam dicta!</p>
                <div className="flex flex-col my-3 w-11/12 mx-auto lg:w-full">
                    <ul className="list">
                        <li className="mx-4 my-2 opacity-80">Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                        <li className="mx-4 my-2 opacity-80">Quisque finibus eu lorem quis elementum</li>
                        <li className="mx-4 my-2 opacity-80">this is my textVivamus accumsan porttitor justo sed</li>
                        <li className="mx-4 my-2 opacity-80">Curabitur at massa id tortor fermentum luctus</li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col w-11/12 md:w-full">
                <h1 className="text-2xl text-blue-600 my-2">BIOSTATISTICS Point</h1>
                <p className="leading-6 opacity-80">The field of statistics provides collection, organization, analysis, interpretation, and presentation of data by applying statistical methods to solve biological problems. We offer:</p>
                <div className="flex flex-col my-3">
                    <ul className="list">
                        <li className="mx-4 my-2 opacity-80">High-quality and accurate data analysis</li>
                        <li className="mx-4 my-2 opacity-80">Hypothesis development</li>
                        <li className="mx-4 my-2 opacity-80">Assistance with study design</li>
                        <li className="mx-4 my-2 opacity-80">Sample size determination</li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col w-11/12 md:w-full">
                <h1 className="text-2xl text-blue-600 my-2">Genomics Point</h1>
                <p className="leading-6 opacity-80">The field of statistics provides collection, organization, analysis, interpretation, and presentation of data by applying statistical methods to solve biological problems. We offer:</p>
                <div className="flex flex-col my-3">
                    <ul className="list">
                        <li className="mx-4 my-2 opacity-80">High-quality and accurate data analysis</li>
                        <li className="mx-4 my-2 opacity-80">Hypothesis development</li>
                        <li className="mx-4 my-2 opacity-80">Assistance with study design</li>
                        <li className="mx-4 my-2 opacity-80">Sample size determination</li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col w-11/12 md:w-full">
                <h1 className="text-2xl text-blue-600 my-2">Metagenomics Point</h1>
                <p className="leading-6 opacity-80">The field of statistics provides collection, organization, analysis, interpretation, and presentation of data by applying statistical methods to solve biological problems. We offer:</p>
                <div className="flex flex-col my-3">
                    <ul className="list">
                        <li className="mx-4 my-2 opacity-80">High-quality and accurate data analysis</li>
                        <li className="mx-4 my-2 opacity-80">Hypothesis development</li>
                        <li className="mx-4 my-2 opacity-80">Assistance with study design</li>
                        <li className="mx-4 my-2 opacity-80">Sample size determination</li>
                    </ul>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Questions