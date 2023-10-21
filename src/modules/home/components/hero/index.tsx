"use client"
import Button from "@modules/common/components/button"
import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"
import { useRouter } from "next/navigation"

const Hero = () => {
  const { push } = useRouter()
  return (
    <div className="h-[70vh] w-full relative">
      <div className="text-white  absolute inset-0 z-20 flex flex-col justify-center md:items-center p-5 md:text-center md:space-y-4 ">
        <h1 className="text-2xl md:text-5xl max-w-[50rem] font-extrabold mb-4 drop-shadow-md shadow-black tracking-wide">
          Shop{" "}
          <span className="text-secondary">
            Fresh Mutton, Chicken & Seafood
          </span>{" "}
          Today
        </h1>
        <p className="text-xs md:text-lg max-w-[40rem] drop-shadow-md shadow-black leading-5 tracking-wide">
          We aim to Provide tender and delicious meat to out customers
        </p>
        {/* <UnderlineLink href="/store">Explore products</UnderlineLink> */}

        <Button
          onClick={() => {
            push("/store")
          }}
          className="max-w-fit"
        >
          Shop Now
        </Button>

        {/* <button
          className="min-w-[100px] max-w-fit bg-[#5a9605] py-3 px-5 rounded-md cursor-pointer text-white font-medium"
          onClick={() => {
            push("/store")
          }}
        >
          Shop Now
        </button> */}
      </div>
      <div className="absolute inset-0 z-10 bg-black opacity-80" />
      <Image
        src="/assets/images/hero-img.jpg"
        loading="eager"
        priority={true}
        quality={90}
        alt="hero-img.jpg"
        className="absolute inset-0"
        draggable="false"
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
    </div>
  )
}

export default Hero
