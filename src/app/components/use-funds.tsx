import Link from "next/link"
import { Card } from "@/app/components/ui/card"
import { CircleDollarSign, ArrowRight } from "lucide-react"

const fundUses = [
  {
    icon: <CircleDollarSign className="text-green-600" />,
    title: "Upgrade your business",
    description: "Tackle your to-do list with one loan for renovations, repairs, new supplies and technology.",
  },
  {
    icon: <ArrowRight className="text-green-600" />,
    title: "Invest in Growth",
    description: "Use your funds to hire new staff, run a marketing campaign, or make a large purchase.",
  },
]

export function UseFunds() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold mb-6">Use the funds you receive from us to...</h2>
            <Link
              href="/get-funded"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
            >
              Get Funded Now
            </Link>
          </div>
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {fundUses.map((use) => (
              <Card key={use.title} className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  {use.icon}
                  {use.title}
                </h3>
                <p className="text-gray-600">{use.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

