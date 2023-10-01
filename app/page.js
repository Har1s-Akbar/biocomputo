import { Nav, Cover, Companies, About, Cards, Workflow, Qualities, Services, Questions, Contact, FooterComp, NavMob } from "./_components"

export default function Home() {
  return (
    <main className="bg-gray-50 overflow-hidden">
      <div className="sticky hidden lg:block top-0 z-10">
        <Nav/>
      </div>
      <div className="lg:hidden block"><NavMob/></div>
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
