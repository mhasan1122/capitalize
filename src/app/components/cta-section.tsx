import Link from "next/link"

export function CTASection() {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="container text-center mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold mb-6">Let's Get Your Business Funded.</h2>
        <p className="mb-8 max-w-2xl mx-auto">
          Need a consultation? Time to get the funding your business needs. Capitalized can help your goals become a
          reality. Best of all, every&apos;s takes a few minutes to get started.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
          <Link
            href="/apply"
            className="bg-white text-blue-600 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
          >
            Apply Online
          </Link>
          <div className="text-white text-center sm:text-left">
            <p className="font-semibold">Give us a call:</p>
            <p className="text-xl">(800) 999-9999</p>
            <p className="text-sm">Monday-Friday 9am-8pm ET</p>
          </div>
        </div>
      </div>
    </section>
  )
}
