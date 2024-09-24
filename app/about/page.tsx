import Link from 'next/link'
import Image from 'next/image'
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel"
import { Facebook, Instagram, Linkedin, Twitter, Mountain, ArrowRight } from "lucide-react"

export default function AboutUs() {
  const tools = [
    "Adobe Creative Suite",
    "Google Analytics",
    "Hootsuite",
    "Mailchimp",
    "SEMrush",
    "WordPress",
  ]

  const expertiseAreas = [
    { title: "Digital Strategy", description: "Crafting comprehensive online strategies", icon: "🎯" },
    { title: "Content Marketing", description: "Creating engaging and valuable content", icon: "📝" },
    { title: "SEO", description: "Optimizing for search engine visibility", icon: "🔍" },
    { title: "Social Media", description: "Building brand presence on social platforms", icon: "📱" },
    { title: "PPC Advertising", description: "Managing effective paid campaigns", icon: "💰" },
    { title: "Web Design", description: "Designing user-friendly websites", icon: "🎨" },
    { title: "Email Marketing", description: "Developing targeted email campaigns", icon: "📧" },
    { title: "Analytics", description: "Providing data-driven insights", icon: "📊" },
    { title: "Conversion Optimization", description: "Improving website conversion rates", icon: "📈" },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="sticky top-0 z-50 w-full border-b bg-white shadow-md">
        <div className="container flex h-16 items-center justify-between">
          <Link className="flex items-center justify-center" href="/">
            <Mountain className="h-8 w-8 text-indigo-800" />
            <span className="ml-2 text-xl font-bold text-indigo-800">Acme Inc</span>
          </Link>
          <nav className="flex gap-6">
            <Link className="text-sm font-medium text-gray-700 hover:text-indigo-800 transition-colors" href="/">Home</Link>
            <Link className="text-sm font-medium text-gray-700 hover:text-indigo-800 transition-colors" href="/about">About Us</Link>
            <Link className="text-sm font-medium text-gray-700 hover:text-indigo-800 transition-colors" href="/services">Services</Link>
            <Link className="text-sm font-medium text-gray-700 hover:text-indigo-800 transition-colors" href="/contact">Contact</Link>
            <Link className="text-sm font-medium text-gray-700 hover:text-indigo-800 transition-colors" href="/blog">Blog</Link>
          </nav>
          <Button className="bg-indigo-800 hover:bg-indigo-900 text-white">
            Speak to an expert
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-20 bg-gradient-to-br from-indigo-800 to-purple-900 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                  Innovate. Create. Elevate.
                </h1>
                <p className="mx-auto max-w-[700px] text-xl text-gray-200 md:text-2xl">
                  We're passionate about helping businesses grow through innovative digital strategies and cutting-edge technologies.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-white text-indigo-800 hover:bg-gray-100">
                  Our Expertise
                </Button>
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-indigo-800">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-20 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-indigo-800">Our Toolkit</h2>
            <Carousel className="w-full max-w-xs mx-auto">
              <CarouselContent>
                {tools.map((tool, index) => (
                  <CarouselItem key={index}>
                    <Card className="border-2 border-indigo-200">
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-2xl font-semibold text-indigo-800">{tool}</span>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>
        <section id="expertise" className="w-full py-20 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-indigo-800">Our Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {expertiseAreas.map((area, index) => (
                <Card key={index} className="group hover:shadow-lg transition-shadow duration-300 bg-white">
                  <CardContent className="flex flex-col items-center text-center p-6">
                    <span className="text-4xl mb-4">{area.icon}</span>
                    <h3 className="text-xl font-bold mb-2 text-indigo-800">{area.title}</h3>
                    <p className="text-gray-600">{area.description}</p>
                    <ArrowRight className="mt-4 text-indigo-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-20 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-indigo-800">Our Partners</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
              <Image src="/placeholder.svg" alt="Partner Logo" width={150} height={50} className="mx-auto" />
              <Image src="/placeholder.svg" alt="Partner Logo" width={150} height={50} className="mx-auto" />
              <Image src="/placeholder.svg" alt="Partner Logo" width={150} height={50} className="mx-auto" />
              <Image src="/placeholder.svg" alt="Partner Logo" width={150} height={50} className="mx-auto" />
            </div>
          </div>
        </section>
        <section className="w-full py-20 bg-gradient-to-br from-indigo-800 to-purple-900 text-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Connect With Us</h2>
            <div className="flex justify-center space-x-6">
              <Link href="#" className="text-white hover:text-gray-200 transition-colors">
                <Facebook className="h-8 w-8" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-white hover:text-gray-200 transition-colors">
                <Twitter className="h-8 w-8" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-white hover:text-gray-200 transition-colors">
                <Instagram className="h-8 w-8" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-white hover:text-gray-200 transition-colors">
                <Linkedin className="h-8 w-8" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-12 bg-gray-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-4">
            <div className="space-y-2">
              <h3 className="text-lg font-bold">About Us</h3>
              <p className="text-sm text-gray-300">Empowering businesses with innovative digital solutions.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold">Quick Links</h3>
              <ul className="space-y-1">
                <li><Link className="text-sm hover:underline text-gray-300" href="/">Home</Link></li>
                <li><Link className="text-sm hover:underline text-gray-300" href="/services">Services</Link></li>
                <li><Link className="text-sm hover:underline text-gray-300" href="/case-studies">Case Studies</Link></li>
                <li><Link className="text-sm hover:underline text-gray-300" href="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold">Follow Us</h3>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Twitter className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Linkedin className="h-6 w-6" />
                </Link>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold">Newsletter</h3>
              <form className="flex space-x-2">
                <input
                  className="flex-1 px-3 py-2 bg-gray-800 text-white placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Your email"
                  type="email"
                />
                <Button type="submit" className="bg-indigo-600 text-white hover:bg-indigo-700">Subscribe</Button>
              </form>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-gray-400">© 2023 Acme Inc. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}