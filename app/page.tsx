import Link from 'next/link'
import Image from 'next/image'
import { Button } from "./components/ui/button"
import { Input } from "./components/ui/input"
import { Textarea } from "./components/ui/textarea"
import { Card, CardContent } from "./components/ui/card"
import { Facebook, Instagram, Linkedin, Twitter, Mountain, ArrowRight, Check } from "lucide-react"

export default function MarketingWebsite() {
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
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Transform Your Digital Presence
                  </h1>
                  <p className="max-w-[600px] text-gray-200 md:text-xl">
                    We're a digital marketing agency that helps businesses grow online through strategic marketing solutions.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-white text-indigo-800 hover:bg-gray-100">
                    Get Started
                  </Button>
                  <Button variant="outline" className="text-white border-white hover:bg-white hover:text-indigo-800">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="flex flex-col gap-4 min-[400px]:flex-row lg:flex-col">
                <Card className="w-full bg-white/10 backdrop-blur-lg">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-4 text-white">Get a Free Consultation</h2>
                    <form className="space-y-4">
                      <Input placeholder="Your Name" className="bg-white/20 text-white placeholder-gray-300" />
                      <Input placeholder="Your Email" type="email" className="bg-white/20 text-white placeholder-gray-300" />
                      <Textarea placeholder="Your Message" className="bg-white/20 text-white placeholder-gray-300" />
                      <Button className="w-full bg-indigo-600 text-white hover:bg-indigo-700">Submit</Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-20 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-indigo-800">Our Services</h2>
            <div className="grid gap-6 lg:grid-cols-3">
              {["SEO", "PPC", "Social Media", "Content Marketing"].map((service) => (
                <Card key={service} className="group hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="flex flex-col items-center text-center p-6">
                    <h3 className="text-xl font-bold mb-2 text-indigo-800">{service}</h3>
                    <p className="text-gray-600">Brief description of {service} service and its benefits.</p>
                    <ArrowRight className="mt-4 text-indigo-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-20 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-indigo-800">Why Choose Us</h2>
            <div className="grid gap-6 lg:grid-cols-3">
              {["Expertise", "Results-Driven", "Customized Strategies"].map((point) => (
                <Card key={point} className="text-center bg-white">
                  <CardContent className="p-6">
                    <Check className="h-12 w-12 mx-auto mb-4 text-indigo-800" />
                    <h3 className="text-xl font-bold mb-2 text-indigo-800">{point}</h3>
                    <p className="text-gray-600">Brief explanation of how {point} benefits our clients.</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-20 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-indigo-800">Our Process</h2>
            <div className="grid gap-6 lg:grid-cols-4">
              {["Research", "Strategy", "Implementation", "Analysis"].map((step, index) => (
                <div key={step} className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-indigo-800 text-white flex items-center justify-center text-xl font-bold mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-indigo-800">{step}</h3>
                  <p className="text-gray-600">Brief description of the {step} phase.</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-20 bg-gradient-to-br from-indigo-800 to-purple-900 text-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Contact Us</h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="bg-white/10 backdrop-blur-lg">
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <Input placeholder="Your Name" className="bg-white/20 text-white placeholder-gray-300" />
                    <Input placeholder="Your Email" type="email" className="bg-white/20 text-white placeholder-gray-300" />
                    <Textarea placeholder="Your Message" className="bg-white/20 text-white placeholder-gray-300" />
                    <Button className="w-full bg-white text-indigo-800 hover:bg-gray-100">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-lg">
                <CardContent className="p-6 space-y-4">
                  <p>
                    <strong className="text-gray-200">Address:</strong> 123 Marketing St, Digital City, 12345
                  </p>
                  <p>
                    <strong className="text-gray-200">Phone:</strong> (123) 456-7890
                  </p>
                  <p>
                    <strong className="text-gray-200">Email:</strong> info@digitalmarketingagency.com
                  </p>
                </CardContent>
              </Card>
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
                <Input
                  className="flex-1 bg-gray-800 text-white placeholder-gray-400 border-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
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