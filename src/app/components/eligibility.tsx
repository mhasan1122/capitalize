import Image from "next/image"
import { Clock, Building, CreditCard, MapPin } from "lucide-react"

const requirements = [
  {
    icon: <Clock className="text-green-600 mt-1" />,
    title: "Time in business",
    description: "You have been in business at least 1 year.",
  },
  {
    icon: <Building className="text-green-600 mt-1" />,
    title: "Monthly Revenue",
    description: "Gross monthly revenue of at least $20,000.",
  },
  {
    icon: <CreditCard className="text-green-600 mt-1" />,
    title: "Personal Credit",
    description: "Your personal FICO score is 500 or above.",
  },
  {
    icon: <MapPin className="text-green-600 mt-1" />,
    title: "Business Location",
    description: "We work with businesses in 50 U.S. States*",
  },
]

export function Eligibility() {
  return (
    <section className="py-20">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-8">Minimum Eligibility Requirements</h2>
          <div className="space-y-6">
            {requirements.map((req) => (
              <div key={req.title} className="flex items-start gap-4">
                {req.icon}
                <div>
                  <h3 className="font-semibold">{req.title}</h3>
                  <p className="text-gray-600">{req.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative h-[500px]">
          <Image
            src="https://res.cloudinary.com/dnk7d03vr/image/upload/v1738150526/My%20Word/ke3owaycs7chomgdzmnx.avif"
            alt="Business Requirements"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}

