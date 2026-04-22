'use client'
import React from 'react'

const BinaryBackground = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden select-none" aria-hidden="true">
            {/* Dark Basic Grid Background */}
            <div
                className="absolute inset-0"
                style={{
                    background: "#020617",
                    backgroundImage: `
                        linear-gradient(to right, rgba(100, 116, 139, 0.15) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(100, 116, 139, 0.15) 1px, transparent 1px)
                    `,
                    backgroundSize: "40px 40px",
                }}
            />

            {/* Subtle radial overlay to give it some depth */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(circle at center, transparent 0%, #020617 100%)',
                    opacity: 0.6
                }}
            />
        </div>
    )
}

export default React.memo(BinaryBackground)
