'use client'
import React from 'react'

interface GlitchTextProps {
    text: string
    className?: string
    as?: 'h1' | 'h2' | 'h3' | 'span' | 'p'
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, className = '', as: Tag = 'span' }) => {
    return (
        <Tag className={`${className}`}>
            {text}
        </Tag>
    )
}

export default GlitchText
