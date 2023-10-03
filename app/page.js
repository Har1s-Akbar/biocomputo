import { Nav, Cover, Companies, About, Cards, Workflow, Qualities, Services, Questions, Contact, FooterComp, NavMob } from "./_components"
import { client } from "./_lib/sanity"

export const revalidate = 10

const cover = async() =>{
  const query = `*[_type == "cover"]`
  const data = await client.fetch(query)

  return data
}

const about = async() =>{
  const query = `*[_type == "about"] | order(_createdAt asc)`
  const data = await client.fetch(query)

  return data
}
const card = async() =>{
  const query = `*[_type == "card"] | order(_createdAt asc)`
  const data = await client.fetch(query)

  return data
}
const quality = async() =>{
  const query = `*[_type == "qualities"] | order(_createdAt asc)`
  const data = await client.fetch(query)

  return data
}
const service = async() =>{
  const query = `*[_type == "services"] | order(_createdAt asc)`
  const data = await client.fetch(query)

  return data
}

const questions = async() =>{
  const query = `*[_type == "questions"] | order(_createdAt asc)`
  const data = await client.fetch(query)

  return data
}


export default async function Home() {

  const coverData = await cover()
  const aboutData = await about()
  const cardData = await card()
  const qualityData = await quality()
  const serviceData = await service()
  const questionsData = await questions()

  return (
    <main className="bg-[#FFF0F0] ">
      <div className='sticky top-0 z-10'>
        <Nav />
      </div>
      <div className="lg:hidden block"><NavMob/></div>
      <Cover data={coverData}/>
      <Companies data={coverData}/>
      <div className="bg-[#F7F7F7] py-10 overflow-hidden">
        <About data={aboutData}/>
        <Cards data={cardData}/>
      </div>
      <Workflow/>
      <div className="bg-[#F7F7F7] py-10">
        <Qualities data={qualityData}/>
        <Services data={serviceData}/>
      </div>
      <Questions data={questionsData}/>
      <div className="bg-[#F7F7F7] pt-10">
        <Contact/>
        <FooterComp/>
      </div>
    </main>
  )
}
