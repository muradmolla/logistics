import * as React from "react"
import type { HeadFC } from "gatsby"
import Navigation from "../components/Navigation"
import Hero from "../components/Hero"
import Features from "../components/Features"
import Product from "../components/Product"
import Contact from "../components/Contact"
import Footer from "../components/Footer"


const IndexPage = () => {
  return (
    <>
    <Navigation />
    <main>
      <Hero />
      <Features />
      <Product />
      <Contact />
    </main>
    <Footer />
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Q Logistics</title>