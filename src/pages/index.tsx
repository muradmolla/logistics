import * as React from "react"
import type { HeadFC } from "gatsby"
import Navigation from "../components/Navigation"

const IndexPage = () => {
  return (
    <>
    <Navigation />
    <main>
    </main>
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
