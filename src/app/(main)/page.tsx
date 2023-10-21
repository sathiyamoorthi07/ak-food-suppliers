import FeaturedCategories from "@modules/home/components/featured-categories"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home",
  description:
    "Shop all available models only at the ACME. Worldwide Shipping. Secure Payment.",
}

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedCategories />
    </>
  )
}

export default Home
