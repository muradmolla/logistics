import * as React from "react"
import type { HeadFC } from "gatsby"
import Navigation from "../components/Navigation"


const IndexPage = () => {
  return (
    <>
    <Navigation />
    <main className="h-[1500px] bg-blue-dark text-orange">
      <h1>Powerful</h1>
      <h2>Why Q Logistics</h2>
      <h3 className="text-black">Features</h3>
      <h4>Easy to Integrate</h4>
      <p className="text-black">Pickup and Delivery</p>
    </main>
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Q Logistics</title>