'use client'

import React from 'react'
import { FiGithub } from 'react-icons/fi'
import SectionHeader from './ui/section-header'
import ScrollReveal from './ui/scroll-reveal'
import { StaggerList, StaggerItem } from './ui/scroll-reveal'

const notableProjects = [
  {
    title: 'Creativa',
    description:
      'Creativa is a vibrant online community where designers, illustrators, artists, and creative professionals come together to showcase their exceptional work.',
    stack: ['React', 'Typescript', 'Appwrite', 'react-query', 'react-hooks', 'Tailwind css'],
    repoUrl: 'https://github.com/yoseflakew25/Creativa',
    livePreview: 'https://creativa-eight.vercel.app/',
  },
  {
    title: 'Full Stack Airbnb Clone',
    description:
      'This web application, inspired by Airbnb, features user authentication, property listings, reservations, user profiles, and a responsive design.',
    stack: ['Next.js 13', 'React.js', 'Tailwind CSS', 'MongoDB', 'NextAuth.js'],
    repoUrl: 'https://github.com/yoseflakew25/airbnb-clone',
    livePreview: '#',
  },
  {
    title: 'HooBank - Modern UI/UX landing page',
    description:
      'Hoobank is a cutting-edge UI/UX landing page specifically designed for a digital payment platform using React.js and Tailwind CSS.',
    stack: ['React', 'Tailwind CSS'],
    repoUrl: 'https://github.com/yoseflakew25/hoobank',
    livePreview: 'https://hoobank-cyan.vercel.app/',
  },
  {
    title: 'Google Search Engine Clone',
    description:
      "The Google Search Engine Clone is a web application that mimics Google's search functionality and design, offering users a familiar interface for web searches.",
    stack: ['React', 'Tailwind CSS', 'nextjs', 'search-api'],
    repoUrl: 'https://github.com/yoseflakew25/google-clone-v2',
    livePreview: 'https://google-clone-v2-psi.vercel.app/',
  },
  {
    title: 'Furnish-Now',
    description:
      'Furnish-Now is a modern, user-friendly ecommerce platform for furniture shopping. It offers a seamless experience for customers to browse and buy furniture from home, using React.js for its interface.',
    stack: ['React', 'mongodb', 'node.js', 'express.js', 'auth0'],
    repoUrl: 'https://github.com/yoseflakew25/Furnish-Now',
    livePreview: 'https://furnishnow.netlify.app/',
  },
  {
    title: 'ToDoPro',
    description:
      'ToDoPro is an online task management app built with React JS, Tailwind CSS, and TypeScript. It helps users efficiently handle their daily tasks by allowing them to create, manage, and organize tasks, boosting productivity.',
    stack: ['api', 'typescript', 'react-router', 'react-js', 'figma', 'html', 'tailwind-css'],
    repoUrl: 'https://github.com/yoseflakew25/ToDoPro',
    livePreview: 'https://to-do-pro.vercel.app/',
  },
  {
    title: 'MovX',
    description:
      'MovX is a simple movie app that allows users to browse and discover their favorite movies, TV shows, and actors. It is built with React.js and utilizes the TMDB API for fetching movie data.',
    stack: ['typescript', 'css3', 'react-js', 'tmdb-api', 'react-router-dom', 'movie-app'],
    repoUrl: 'https://github.com/yoseflakew25/movx',
    livePreview: 'https://heroic-pithivier-8eb22b.netlify.app/',
  },
  {
    title: 'IP-Info-tracker',
    description:
      'A user-friendly IP address tracker that provides detailed geological and routing information for any given IP address.',
    stack: ['Vue-js', 'css3', 'html', 'tailwind-css', 'bootstrap-5', 'vue-router', 'vue-axios'],
    repoUrl: 'https://github.com/yoseflakew25/Ip-location-tracker',
    livePreview: 'https://spectacular-selkie-251203.netlify.app/',
  },
  {
    title: 'A weather App',
    description:
      'A user-friendly and visually appealing weather application that displays and saves weather data for multiple global cities.',
    stack: ['Vue-js', 'css3', 'html', 'tailwind-css', 'weather api', 'vue-router', 'vue-axios'],
    repoUrl: 'https://github.com/yoseflakew25/weather-app-project',
    livePreview: 'https://weather-app-project-eight.vercel.app/',
  },
  {
    title: 'Hyper-Keep',
    description:
      'A Beautiful and clean Note taking app with a design inspired by Google Keep app',
    stack: ['html', 'css', 'javascript'],
    repoUrl: 'https://github.com/yoseflakew25/Hyper-Keep',
    livePreview: 'https://hyper-keep.vercel.app/',
  },
]

const GithubProjects = () => {
  return (
    <section id="github" className="my-12 space-y-8 bg-transparent scroll-mt-24">
      <ScrollReveal variant="fadeUp">
        <SectionHeader
          title="Other Notable Projects"
        />
      </ScrollReveal>

      <StaggerList className="grid grid-cols-1 sm:grid-cols-2 gap-4" staggerDelay={0.08}>
        {notableProjects.map((project, index) => (
          <StaggerItem key={index}>
            <div className="gradient-border-card group flex flex-col justify-between p-5 rounded-xl border border-white/5 bg-card/40 backdrop-blur-sm hover:bg-card/70 transition-all duration-400 hover:border-cyber-cyan/20 hover:shadow-neon-sm">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-cyber-cyan/80 font-orbitron font-medium text-sm tracking-wide group-hover:text-cyber-cyan transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-cyber-cyan transition-colors duration-300"
                    >
                      <FiGithub className="size-[18px]" />
                    </a>
                  </div>
                </div>
                <p className="text-muted-foreground/80 text-[13px] leading-relaxed font-sans line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.stack.map(tech => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-sm bg-cyber-cyan/5 text-cyber-cyan neon-text-cyan text-[10px] font-jetbrains font-medium border border-cyber-cyan/20 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between pt-3 border-t border-white/5">
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-[11px] font-jetbrains font-medium uppercase tracking-wider text-muted-foreground/60 hover:text-cyber-cyan transition-colors duration-300"
                >
                  <span>Source Code</span>
                  <span className="ml-1">→</span>
                </a>

                <a
                  href={project.livePreview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-[11px] font-jetbrains font-medium uppercase tracking-wider text-muted-foreground/60 hover:text-cyber-cyan transition-colors duration-300"
                >
                  <span>Live Demo</span>
                  <span className="ml-1">↗</span>
                </a>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerList>
    </section>
  )
}

export default GithubProjects
