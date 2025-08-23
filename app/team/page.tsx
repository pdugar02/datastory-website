"use client"

import Image from "next/image"
import Link from "next/link"
import { Mail, Linkedin, Instagram } from "lucide-react"
import { MobileNav } from "@/components/mobile-nav"

export default function Team() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Mobile Navigation */}
      <MobileNav currentPage="team" />

      <header className="sticky top-0 z-40 w-full bg-[#023020] text-[#eee1c6] hidden md:block">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Link href="/">
              <Image
                src="/images/datastory-logo.png"
                alt="DataStory Logo"
                width={120}
                height={40}
                className="h-8 w-auto cursor-pointer"
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(93%) sepia(12%) saturate(346%) hue-rotate(15deg) brightness(96%) contrast(92%)",
                }}
              />
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
            <Link href="/team" className="text-sm font-medium bg-[#eee1c6] text-[#023020] px-3 py-1 rounded">
              Our Team
            </Link>
            <Link href="/apply" className="text-sm font-medium hover:text-white transition-colors">
              Apply Now
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-white transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative h-[500px] md:h-[600px] bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('/images/meet-our-members-hero-new.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center">
          {/* Top row - MEET OUR */}
          <div className="flex justify-center items-center gap-8 md:gap-16 mb-4 md:mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#eee1c6] tracking-wider">MEET</h1>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#eee1c6] tracking-wider">OUR</h1>
          </div>

          {/* Bottom row - MEMBERS */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#eee1c6] tracking-wider">MEMBERS</h1>
        </div>
      </section>

      <main>
        {/* Executive Board */}
        <section className="py-16 bg-[#023020]">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-[#eee1c6]">Executive Board</h2>

            {/* First Row - Top Leadership */}
            <div className="grid grid-cols-4 md:grid-cols-4 gap-4 md:gap-8 mb-12 max-w-6xl mx-auto">
              {/* Katie Zhang - President */}
              <div className="text-center group relative">
                <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                  <Image
                    src="/images/katie-zhang-headshot.jpeg"
                    alt="Katie Zhang"
                    width={128}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white text-sm p-2">
                    <p className="font-semibold">Junior</p>
                    <p className="text-center">Data Science, Economics</p>
                  </div>
                </div>
                <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Katie Zhang</h3>
                <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">President</p>
                <Link href="https://www.linkedin.com/in/katie-h-zhang/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                </Link>
              </div>

              {/* Pulak Dugar - External VP */}
              <div className="text-center group relative">
                <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                  <Image
                    src="/images/pulak-dugar-headshot.jpeg"
                    alt="Pulak Dugar"
                    width={128}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white text-sm p-2">
                    <p className="font-semibold">Senior</p>
                    <p className="text-center">Computer Science</p>
                  </div>
                </div>
                <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Pulak Dugar</h3>
                <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">External VP</p>
                <Link href="https://www.linkedin.com/in/pulak-dugar/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                </Link>
              </div>

              {/* Mason Borgerding - Co-Internal VP */}
              <div className="text-center group relative">
                <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                  <Image
                    src="/images/mason-borgerding-headshot.jpeg"
                    alt="Mason Borgerding"
                    width={128}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white text-sm p-2">
                    <p className="font-semibold">Junior</p>
                    <p className="text-center">Analytics</p>
                  </div>
                </div>
                <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Mason Borgerding</h3>
                <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Co-Internal VP</p>
                <Link
                  href="http://www.linkedin.com/in/mason-borgerding-52a117277"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                </Link>
              </div>

              {/* Nikhil Rajgopal - Co-Internal VP */}
              <div className="text-center group relative">
                <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                  <Image
                    src="/images/nikhil-rajgopal-headshot.jpeg"
                    alt="Nikhil Rajgopal"
                    width={128}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white text-sm p-2">
                    <p className="font-semibold">Sophomore</p>
                    <p className="text-center">Economics</p>
                  </div>
                </div>
                <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Nikhil Rajgopal</h3>
                <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Co-Internal VP</p>
                <Link
                  href="http://www.linkedin.com/in/nikhil-rajgopal-7051b51b6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                </Link>
              </div>
            </div>

            {/* Second Row - VPs */}
            <div className="grid grid-cols-4 md:grid-cols-4 gap-4 md:gap-8 mb-12 max-w-6xl mx-auto">
              {/* Avyukth Harish - VP of Projects */}
              <div className="text-center group relative">
                <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                  <Image
                    src="/images/avyukth-harish-headshot.jpeg"
                    alt="Avyukth Harish"
                    width={128}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white text-sm p-2">
                    <p className="font-semibold">Sophomore</p>
                    <p className="text-center">Data Science</p>
                  </div>
                </div>
                <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Avyukth Harish</h3>
                <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">VP of Projects</p>
                <Link href="http://linkedin.com/in/avy-harish" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                </Link>
              </div>

              {/* Jack White - VP of Projects */}
              <div className="text-center group relative">
                <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                  <Image
                    src="/images/jack-white-headshot.jpeg"
                    alt="Jack White"
                    width={128}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white text-sm p-2">
                    <p className="font-semibold">Senior</p>
                    <p className="text-center">Data Science</p>
                  </div>
                </div>
                <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Jack White</h3>
                <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">VP of Projects</p>
                <Link href="http://www.linkedin.com/in/jack-white-568761272" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                </Link>
              </div>

              {/* Shaivi Shah - VP of Operations */}
              <div className="text-center group relative">
                <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                  <Image
                    src="/images/shaivi-shah-headshot.jpeg"
                    alt="Shaivi Shah"
                    width={128}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white text-sm p-2">
                    <p className="font-semibold">Junior</p>
                    <p className="text-center">Data Science</p>
                  </div>
                </div>
                <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Shaivi Shah</h3>
                <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">VP of Operations</p>
                <Link href="http://www.linkedin.com/in/shaivi-shah-6b9b30305" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                </Link>
              </div>

              {/* Kayle Marsh - VP of Professional Development */}
              <div className="text-center group relative">
                <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                  <Image
                    src="/images/kayle-marsh-headshot.jpeg"
                    alt="Kayle Marsh"
                    width={128}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white text-sm p-2">
                    <p className="font-semibold">Senior</p>
                    <p className="text-center">Computer Science</p>
                  </div>
                </div>
                <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Kayle Marsh</h3>
                <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">VP of Professional Development</p>
                <Link href="http://www.linkedin.com/in/kaylemarsh" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                </Link>
              </div>
            </div>

            {/* Third Row - Directors */}
            <div className="grid grid-cols-3 md:grid-cols-3 gap-4 md:gap-8 mb-12 max-w-4xl mx-auto">
              {/* Kirin Desai - Dir. of Jr Consultants */}
              <div className="text-center group relative">
                <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                  <Image
                    src="/images/kirin-desai-headshot.jpeg"
                    alt="Kirin Desai"
                    width={128}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white text-sm p-2">
                    <p className="font-semibold">Junior</p>
                    <p className="text-center">Data Science, Economics </p>
                  </div>
                </div>
                <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Kirin Desai</h3>
                <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Dir. of Jr Consultants</p>
                <Link href="https://www.linkedin.com/in/kirin-desai/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                </Link>
              </div>

              <div className="text-center group relative">
                <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                  <Image
                    src="/images/hannah-chung-headshot.jpeg"
                    alt="Hannah Chung"
                    width={128}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white text-sm p-2">
                    <p className="font-semibold">Junior</p>
                    <p className="text-center">{"Statistics"}</p>
                  </div>
                </div>
                <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Hannah Chung</h3>
                <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Dir. of Jr Consultants</p>
                <Link href="https://www.linkedin.com/in/hannah-chung/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                </Link>
              </div>

              <div className="text-center group relative">
                <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                  <Image
                    src="/images/sam-gin-headshot.jpeg"
                    alt="Sam Gin"
                    width={128}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white text-sm p-2">
                    <p className="font-semibold">Junior</p>
                    <p className="text-center">Economics, Data Science </p>
                  </div>
                </div>
                <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Sam Gin</h3>
                <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Dir. of Marketing</p>
                <Link href="https://www.linkedin.com/in/sam-gin/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                </Link>
              </div>
            </div>

            {/* Fourth Row - Junior VPs */}
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-8 mb-12 max-w-2xl mx-auto">
              {/* Julia Shvartsman - Jr VP of Operations */}
              <div className="text-center group relative">
                <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                  <Image
                    src="/images/julia-shvartsman-headshot.jpeg"
                    alt="Julia Shvartsman"
                    width={128}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white text-sm p-2">
                    <p className="font-semibold">Sophomore</p>
                    <p className="text-center">Data Science</p>
                  </div>
                </div>
                <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Julia Shvartsman</h3>
                <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Jr VP of Operations</p>
                <Link
                  href="https://www.linkedin.com/in/julia-shvartsman-4a89692ab/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                </Link>
              </div>

              {/* Hasset Mekuria - Jr External VP */}
              <div className="text-center group relative">
                <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                  <Image
                    src="/images/hasset-mekuria-headshot.jpeg"
                    alt="Hasset Mekuria"
                    width={128}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white text-sm p-2">
                    <p className="font-semibold">Sophomore</p>
                    <p className="text-center">Data Science, Political Science </p>
                  </div>
                </div>
                <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Hasset Mekuria</h3>
                <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Jr External VP</p>
                <Link
                  href="https://www.linkedin.com/in/hasset-mekuria-2189b8271"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                </Link>
              </div>
            </div>

            {/* Consultants */}
            <section className="py-16 bg-[#023020]">
              <div className="container mx-auto px-4">
                <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-[#eee1c6]">Consultants</h2>

                {/* Project Managers - First Row */}
                <div className="grid grid-cols-4 md:grid-cols-4 gap-4 md:gap-8 mb-12 max-w-6xl mx-auto justify-items-center">
                  {/* Dhruv Hebbar */}
                  <div className="text-center group relative">
                    <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                      <Image
                        src="/images/dhruv-hebbar-headshot.jpeg"
                        alt="Dhruv Hebbar"
                        width={128}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white text-sm p-2">
                        <p className="font-semibold">Sophomore</p>
                        <p className="text-center">Data Science, Economics </p>
                      </div>
                    </div>
                    <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Dhruv Hebbar</h3>
                    <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Project Manager</p>
                    <Link href="http://www.linkedin.com/in/dhruvhebbar" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                    </Link>
                  </div>

                  {/* Diego Gutierrez */}
                  <div className="text-center group relative">
                    <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                      <Image
                        src="/images/diego-gutierrez-headshot.jpeg"
                        alt="Diego Gutierrez"
                        width={128}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white text-sm p-2">
                        <p className="font-semibold">Junior</p>
                        <p className="text-center">Data Science, Economics</p>
                      </div>
                    </div>
                    <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Diego Gutierrez</h3>
                    <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Project Manager</p>
                    <Link
                      href="https://www.linkedin.com/in/diego-gutierrez-luns"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                    </Link>
                  </div>

                  {/* Divya Madgula */}
                  <div className="text-center group relative">
                    <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                      <Image
                        src="/images/divya-madgula-headshot.png"
                        alt="Divya Madgula"
                        width={128}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white text-sm p-2">
                        <p className="font-semibold">Junior</p>
                        <p className="text-center">Applied Math, Data Science</p>
                      </div>
                    </div>
                    <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Divya Madgula</h3>
                    <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Project Manager</p>
                    <Link href="https://www.linkedin.com/in/divya-madgula/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                    </Link>
                  </div>

                  {/* Matthew Ho */}
                  <div className="text-center group relative">
                    <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                      <Image
                        src="/images/matthew-ho-headshot.jpeg"
                        alt="Matthew Ho"
                        width={128}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white text-sm p-2">
                        <p className="font-semibold">Senior</p>
                        <p className="text-center">Data Science, Public Health </p>
                      </div>
                    </div>
                    <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Matthew Ho</h3>
                    <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Project Manager</p>
                    <Link href="https://www.linkedin.com/in/matthewho88/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                    </Link>
                  </div>
                </div>

                {/* Project Managers - Second Row */}
                <div className="grid grid-cols-4 md:grid-cols-4 gap-4 md:gap-8 mb-12 max-w-6xl mx-auto justify-items-center">
                  {/* Neil Thomas */}
                  <div className="text-center group relative">
                    <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                      <Image
                        src="/images/neil-thomas-headshot.jpeg"
                        alt="Neil Thomas"
                        width={128}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white text-sm p-2">
                        <p className="font-semibold">Sophomore</p>
                        <p className="text-center">EECS, Math </p>
                      </div>
                    </div>
                    <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Neil Thomas</h3>
                    <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Project Manager</p>
                    <Link href="https://www.linkedin.com/in/neiltthomas/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                    </Link>
                  </div>

                  {/* Oscar Araujo */}
                  <div className="text-center group relative">
                    <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                      <Image
                        src="/images/oscar-araujo-headshot.jpeg"
                        alt="Oscar Araujo"
                        width={128}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white text-sm p-2">
                        <p className="font-semibold">Junior</p>
                        <p className="text-center">Data Science, Economics </p>
                      </div>
                    </div>
                    <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Oscar Araujo</h3>
                    <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Project Manager</p>
                    <Link href="http://www.linkedin.com/in/oscara-raujo" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                    </Link>
                  </div>

                  {/* Reya Puri */}
                  <div className="text-center group relative">
                    <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                      <Image
                        src="/images/reya-puri-headshot.jpeg"
                        alt="Reya Puri"
                        width={128}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white text-sm p-2">
                        <p className="font-semibold">Junior</p>
                        <p className="text-center">Data Science</p>
                      </div>
                    </div>
                    <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Reya Puri</h3>
                    <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Project Manager</p>
                    <Link href="https://www.linkedin.com/in/reyapuri" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                    </Link>
                  </div>

                  {/* Yash Chitambar */}
                  <div className="text-center group relative">
                    <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                      <Image
                        src="/images/yash-chitambar-headshot.jpeg"
                        alt="Yash Chitambar"
                        width={128}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white text-sm p-2">
                        <p className="font-semibold">Sophomore</p>
                        <p className="text-center">Computer Science, Data Science </p>
                      </div>
                    </div>
                    <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Yash Chitambar</h3>
                    <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Project Manager</p>
                    <Link
                      href="https://www.linkedin.com/in/yash-chitambar-b3139829a/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                    </Link>
                  </div>
                </div>

                {/* Regular Consultants - First Row */}
                <div className="grid grid-cols-4 md:grid-cols-4 gap-4 md:gap-8 mb-12 max-w-6xl mx-auto justify-items-center">
                  {/* Samantha Gin */}
                  <div className="text-center group relative">
                    <div className="w-20 h-24 md:w-32 md:h-40 rounded-lg mx-auto mb-2 md:mb-4 overflow-hidden relative">
                      <Image
                        src="/images/sam-gin-headshot.jpeg"
                        alt="Samantha Gin"
                        width={128}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white text-sm p-2">
                        <p className="font-semibold">Junior</p>
                        <p className="text-center">Economics, Data Science </p>
                      </div>
                    </div>
                    <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Samantha Gin</h3>
                    <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Consultant</p>
                    <Link href="https://www.linkedin.com/in/samanthagin/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                    </Link>
                  </div>

                  {/* Tony Getsin */}
                  <div className="text-center group relative">
                    <div className="w-20 h-24 md:w-32 md:h-40 rounded-lg mx-auto mb-2 md:mb-4 overflow-hidden relative">
                      <Image
                        src="/images/tony-getsin-headshot.png"
                        alt="Tony Getsin"
                        width={128}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white text-sm p-2">
                        <p className="font-semibold">Sophomore</p>
                        <p className="text-center">Data Science, Cognitive Science </p>
                      </div>
                    </div>
                    <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Tony Getsin</h3>
                    <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Consultant</p>
                    <Link href="https://www.linkedin.com/in/tonygetsin/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                    </Link>
                  </div>

                  {/* Julia Shvartsman */}
                  <div className="text-center">
                    <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg">
                      <Image
                        src="/images/julia-shvartsman-headshot.jpeg"
                        alt="Julia Shvartsman"
                        width={128}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Julia Shvartsman</h3>
                    <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Consultant</p>
                    <Link
                      href="https://www.linkedin.com/in/julia-shvartsman-4a89692ab/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                    </Link>
                  </div>

                  {/* Viktor Gonzalez */}
                  <div className="text-center group relative">
                    <div className="w-20 h-24 md:w-32 md:h-40 rounded-lg mx-auto mb-2 md:mb-4 overflow-hidden relative">
                      <Image
                        src="/images/viktor-gonzalez-headshot.png"
                        alt="Viktor Gonzalez"
                        width={128}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white text-sm p-2">
                        <p className="font-semibold">Sophomore</p>
                        <p className="text-center">Data Science</p>
                      </div>
                    </div>
                    <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Viktor Gonzalez</h3>
                    <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Consultant</p>
                    <Link
                      href="https://www.linkedin.com/in/viktor-gonzalez-ab974a343/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                    </Link>
                  </div>
                </div>

                {/* Regular Consultants - Second Row */}
                <div className="grid grid-cols-4 md:grid-cols-4 gap-4 md:gap-8 mb-12 max-w-6xl mx-auto justify-items-center">
                  {/* Dhruv Hebbar (also consultant) */}
                  <div className="text-center">
                    <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg">
                      <Image
                        src="/images/dhruv-hebbar-headshot.jpeg"
                        alt="Dhruv Hebbar"
                        width={128}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Dhruv Hebbar</h3>
                    <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Consultant</p>
                    <Link href="http://www.linkedin.com/in/dhruvhebbar" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                    </Link>
                  </div>

                  {/* Kathy Yun */}
                  <div className="text-center group relative">
                    <div className="w-20 h-24 md:w-32 md:h-40 rounded-lg mx-auto mb-2 md:mb-4 overflow-hidden relative">
                      <Image
                        src="/images/kathy-yun-headshot.png"
                        alt="Kathy Yun"
                        width={128}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white text-sm p-2">
                        <p className="font-semibold">Sophomore</p>
                        <p className="text-center">Data Science</p>
                      </div>
                    </div>
                    <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Kathy Yun</h3>
                    <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Consultant</p>
                    <Link
                      href="https://www.linkedin.com/in/kathy-yun-2b4128314/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                    </Link>
                  </div>

                  {/* Himani Balaga */}
                  <div className="text-center group relative">
                    <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                      <Image
                        src="/images/himani-balaga-headshot.png"
                        alt="Himani Balaga"
                        width={128}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white text-sm p-2">
                        <p className="font-semibold">Sophomore</p>
                        <p className="text-center">Data Science</p>
                      </div>
                    </div>
                    <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Himani Balaga</h3>
                    <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Consultant</p>
                    <Link href="https://www.linkedin.com/in/himani-balaga/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                    </Link>
                  </div>

                  {/* Arjun Kelkar */}
                  <div className="text-center group relative">
                    <div className="w-20 h-24 md:w-32 md:h-40 rounded-lg mx-auto mb-2 md:mb-4 overflow-hidden relative">
                      <Image
                        src="/images/arjun-kelkar-headshot.png"
                        alt="Arjun Kelkar"
                        width={128}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white text-sm p-2">
                        <p className="font-semibold">Sophomore</p>
                        <p className="text-center">Data Science, Economics </p>
                      </div>
                    </div>
                    <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Arjun Kelkar</h3>
                    <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Consultant</p>
                    <Link
                      href="https://www.linkedin.com/in/arjun-kelkar-924598350/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                    </Link>
                  </div>
                </div>

                {/* Regular Consultants - Third Row */}
                <div className="grid grid-cols-4 md:grid-cols-4 gap-4 md:gap-8 mb-12 max-w-6xl mx-auto justify-items-center">
                  {/* Ajay Kankipati */}
                  <div className="text-center group relative">
                    <div className="w-20 h-24 md:w-32 md:h-40 object-cover rounded-lg mx-auto mb-2 md:mb-4 overflow-hidden relative">
                      <Image
                        src="/images/ajay-kankipati-headshot.png"
                        alt="Ajay Kankipati"
                        width={128}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white text-sm p-2">
                        <p className="font-semibold">Sophomore</p>
                        <p className="text-center">Data Science</p>
                      </div>
                    </div>
                    <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Ajay Kankipati</h3>
                    <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Consultant</p>
                    <Link
                      href="https://www.linkedin.com/in/ajay-kankipati-86895b271/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                    </Link>
                  </div>

                  {/* Kruna Masic */}
                  <div className="text-center group relative">
                    <div className="w-20 h-24 md:w-32 md:h-40 object-cover rounded-lg mx-auto mb-2 md:mb-4 overflow-hidden relative">
                      <Image
                        src="/images/kruna-masic-headshot.png"
                        alt="Kruna Masic"
                        width={128}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white text-sm p-2">
                        <p className="font-semibold">Junior</p>
                        <p className="text-center">Statistics</p>
                      </div>
                    </div>
                    <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Kruna Masic</h3>
                    <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Consultant</p>
                    <Link href="https://www.linkedin.com/in/kruna-masic/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                    </Link>
                  </div>

                  {/* Nikhil Rajgopal (also consultant) */}
                  <div className="text-center">
                    <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg">
                      <Image
                        src="/images/nikhil-rajgopal-headshot.jpeg"
                        alt="Nikhil Rajgopal"
                        width={128}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Nikhil Rajgopal</h3>
                    <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Consultant</p>
                    <Link
                      href="http://www.linkedin.com/in/nikhil-rajgopal-7051b51b6"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                    </Link>
                  </div>

                  {/* Shaivi Shah (also consultant) */}
                  <div className="text-center">
                    <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg">
                      <Image
                        src="/images/shaivi-shah-headshot.jpeg"
                        alt="Shaivi Shah"
                        width={128}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Shaivi Shah</h3>
                    <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Consultant</p>
                    <Link
                      href="https://www.linkedin.com/in/shaivi-shah-6b9b30305/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                    </Link>
                  </div>
                </div>

                {/* Regular Consultants - Fourth Row */}
                <div className="grid grid-cols-3 md:grid-cols-3 gap-4 md:gap-8 mb-12 max-w-5xl mx-auto justify-items-center">
                  {/* Rayan Sudeora */}
                  <div className="text-center group relative">
                    <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                      <Image
                        src="/images/rayan-sudeora-headshot.png"
                        alt="Rayan Sudeora"
                        width={128}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white text-sm p-2">
                        <p className="font-semibold">Junior</p>
                        <p className="text-center">Data Science, Cognitive Science </p>
                      </div>
                    </div>
                    <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Rayan Sudeora</h3>
                    <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Consultant</p>
                    <Link href="https://www.linkedin.com/in/rayansudeora/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                    </Link>
                  </div>

                  {/* Riley Hansen */}
                  <div className="text-center group relative">
                    <div className="w-20 h-24 md:w-32 md:h-40 rounded-lg mx-auto mb-2 md:mb-4 overflow-hidden relative">
                      <Image
                        src="/images/riley-hansen-headshot.png"
                        alt="Riley Hansen"
                        width={128}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white text-sm p-2">
                        <p className="font-semibold">Senior</p>
                        <p className="text-center">Data Science</p>
                      </div>
                    </div>
                    <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Riley Hansen</h3>
                    <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Consultant</p>
                    <Link href="https://www.linkedin.com/in/riley-hansenn/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                    </Link>
                  </div>

                  {/* Hasset Mekuria (also consultant) */}
                  <div className="text-center">
                    <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg">
                      <Image
                        src="/images/hasset-mekuria-headshot.jpeg"
                        alt="Hasset Mekuria"
                        width={128}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Hasset Mekuria</h3>
                    <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Consultant</p>
                    <Link
                      href="http://www.linkedin.com/in/hasset-mekuria-2189b8271"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* Professional Development */}
            <section className="py-16 bg-[#023020]">
              <div className="container mx-auto px-4">
                <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-[#eee1c6]">
                  Professional Development
                </h2>

                {/* Behavioral Leads */}
                <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-8 mb-12 max-w-4xl mx-auto">
                  {/* Piya Shah */}
                  <div className="text-center group relative">
                    <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                      <Image
                        src="/images/piya-shah-headshot.jpeg"
                        alt="Piya Shah"
                        width={128}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white text-sm p-2">
                        <p className="font-semibold">Senior</p>
                        <p className="text-center">Data Science, Statistics </p>
                      </div>
                    </div>
                    <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Piya Shah</h3>
                    <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Behavioral Lead</p>
                    <Link href="https://www.linkedin.com/in/piya-shahh/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                    </Link>
                  </div>

                  {/* Katelyn Jo */}
                  <div className="text-center group relative">
                    <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                      <Image
                        src="/images/katelyn-jo-headshot.jpeg"
                        alt="Katelyn Jo"
                        width={128}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white text-sm p-2">
                        <p className="font-semibold">Senior</p>
                        <p className="text-center">Data Science, Cognitive Science </p>
                      </div>
                    </div>
                    <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Katelyn Jo</h3>
                    <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Behavioral Lead</p>
                    <Link href="https://www.linkedin.com/in/katelyn-jo/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                    </Link>
                  </div>
                </div>

                {/* Technical Leads */}
                <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-8 mb-12 max-w-4xl mx-auto">
                  {/* Sara Miller */}
                  <div className="text-center group relative">
                    <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                      <Image
                        src="/images/sara-miller-headshot.jpeg"
                        alt="Sara Miller"
                        width={128}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white text-sm p-2">
                        <p className="font-semibold">Senior</p>
                        <p className="text-center">Computer Science, Data Science</p>
                      </div>
                    </div>
                    <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Sara Miller</h3>
                    <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Technical Lead</p>
                    <Link
                      href="https://www.linkedin.com/in/sara-jade-miller/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                    </Link>
                  </div>

                  {/* Anshul Verma */}
                  <div className="text-center group relative">
                    <div className="w-20 h-24 md:w-32 md:h-40 mx-auto mb-2 md:mb-4 overflow-hidden rounded-lg relative">
                      <Image
                        src="/images/anshul-verma-headshot.png"
                        alt="Anshul Verma"
                        width={128}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white text-sm p-2">
                        <p className="font-semibold">Senior</p>
                        <p className="text-center"> Computer Science</p>
                      </div>
                    </div>
                    <h3 className="text-sm md:text-xl font-bold text-[#eee1c6] mb-1">Anshul Verma</h3>
                    <p className="text-xs md:text-base text-[#eee1c6] italic mb-1 md:mb-2">Technical Lead</p>
                    <Link
                      href="https://www.linkedin.com/in/anshul-verma-b5b5b5b5/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5 text-[#eee1c6] mx-auto cursor-pointer hover:text-white" />
                    </Link>
                  </div>
                </div>
              </div>
            </section>
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
