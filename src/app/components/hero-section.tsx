import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container grid lg:grid-cols-2 gap-8 items-center mx-auto max-w-6xl">
        <div className="space-y-6 lg:pr-8">
          <div className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold mb-2 ml-0 lg:ml-9 bg-blue-100">
            Funding from $2,500 - $1,000,000
          </div>
          <h1 className="relative text-4xl font-bold tracking-tight sm:text-6xl ml-0 lg:ml-9 text-[#155991]">
            Obtaining working capital for your business has never been easier.
          </h1>
          <p className="text-gray-600 ml-0 lg:ml-9">
            Business funding made fast and simple for all types of business needs, and credit situations.
          </p>
          <Link
            href="/get-funded"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors ml-0 lg:ml-9"
          >
            Get Funded Now
          </Link>
        </div>
        <div className="relative h-[500px] w-full lg:w-[400px] lg:col-span-1 ml-auto lg:ml-0">
          <Image
            src="https://res.cloudinary.com/dnk7d03vr/image/upload/v1738150361/My%20Word/tulycndx8wddhc3ko3p3.jpg"
            alt="Business Funding"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}