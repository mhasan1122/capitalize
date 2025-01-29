import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/placeholder.svg" alt="Logo" width={150} height={40} />
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/how-it-works" className="text-sm font-medium hover:underline">
            How It Works
          </Link>
          <Link href="/why" className="text-sm font-medium hover:underline">
            Why Capitalized?
          </Link>
          <Link href="/partner" className="text-sm font-medium hover:underline">
            Become a Partner
          </Link>
          <Link href="/admin" className="text-sm font-medium hover:underline">
            Admin Panel
          </Link>
          <Link
            href="/get-funded"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Get Funded Now
          </Link>
        </nav>
      </div>
    </header>
  )
}

