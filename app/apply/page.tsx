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

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-[#023020]">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-[#eee1c6] mb-8">Apply Now</h1>
            <p className="text-xl md:text-2xl text-[#eee1c6] mb-12">
              Join DataStory and become part of our data science consulting team
            </p>
          </div>
        </section>

        {/* Application Form Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-[#023020] mb-8 text-center">Spring 2026 Coffee Chats</h2>
              <div className="w-full">
                <iframe 
                  className="airtable-embed w-full border-0 rounded-lg shadow-md" 
                  src="https://airtable.com/embed/appvUWyLHCreiz8UF/shrbB27qqv1yu58ot?viewControls=on" 
                  frameBorder="0" 
                  width="100%" 
                  height="533" 
                  style={{ background: 'transparent' }}
                  title="DataStory Application Form"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Application Link Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-[#023020] mb-8">Application Link</h2>
            <div className="max-w-2xl mx-auto">
              <a 
                href="https://forms.gle/n66HToZwhyN6yrWLA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-[#023020] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#034a2a] transition-colors duration-200 shadow-lg"
              >
                Apply via Google Forms
              </a>
              <p className="text-gray-600 mt-4">
                Click the button above to access our official application form
              </p>
            </div>
          </div>
        </section>
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
