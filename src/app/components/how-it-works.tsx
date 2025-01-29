import Image from "next/image";

const steps = [
  {
    number: 1,
    title: "Complete the application",
    description: "Our simple application takes less than five minutes to complete.",
  },
  {
    number: 2,
    title: "Get your funding offers",
    description: "Your dedicated loan advisor will review your options with you.",
  },
  {
    number: 3,
    title: "Receive your funds",
    description: "Funds wired to your bank account within 24 hours of approval.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20">
      <div className="mx-auto px-4 max-w-7xl"> {/* Center the container and limit max width */}
        <h2 className="text-3xl font-bold text-center mb-12">How it Works</h2>
        
        <div className="flex flex-col md:flex-row gap-52 items-center justify-center"> {/* Flex container with controlled gap */}
          <Image
            src="https://res.cloudinary.com/dnk7d03vr/image/upload/v1738150361/My%20Word/tulycndx8wddhc3ko3p3.jpg"
            alt="Application Process"
            width={600}
            height={500}
            className="rounded-lg shadow-lg"
          />
          <div className="space-y-8 max-w-md"> {/* Limit width of steps and add vertical spacing */}
            {steps.map((step) => (
              <div key={step.number} className="space-y-4"> {/* Spacing between title and description */}
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <span className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center">
                    {step.number}
                  </span>
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}