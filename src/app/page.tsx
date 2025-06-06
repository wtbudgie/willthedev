"use client";

import { useRef, useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Mail, ArrowDown } from "lucide-react";

export default function Component() {
	const projectsRef = useRef<HTMLElement>(null);

	// For fade-in on scroll effect:
	const [isProjectsVisible, setIsProjectsVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => setIsProjectsVisible(entry.isIntersecting), { threshold: 0.2 });
		if (projectsRef.current) observer.observe(projectsRef.current);
		return () => {
			if (projectsRef.current) observer.unobserve(projectsRef.current);
		};
	}, []);

	const scrollToProjects = () => {
		projectsRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	const projects = [
		{
			title: "Laptix",
			description:
				"Laptix is a powerful telemetry analysis tool for popular racing games like Assetto Corsa. It helps drivers break down lap data, identify performance gaps, and optimize their racing lines to shave precious seconds off their best times. With upcoming AI integration, Laptik will offer personalized coaching and smart suggestions to take your racing skills to the next level.",
			image: "/laptix.png?height=100&width=200",
			url: null,
		},
		{
			title: "Password Manager",
			description:
				"A simple password manager written in python for my VCE Applied Computing SAC. This software utilises encryption and password storage to securly store passwords.",
			image: "/pwmanager.png?height=100&width=200",
			url: "https://github.com/wtbudgie/password-manager",
		},
		{
			title: "SwiftPOS",
			description:
				"A simple POS system written in NextJS for my VCE Software Development SAT. This software utilises databases and also (TODO) integrations with Stripe (payment processing), allowing for an easy ordering process.",
			image: "/swiftpos.png?height=100&width=200",
			url: "https://github.com/wtbudgie/swiftpos",
		},
	];

	return (
		<div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100 font-sans">
			<header className="min-h-screen flex flex-col justify-center p-6 bg-gradient-to-b from-gray-900 to-gray-800">
				<div className="container mx-auto">
					<div className="max-w-2xl pl-4 sm:pl-6 md:pl-8">
						<h1 className="text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 drop-shadow-lg">
							WillTheDev
						</h1>
						<p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-prose">
							I’m a TypeScript developer focused on creating innovative and efficient solutions. Passionate about writing clean, scalable code, I
							strive to build applications that improve user experiences and solve real-world problems using modern technologies.
						</p>
						<div className="flex space-x-6 mb-8 text-gray-300">
							<a
								href="https://github.com/wtbudgie"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-blue-400 transition-colors transform hover:scale-110"
								aria-label="GitHub">
								<Github className="w-7 h-7 drop-shadow-md" />
							</a>
							<a
								href="https://discord.gg/UwewEPyQPH"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-indigo-400 transition-colors transform hover:scale-110"
								aria-label="Discord">
								<svg viewBox="0 0 24 24" className="w-7 h-7 fill-current drop-shadow-md">
									<path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
								</svg>
							</a>
							<a
								href="mailto:will@wjanderson08.com"
								className="hover:text-red-400 transition-colors transform hover:scale-110"
								aria-label="Email">
								<Mail className="w-7 h-7 drop-shadow-md" />
							</a>
						</div>
						<Button
							onClick={scrollToProjects}
							className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg shadow-lg hover:from-purple-600 hover:to-pink-600 transition-all flex items-center space-x-2 transform hover:-translate-y-1"
							aria-label="Scroll to projects">
							<span>View Projects</span>
							<ArrowDown className="w-5 h-5 animate-bounce" />
						</Button>
					</div>
				</div>
			</header>

			<main className="container mx-auto px-4 py-16">
				<section
					ref={projectsRef}
					className={`transition-opacity duration-1000 ease-in-out ${isProjectsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
					<h2 className="text-4xl font-semibold mb-12 text-white bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-600 to-blue-400">
						Projects
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{projects.map((project, index) => (
							<Card
								key={index}
								className="bg-white/10 backdrop-blur-md border border-gray-700 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
								<img src={project.image} alt={project.title} className="w-full h-44 object-cover rounded-t-xl" loading="lazy" />
								<CardHeader className="pb-0 pt-4">
									<CardTitle className="text-2xl text-white font-semibold">{project.title}</CardTitle>
								</CardHeader>
								<CardContent className="pt-2">
									<p className="text-gray-300 text-sm mb-6 leading-relaxed">{project.description}</p>
									{project.url ? (
										<a href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title}`}>
											<Button className="bg-gradient-to-r from-blue-600 to-light-blue-600 bg-[length:200%_100%] bg-left hover:bg-right text-white w-full transition-all duration-500 shadow-md">
												View Project
											</Button>
										</a>
									) : (
										<Button className="bg-gray-700 text-white cursor-not-allowed opacity-60 w-full" disabled>
											Coming Soon
										</Button>
									)}
								</CardContent>
							</Card>
						))}
					</div>
				</section>
			</main>

			<footer className="mt-16 p-6 bg-gray-800">
				<div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
					<a
						href="https://discord.com/users/887296580955283537"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center space-x-2 text-sm text-gray-300 hover:text-blue-400 transition-colors">
						<span>Created in</span>
						<svg className="h-4 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" fill="currentColor">
							<clipPath id="t">
								<path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
							</clipPath>
							<path d="M0,0 v30 h60 v-30 z" fill="#00247d" />
							<path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
							<path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#cf142b" strokeWidth="4" />
							<path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
							<path d="M30,0 v30 M0,15 h60" stroke="#cf142b" strokeWidth="6" />
						</svg>
						<span>by</span>
						<svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
							<path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
						</svg>
						<span>@itsnp </span>
					</a>
					<span className="text-sm text-gray-300 select-none">© 2024</span>
				</div>
			</footer>
		</div>
	);
}
