import { Header } from "@/app/components/header"
import { HeroSection } from "@/app/components/hero-section"
import { HowItWorks } from "@/app/components/how-it-works"
import { UseFunds } from "@/app/components/use-funds"
import { Eligibility } from "@/app/components/eligibility"
import { CTASection } from "@/app/components/cta-section"
import { Footer } from "@/app/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <HowItWorks />
        <UseFunds />
        <Eligibility />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

