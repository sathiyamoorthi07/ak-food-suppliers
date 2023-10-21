import Image from "next/image"
import React from "react"

type Props = {}

const FeaturedCard = (props: Props) => {
  const features = [
    {
      name: "Premium Quality",
      img: "/assets/images/premium-quality.png",
    },
    {
      name: "Halal Cut",
      img: "/assets/images/halal.png",
    },
    {
      name: "Fresh & Tenter Cut",
      img: "/assets/images/meat-cutting.png",
    },
    {
      name: "Safe & Healthy",
      img: "/assets/images/safe & healthy.png",
    },
  ]

  return (
    <div className="content-container">
      <div className="flex items-center gap-3">
        {" "}
        <div className="w-1 h-10 rounded-lg bg-primary"></div>
        <p className="text-xl-semi text-gray-800 max-w-lg  ">
          Why Ak Food Suppliers ?
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4  gap-10 my-8 justify-center bg-green-100/80 p-5  rounded-sm">
        {features.map((item: any, index: number) => {
          return (
            <div
              className="w-full h-auto py-5 bg-white drop-shadow-md rounded px-10 flex  items-center gap-5"
              key={index}
            >
              <div className="w-10 h-10 relative">
                {" "}
                <Image
                  src={item.img}
                  loading="lazy"
                  quality={90}
                  alt={item.name}
                  className="rounded-lg scale-100 ease-in-out duration-300 group-hover:scale-105"
                  draggable="false"
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
              <p className="text-base text-gray-800 font-semibold">
                {item.name}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FeaturedCard
