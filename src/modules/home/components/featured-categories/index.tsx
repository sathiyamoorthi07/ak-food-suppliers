"use client"
import { useFeaturedProductsQuery } from "@lib/hooks/use-layout-data"
import UnderlineLink from "@modules/common/components/underline-link"
import ProductPreview from "@modules/products/components/product-preview"
import SkeletonProductPreview from "@modules/skeletons/components/skeleton-product-preview"
import { useCollections } from "medusa-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

const FeaturedCategories = () => {
  const { collections } = useCollections()
  const { push } = useRouter()

  return (
    <div className="py-10">
      <div className="content-container">
        <div className="flex items-center gap-3 mb-4">
          {" "}
          <div className="w-1 h-10 rounded-lg bg-primary"></div>
          <p className="text-xl-semi text-gray-800 max-w-lg  ">
            Shop By Category
          </p>
        </div>

        <div className="w-full md:p-10 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-20">
          {collections?.map((item: any, index: any) => {
            return (
              <>
                {item.handle == "mutton" ? (
                  <div
                    className="w-full h-64 flex flex-col cursor-pointer group"
                    key={index}
                    onClick={() => {
                      push("/collections/" + item.handle)
                    }}
                  >
                    <div className="relative w-full flex-1 overflow-hidden rounded-lg">
                      <Image
                        src="/assets/images/mutton.jpg"
                        loading="lazy"
                        quality={90}
                        alt="hero-img.jpg"
                        className="rounded-lg scale-100 ease-in-out duration-300 group-hover:scale-105"
                        draggable="false"
                        fill
                        style={{
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <p className="p-5 w-full text-secondary  text-center text-base font-semibold">
                      Mutton
                    </p>
                  </div>
                ) : null}
                {item.handle == "chicken" ? (
                  <div
                    className="w-full h-64 flex flex-col cursor-pointer group"
                    key={index}
                    onClick={() => {
                      push("/collections/" + item.handle)
                    }}
                  >
                    <div className="relative w-full flex-1 overflow-hidden rounded-lg">
                      <Image
                        src="/assets/images/chicken.jpg"
                        loading="lazy"
                        quality={90}
                        alt="hero-img.jpg"
                        className="rounded-lg scale-100 ease-in-out duration-300 group-hover:scale-105"
                        draggable="false"
                        fill
                        style={{
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <p className="p-5 w-full text-secondary  text-center text-base font-semibold">
                      Chicken
                    </p>
                  </div>
                ) : null}
                {item.handle == "sea-foods" ? (
                  <div
                    className="w-full h-64 flex flex-col cursor-pointer group"
                    key={index}
                    onClick={() => {
                      push("/collections/" + item.handle)
                    }}
                  >
                    <div className="relative w-full flex-1 overflow-hidden rounded-lg">
                      <Image
                        src="/assets/images/fish.jpg"
                        loading="lazy"
                        quality={90}
                        alt="hero-img.jpg"
                        className="rounded-lg scale-100 ease-in-out duration-300 group-hover:scale-105"
                        draggable="false"
                        fill
                        style={{
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <p className="p-5 w-full text-secondary  text-center text-base font-semibold">
                      Sea Foods
                    </p>
                  </div>
                ) : null}
              </>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default FeaturedCategories
