import * as React from "react"
import type { HeadFC } from "gatsby"
import Navigation from "../components/Navigation"

const IndexPage = () => {
  return (
    <>
    <Navigation />
    <main className="h-[1500px] bg-blue-dark">
    </main>
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Q Logistics</title>