"use client"

import { useEffect, useRef } from "react"
import { motion } from "motion/react"

export default function NeonGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Grid properties
    const gridSize = 40
    const lineWidth = 0.3
    const primaryColor = "rgba(6, 182, 212, 0.3)" // cyan
    const secondaryColor = "rgba(52, 211, 153, 0.2)" // green

    // Animation properties
    let time = 0
    const speed = 0.001

    const animate = () => {
      time += speed
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw horizontal lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.lineWidth = lineWidth
        ctx.strokeStyle = y % (gridSize * 2) === 0 ? primaryColor : secondaryColor

        // Add wave effect to horizontal lines
        for (let x = 0; x < canvas.width; x += 1) {
          const waveHeight = 5 * Math.sin(x * 0.01 + time)
          const yPos = y + waveHeight

          if (x === 0) {
            ctx.moveTo(x, yPos)
          } else {
            ctx.lineTo(x, yPos)
          }
        }

        ctx.stroke()
      }

      // Draw vertical lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.lineWidth = lineWidth
        ctx.strokeStyle = x % (gridSize * 2) === 0 ? primaryColor : secondaryColor

        // Add wave effect to vertical lines
        for (let y = 0; y < canvas.height; y += 1) {
          const waveWidth = 5 * Math.sin(y * 0.01 + time)
          const xPos = x + waveWidth

          if (y === 0) {
            ctx.moveTo(xPos, y)
          } else {
            ctx.lineTo(xPos, y)
          }
        }

        ctx.stroke()
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <motion.canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 opacity-70"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.7 }}
      transition={{ duration: 2 }}
    />
  )
}
