import { Nav, Cover, Companies, About, Cards, Workflow, Qualities, Services, Questions, Contact, FooterComp } from "./_components"

export default function Home() {
  return (
    <main className="bg-gray-50">
      <div className="sticky top-0 z-10"><Nav/></div>
      <Cover/>
      <Companies/>
      <div className="bg-white py-10">
        <About/>
        <Cards/>
      </div>
      <Workflow/>
      <div className="bg-white py-10">
        <Qualities/>
        <Services/>
      </div>
      <Questions/>
      <div className="bg-white pt-10">
        <Contact/>
        <FooterComp/>
      </div>
    </main>
  )
}
