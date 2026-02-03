import React from 'react'
import { typo } from '../ui/typograpghy'
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
        degree: "Coding Academy",
        school: "Africa To Silicon Valley (A2SV) - Backed by Google",
        date: "October 2022 – August 2023",
        location: "Addis Ababa, Ethiopia",
        description: (
            <ul className="space-y-1 list-disc list-inside">
                <li>Solved 400+ problems on platforms like LeetCode and Codeforces, strengthening skills in data structures & algorithms.</li>
                <li>Gained practical experience in full-cycle web development by implementing 20+ UI components from design mockups.</li>
            </ul>
        )
    }
]

const EducationList = () => {
    return (
        <section aria-label="education" className="space-y-6 mt-5">
            <h2 className={typo({ variant: 'h2' })}>Education</h2>
            <ol className="space-y-6" role="list">
                {educationData.map((item, index) => (
                    <EducationItem key={index} {...item} />
                ))}
            </ol>
        </section>
    )
}

export default EducationList
