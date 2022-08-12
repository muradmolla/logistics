import * as React from "react"
import type { HeadFC } from "gatsby"
import Navigation from "../components/Navigation"
import Hero from "../components/Hero"


const IndexPage = () => {
  return (
    <>
    <Navigation />
    <main className="h-[1500px] bg-blue-dark text-orange">
      <Hero />
    </main>
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Q Logistics</title>