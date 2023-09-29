import { Nav, Cover, Companies, About } from "./_components"

export default function Home() {
  return (
    <main className="bg-gray-50">
      <Nav/>
      <Cover/>
      <Companies/>
      <About/>
    </main>
  )
}
