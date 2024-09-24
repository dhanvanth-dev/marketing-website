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

export default function ServicesPage() {
  const services = [
    { name: "TikTok", description: "Get your brand and products on the For You Page and beyond.", icon: "grid" },
    { name: "SEO", description: "Be seen everywhere leads look, learn, and buy.", icon: "hash" },
    { name: "PR", description: "Get featured on top-tier media outlets.", icon: "target" },
    { name: "Programmatic", description: "Generate strong brand awareness with high-impact media.", icon: "trending-up" },
    { name: "Non-Branded Search (PPC)", description: "Eliminate wasteful ad spend with ads people actually want to see.", icon: "search" },
    { name: "Influencer", description: "Leverage the reach and credibility of your audiences role models.", icon: "users" },
  ]

  const clientResults = [
    { name: "Client A", metric: "500% increase in organic traffic" },
    { name: "Client B", metric: "200% ROI on PPC campaigns" },
    { name: "Client C", metric: "1M+ social media impressions" },
  ]

  const testimonials = [
    { quote: "They transformed our online presence!", author: "John Doe, CEO of Company X" },
    { quote: "Our sales have skyrocketed since working with them.", author: "Jane Smith, Marketing Director of Company Y" },
  ]

  const clientLogos = [
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
  ]

  return (
    <div className="flex flex-col min-h-screen bg-indigo-50">
      <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
        <div className="container flex h-16 items-center justify-between">
          <Link className="flex items-center justify-center" href="/">
            <Mountain className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-indigo-600">Acme Inc</span>
          </Link>
          <nav className="flex gap-6">
            <Link className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors" href="/">Home</Link>
            <Link className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors" href="/about">About Us</Link>
            <Link className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors" href="/services">Services</Link>
            <Link className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors" href="/contact">Contact</Link>
            <Link className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors" href="/blog">Blog</Link>
          </nav>
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
            Speak to an expert
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-20 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex justify-center lg:justify-start">
                <Image
                  src="/placeholder.png"
                  alt="Digital Marketing Services"
                  width={500}
                  height={500}
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Elevate Your Digital Presence
                </h1>
                <p className="max-w-[600px] text-indigo-100 md:text-xl">
                  Our comprehensive digital marketing services are designed to boost your online visibility and drive results.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-white text-indigo-600 hover:bg-indigo-100">
                    Speak to an Expert
                  </Button>
                  <Button variant="outline" className="text-white border-white hover:bg-white hover:text-indigo-600">
                    Get a Free Proposal
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-20 bg-white overflow-hidden">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-indigo-600">Our Services</h2>
            <div className="relative">
              <div className="absolute inset-0 bg-black transform -skew-y-6 origin-top-left"></div>
              <div className="relative z-10 grid gap-6 lg:grid-cols-2 items-start">
                <div className="text-white p-6 lg:p-12">
                  <h3 className="text-2xl font-bold mb-4">TOP OF FUNNEL</h3>
                  <p className="text-3xl font-bold text-blue-400 mb-8">Attract — new audiences and boost brand awareness.</p>
                  <div className="space-y-6">
                    {services.slice(0, 3).map((service) => (
                      <div key={service.name} className="flex items-start space-x-4">
                        <div className="bg-blue-500 p-2 rounded-full">
                          <ArrowRight className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold mb-2">{service.name}</h4>
                          <p className="text-gray-300">{service.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="text-white p-6 lg:p-12">
                  <h3 className="text-2xl font-bold mb-4">MIDDLE OF FUNNEL</h3>
                  <p className="text-3xl font-bold text-purple-400 mb-8">Engage — your audience and nurture leads.</p>
                  <div className="space-y-6">
                    {services.slice(3).map((service) => (
                      <div key={service.name} className="flex items-start space-x-4">
                        <div className="bg-purple-500 p-2 rounded-full">
                          <ArrowRight className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold mb-2">{service.name}</h4>
                          <p className="text-gray-300">{service.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-20 bg-gradient-to-br from-indigo-50 to-purple-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-indigo-600">Client Results</h2>
            <div className="grid gap-6 lg:grid-cols-3">
              {clientResults.map((result) => (
                <Card key={result.name} className="text-center">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-indigo-600">{result.name}</h3>
                    <p className="text-gray-600">{result.metric}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
                View More Case Studies
              </Button>
            </div>
          </div>
        </section>
        <section className="w-full py-20 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-indigo-600">Client Testimonials</h2>
            <div className="grid gap-6 lg:grid-cols-2">
              {testimonials.map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <p className="text-lg mb-4 italic">{testimonial.quote}</p>
                    <p className="font-bold text-indigo-600">{testimonial.author}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-20 bg-gradient-to-br from-indigo-50 to-purple-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-indigo-600">Our Clients</h2>
            <Carousel className="w-full max-w-xs mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
              <CarouselContent>
                {clientLogos.map((logo, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <Image src={logo} alt={`Client logo ${index + 1}`} width={100} height={100} />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>
        <section className="w-full py-20 bg-indigo-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Ready to Elevate Your Digital Presence?</h2>
                <p className="text-xl mb-6">Lets discuss how we can help you achieve your digital marketing goals.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
                <Button className="bg-white text-indigo-600 hover:bg-indigo-100">
                  Request a Free Proposal
                </Button>
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-indigo-600">
                  Speak to an Expert
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-12 bg-indigo-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-4">
            <div className="space-y-2">
              <h3 className="text-lg font-bold">About Us</h3>
              <p className="text-sm text-indigo-200">Empowering businesses with innovative digital solutions.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold">Quick Links</h3>
              <ul className="space-y-1">
                <li><Link className="text-sm hover:underline text-indigo-200" href="/">Home</Link></li>
                <li><Link className="text-sm hover:underline text-indigo-200" href="/services">Services</Link></li>
                <li><Link className="text-sm hover:underline text-indigo-200" href="/case-studies">Case Studies</Link></li>
                <li><Link className="text-sm hover:underline text-indigo-200" href="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold">Follow Us</h3>
              <div className="flex space-x-4">
                <Link href="#" className="text-indigo-200 hover:text-white transition-colors">
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-indigo-200 hover:text-white transition-colors">
                  <Twitter className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-indigo-200 hover:text-white transition-colors">
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-indigo-200 hover:text-white transition-colors">
                  <Linkedin className="h-6 w-6" />
                </Link>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold">Newsletter</h3>
              <form className="flex space-x-2">
                <input
                  className="flex-1 px-3 py-2 bg-indigo-800 text-white placeholder-indigo-400 border border-indigo-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Your email"
                  type="email"
                />
                <Button type="submit" className="bg-white text-indigo-600 hover:bg-indigo-100">Subscribe</Button>
              </form>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-indigo-200">© 2023 Acme Inc. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}
