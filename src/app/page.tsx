'use client'

import { useRef } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, User, Mail, ArrowDown } from 'lucide-react'

export default function Component() {
  const projectsRef = useRef<HTMLElement>(null)

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const projects = [
    {
      title: "SpectraX",
      description: "SpectraX is a lightweight but powerful 3D engine equipped with all the features you could need to bring your next game to life.",
      image: "/spectrax.png?height=100&width=200",
      url: null
    },
    {
      title: "Password Manager",
      description: "A simple password manager written in python for my Applied Computing VCE Unit 2 Outcome 1 SAC. Uitilising encryption and password storage.",
      image: "/placeholder.svg?height=100&width=200",
      url: "https://github.com/wtbudgie/password-manager"
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <header className="min-h-screen flex flex-col justify-center p-6 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto">
          <div className="max-w-2xl pl-4 sm:pl-6 md:pl-8">
            <h1 className="text-6xl font-bold mb-6 text-white">WillTheDev</h1>
            <p className="text-xl text-gray-300 mb-8">
              An upcoming C++ and TypeScript developer focused in developing innovative solutions. Currently building a game engine to enhance the average experience and making games easier to build.
            </p>
            <div className="flex space-x-4 mb-8">
              <a href="https://github.com/wtbudgie" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Github className="w-6 h-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://discord.gg/UwewEPyQPH" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
                <User className="w-6 h-6" />
                <span className="sr-only">Discord</span>
              </a>
              <a href="mailto:will@wjanderson08.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Mail className="w-6 h-6" />
                <span className="sr-only">Email</span>
              </a>
            </div>
            <Button onClick={scrollToProjects} className="group bg-blue-600 text-white hover:bg-blue-700">
              View Projects
              <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-16">
        <section ref={projectsRef}>
          <h2 className="text-3xl font-semibold mb-8 text-white">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden bg-gray-800 border-gray-700 hover:border-blue-500 transition-colors">
                <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
                <CardHeader className="pb-0 pt-4">
                  <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-2">
                  <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                  {project.url ? (
        <a href={project.url} target="_blank" rel="noopener noreferrer">
          <Button className="bg-gray-700 text-white hover:bg-blue-600 transition-colors">View Project</Button>
        </a>
      ) : (
        <Button className="bg-gray-700 text-white cursor-not-allowed opacity-50" disabled>Coming Soon</Button>
      )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="mt-16 p-6 bg-gray-800">
        <div className="container mx-auto">
          <a
            href="https://discord.com/users/887296580955283537"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-sm text-gray-300 hover:text-blue-400 transition-colors"
          >
            <span>Created in</span>
            <svg
              className="h-4 w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 60 30"
              fill="currentColor"
            >
              <clipPath id="t">
                <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/>
              </clipPath>
              <path d="M0,0 v30 h60 v-30 z" fill="#00247d"/>
              <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
              <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#cf142b" strokeWidth="4"/>
              <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
              <path d="M30,0 v30 M0,15 h60" stroke="#cf142b" strokeWidth="6"/>
            </svg>
            <span>by</span>
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
              <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
            </svg>
            <span>@itsnp </span>
          </a>
          <span className="inline-flex items-center space-x-2 text-sm text-gray-300"> - Copyright © 2024</span>
        </div>
      </footer>
    </div>
  )
}
