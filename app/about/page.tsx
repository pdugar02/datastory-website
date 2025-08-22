import Image from "next/image"
import Link from "next/link"
import { Mail, Linkedin, Instagram } from "lucide-react"

export default function About() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full bg-[#023020] text-[#eee1c6]">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Link href="/">
              <Image
                src="/images/datastory-logo.png"
                alt="DataStory Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(93%) sepia(12%) saturate(346%) hue-rotate(15deg) brightness(96%) contrast(92%)",
                }}
              />
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/about" className="text-sm font-medium bg-[#eee1c6] text-[#023020] px-3 py-1 rounded">
              About
            </Link>
            <Link href="/projects" className="text-sm font-medium hover:text-white">
              Projects
            </Link>
            <Link href="/development" className="text-sm font-medium hover:text-white">
              Development
            </Link>
            <Link href="/team" className="text-sm font-medium hover:text-white">
              Our Team
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-white">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section - WHO WE ARE */}
        <section className="relative h-[400px] md:h-[500px] overflow-hidden">
          <Image
            src="/images/about-hero-team.png"
            alt="DataStory team"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 flex items-start justify-center pt-16">
            <h1 className="text-6xl md:text-8xl font-bold text-[#eee1c6] tracking-wider text-center px-4">
              WHO WE ARE
            </h1>
          </div>
        </section>

        {/* Vision, Impact, Evolution Section */}
        <section className="py-16 bg-[#023020] relative">
          <div className="container mx-auto px-4">
            <div className="relative z-10 max-w-6xl mx-auto">
              <Image
                src="/images/about-vision-impact-evolution.png"
                alt="DataStory Vision, Impact, and Evolution sections with team photos"
                width={1200}
                height={900}
                className="w-full h-auto object-contain object-center mx-auto"
                priority
              />
            </div>
          </div>
        </section>

        {/* Where We Work Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-12 text-[#023020]">WHERE WE WORK</h2>

            <div className="max-w-6xl mx-auto flex justify-center">
              <Image
                src="/images/comprehensive-company-logos.png"
                alt="Companies where DataStory members work including Amazon, Microsoft, Apple, Intel, Tesla, Meta, McKinsey, BlackRock, BCG, Coca-Cola, Adobe, Disney, Red Bull, AT&T, Salesforce, Walmart, ThermoFisher Scientific, DataDog, Rakuten, Atlassian, Chime, PwC, Scale, Visa, CrowdStrike, Accenture, Workday, EY, Coinbase, and Jefferies"
                width={1400}
                height={800}
                className="w-full max-w-6xl h-auto object-contain object-center mx-auto"
                priority
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold mb-4 text-[#023020]">DataStory at Berkeley</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We are a student group acting independently of the University of California. We take full responsibility
                for our organization and this website.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-[#023020]">General</h4>
              <div className="space-y-2">
                <Link
                  href="/about"
                  className="block bg-[#023020] text-white px-3 py-1 text-sm rounded hover:bg-[#023020]/80 transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/projects"
                  className="block bg-[#023020] text-white px-3 py-1 text-sm rounded hover:bg-[#023020]/80 transition-colors"
                >
                  Projects
                </Link>
                <Link
                  href="/team"
                  className="block bg-[#023020] text-white px-3 py-1 text-sm rounded hover:bg-[#023020]/80 transition-colors"
                >
                  Our Team
                </Link>
                <Link
                  href="/contact"
                  className="block bg-[#023020] text-white px-3 py-1 text-sm rounded hover:bg-[#023020]/80 transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-[#023020]">Contact</h4>
              <div className="flex gap-2">
                <Link href="/contact">
                  <Mail className="h-5 w-5 text-[#023020] cursor-pointer hover:text-[#023020]/70" />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/datastoryconsulting/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5 text-[#023020] cursor-pointer hover:text-[#023020]/70" />
                </Link>
                <Link href="https://www.instagram.com/datastoryberkeley/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5 text-[#023020] cursor-pointer hover:text-[#023020]/70" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
