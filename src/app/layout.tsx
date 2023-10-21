import Providers from "@modules/providers"
import "styles/globals.css"
import { Poppins } from "next/font/google"

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className={poppins.className}>
          {" "}
          <Providers>
            <main className="relative">{children}</main>
          </Providers>
        </div>
      </body>
    </html>
  )
}
