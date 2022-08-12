import * as React from "react"
import type { HeadFC } from "gatsby"
import Navigation from "../components/Navigation"


//ASK: Example: If i want to use an svg repository that svgs can be added from components but rendered on the bottom of the body.
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