'use client'
import React from 'react'
import SectionHeader from '../ui/section-header'
import ScrollReveal from '../ui/scroll-reveal'
import { StaggerList, StaggerItem } from '../ui/scroll-reveal'
import EducationItem from './education-item'

const educationData = [
    {
        degree: "Bachelor's Degree in Software Engineering - CGPA: 3.59",
        school: "Addis Ababa Science and Technology University",
        date: "September 2019 – July 2024",
        location: "Addis Ababa, Ethiopia",
        description: (
            <p>
                <strong>Relevant Coursework:</strong> Programming (C++), Object Oriented Programming (Java), Networking, Distributed Systems, Computer Security, Data Structures and Algorithms
            </p>
        )
    },
    {
        degree: "Data Structures and Algorithms",
        school: "Africa To Silicon Valley (A2SV) - Backed by Google",
        date: "October 2022 – August 2023",
        location: "Addis Ababa, Ethiopia",
        description: (
            <ul className="space-y-1">
                <li>Completed an intensive two-year program: the first year focused on data structures and algorithms through solving complex problems, and the second year emphasized software engineering and system design.</li>
                <li>Solved 700+ problems on LeetCode and Codeforces.</li>
            </ul>
        )
    }
]

const EducationList = () => {
    return (
        <section aria-label="education" className="space-y-6">
           
            <ScrollReveal variant="blueprintReveal">
          <SectionHeader title="Education" sheet="SHEET 03/06" />
        </ScrollReveal>
            <StaggerList className="space-y-6">
                {educationData.map((item, index) => (
                    <StaggerItem key={index}>
                        <EducationItem {...item} />
                    </StaggerItem>
                ))}
            </StaggerList>
        </section>
    )
}

export default EducationList
