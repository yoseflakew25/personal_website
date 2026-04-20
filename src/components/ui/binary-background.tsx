'use client'

import React, { useEffect, useRef, useCallback } from 'react'

const BinaryBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    const initCanvas = useCallback(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        if (!ctx) return

        canvas.width = window.innerWidth
        canvas.height = window.innerHeight

        const fontSize = 16
        const columns = Math.floor(canvas.width / 45)
        const rows = Math.floor(canvas.height / (fontSize * 1.1))

        // Initialize grid
        const grid = Array.from({ length: columns }, () =>
            Array.from({ length: rows }, () => Math.round(Math.random()))
        )

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            ctx.font = `${fontSize}px 'var(--font-silkscreen)'`
            ctx.fillStyle = 'rgba(0, 255, 255, 0.4)' // cyber-cyan with opacity
            ctx.shadowBlur = 8
            ctx.shadowColor = 'rgba(0, 255, 255, 0.3)'

            for (let i = 0; i < grid.length; i++) {
                for (let j = 0; j < grid[i].length; j++) {
                    // Randomly flip bits
                    if (Math.random() > 0.98) {
                        grid[i][j] = 1 - grid[i][j]
                    }

                    const x = i * 45 + 10
                    const y = j * (fontSize * 1.1) + 20
                    ctx.fillText(grid[i][j].toString(), x, y)
                }
            }
        }

        let animationFrameId: number
        const render = () => {
            draw()
            // Throttle to ~10fps for that retro feel and performance
            setTimeout(() => {
                animationFrameId = requestAnimationFrame(render)
            }, 100)
        }

        render()

        return () => {
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    useEffect(() => {
        const cleanup = initCanvas()

        let timeoutId: NodeJS.Timeout
        const handleResize = () => {
            clearTimeout(timeoutId)
            timeoutId = setTimeout(() => {
                initCanvas()
            }, 300)
        }

        window.addEventListener('resize', handleResize)
        return () => {
            if (cleanup) cleanup()
            window.removeEventListener('resize', handleResize)
            clearTimeout(timeoutId)
        }
    }, [initCanvas])

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-[-1] opacity-[0.12]"
            aria-hidden="true"
        />
    )
}

export default React.memo(BinaryBackground)
