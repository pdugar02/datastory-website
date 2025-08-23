import Link from "next/link"
import { Mail, Linkedin, Instagram } from "lucide-react"
import { MobileNav } from "@/components/mobile-nav"

export default function Apply() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Mobile Navigation */}
      <MobileNav currentPage="apply" />

      <header className="sticky top-0 z-40 w-full bg-[#023020] text-[#eee1c6] hidden md:block">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Link href="/">
              <div className="text-xl font-bold cursor-pointer">DataStory</div>
            </Link>
            <span className="text-xl font-bold">{""}</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/about" className="text-sm font-medium hover:text-white transition-colors">
              About
            </Link>
            <Link href="/projects" className="text-sm font-medium hover:text-white transition-colors">
              Projects
            </Link>
            <Link href="/development" className="text-sm font-medium hover:text-white transition-colors">
              Development
            </Link>
            <Link href="/team" className="text-sm font-medium hover:text-white transition-colors">
              Our Team
            </Link>
            <Link href="/apply" className="text-sm font-medium bg-[#eee1c6] text-[#023020] px-3 py-1 rounded">
              Apply Now
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-white transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-[#023020] mb-8">Apply Now</h1>
          <p className="text-2xl md:text-4xl text-gray-600">Coming Soon...</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white py-8 md:py-12 border-t">
        <div className="container mx-auto px-4 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
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
                  className="block bg-[#eee1c6] text-[#023020] px-3 py-1 text-sm rounded"
                >
                  Our Team
                </Link>
                <Link
                  href="/apply"
                  className="block bg-[#023020] text-white px-3 py-1 text-sm rounded hover:bg-[#023020]/80 transition-colors"
                >
                  Apply Now
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
                  <Instagram className="h-5 w-5 text-[#eee1c6] cursor-pointer hover:text-[#eee1c6]/70" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
