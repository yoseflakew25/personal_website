'use client'

import React from 'react'
import { FiGithub } from 'react-icons/fi'
import { typo } from './ui/typograpghy'

const notableProjects = [


  {
    title: 'Creativa',
    description:
      'Creativa is a vibrant online community where designers, illustrators, artists, and creative professionals come together to showcase their exceptional work.',
    stack: [
      'React',
      'Typescript',
      'Appwrite',
      'react-query',
      'react-hooks',
      'Tailwind css',
    ],
    repoUrl: 'https://github.com/yoseflakew25/Creativa',
    livePreview: 'https://creativa-eight.vercel.app/',
  },
  {
    title: 'Full Stack Airbnb Clone',
    description:
      'This web application, inspired by Airbnb, features user authentication, property listings, reservations, user profiles, and a responsive design.',
    stack: [
      'Next.js 13',
      'React.js',
      'Tailwind CSS',
      'MongoDB',
      'NextAuth.js',
    ],
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
    stack: [
      'api',
      'typescript',
      'react-router',
      'react-js',
      'figma',
      'html',
      'tailwind-css',
    ],
    repoUrl: 'https://github.com/yoseflakew25/ToDoPro',
    livePreview: 'https://to-do-pro.vercel.app/',
  },
  {
    title: 'MovX',
    description:
      'MovX is a simple movie app that allows users to browse and discover their favorite movies, TV shows, and actors. It is built with React.js and utilizes the TMDB API for fetching movie data.',
    stack: [
      'typescript',
      'css3',
      'react-js',
      'tmdb-api',
      'react-router-dom',
      'movie-app',
    ],
    repoUrl: 'https://github.com/yoseflakew25/movx',
    livePreview: 'https://heroic-pithivier-8eb22b.netlify.app/',
  },
  {
    title: 'IP-Info-tracker',
    description:
      'A user-friendly IP address tracker that provides detailed geological and routing information for any given IP address.',
    stack: [
      'Vue-js',
      'css3',
      'html',
      'tailwind-css',
      'bootstrap-5',
      'vue-router',
      'vue-axios',
    ],
    repoUrl: 'https://github.com/yoseflakew25/Ip-location-tracker',
    livePreview: 'https://spectacular-selkie-251203.netlify.app/',
  },
  {
    title: 'A weather App',
    description:
      'A user-friendly and visually appealing weather application that displays and saves weather data for multiple global cities.',
    stack: [
      'Vue-js',
      'css3',
      'html',
      'tailwind-css',
      'weather api',
      'vue-router',
      'vue-axios',
    ],
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
  }

]

const GithubProjects = () => {
  return (
    <section className="my-12 space-y-8 bg-background">
      <div className="space-y-2">
        <h2 className={typo({ variant: 'h2' })}>Other Notable Projects</h2>
        <p className="text-neutral-400 text-sm font-ubuntu max-w-2xl italic">
          A collection of open-source projects, experiments, and tools I&apos;ve
          built along the way.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {notableProjects.map((project, index) => (
          <div
            key={index}
            className="group flex flex-col justify-between p-5 rounded-xl border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900/80 transition-all duration-300 border-dashed hover:border-solid hover:border-neutral-700 hover:shadow-lg hover:shadow-black/20"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-[#25dde5] font-medium font-ubuntu group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-3">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-500 hover:text-white transition-colors"
                  >
                    <FiGithub className="size-5" />
                  </a>
                </div>
              </div>
              <p className="text-neutral-400 text-[13px] leading-relaxed font-ubuntu line-clamp-2">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.stack.map(tech => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded-full bg-neutral-800 text-neutral-500 text-[10px] font-medium font-ubuntu border border-neutral-700/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-[11px] font-medium uppercase tracking-wider text-neutral-600 hover:text-[#25dde5] transition-colors"
              >
                <span>Source Code</span>
                <span className="ml-1">→</span>
              </a>

              <a
                href={project.livePreview}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-[11px] font-medium uppercase tracking-wider text-neutral-600 hover:text-[#25dde5] transition-colors"
              >
                <span>Live Demo</span>
                <span className="ml-1">↗</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default GithubProjects
