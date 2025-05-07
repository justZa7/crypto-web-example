"use client"

import { useRef } from "react"
import { motion, useInView } from "motion/react"
import Image from "next/image"

export default function Partners() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const partners = [
    { name: "Partner 1", logo: "/placeholder.svg?height=60&width=150" },
    { name: "Partner 2", logo: "/placeholder.svg?height=60&width=150" },
    { name: "Partner 3", logo: "/placeholder.svg?height=60&width=150" },
    { name: "Partner 4", logo: "/placeholder.svg?height=60&width=150" },
    { name: "Partner 5", logo: "/placeholder.svg?height=60&width=150" },
  ]

  return (
    <section ref={ref} className="py-16 px-4 sm:px-6 bg-[rgba(0,0,0,0.8)]">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            <span className="text-gradient-green-cyan neon-text">Trusted Partners</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Collaborating with leading companies in the blockchain ecosystem.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={150}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
