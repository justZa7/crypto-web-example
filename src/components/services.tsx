"use client"

import { useRef } from "react"
import { motion, useInView } from "motion/react"
import { Shield, Code, BarChart, Layers } from "lucide-react"

const services = [
  {
    icon: <Code className="h-6 w-6" />,
    title: "Smart Contract Development",
    description:
      "Custom smart contracts for DeFi, NFTs, and other blockchain applications with security best practices.",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Security Auditing",
    description:
      "Comprehensive security audits to identify vulnerabilities in blockchain applications and smart contracts.",
  },
  {
    icon: <BarChart className="h-6 w-6" />,
    title: "Tokenomics Design",
    description: "Strategic token economic models designed to ensure long-term sustainability and growth.",
  },
  {
    icon: <Layers className="h-6 w-6" />,
    title: "Blockchain Integration",
    description: "Seamless integration of blockchain technology into existing systems and applications.",
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 bg-[rgba(0,0,0,0.8)]">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-gradient-green-cyan neon-text">Services Offered</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Specialized blockchain services to help businesses and projects succeed in the crypto ecosystem.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-black-gray p-0.5 rounded-lg group"
            >
              <div className="bg-black rounded-lg p-6 h-full border border-gray-800 hover:border-[rgba(34,197,94,0.3)] transition-all duration-300">
                <div className="flex items-start">
                  <div className="mr-4 p-3 rounded-lg bg-[rgba(34,197,94,0.1)] text-green-400">{service.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-green-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-400">{service.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
