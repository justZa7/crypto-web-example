"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "motion/react"

const stats = [
  { value: 50, label: "Projects Completed", suffix: "+" },
  { value: 25, label: "Smart Contracts", suffix: "M+" },
  { value: 100, label: "Transactions Processed", suffix: "K+" },
  { value: 15, label: "Blockchain Networks", suffix: "+" },
]

export default function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const [counts, setCounts] = useState(stats.map(() => 0))

  useEffect(() => {
    if (isInView) {
      const intervals = stats.map((stat, index) => {
        return setInterval(() => {
          setCounts((prevCounts) => {
            const newCounts = [...prevCounts]
            if (newCounts[index] < stat.value) {
              newCounts[index] = Math.min(newCounts[index] + Math.ceil(stat.value / 50), stat.value)
            }
            return newCounts
          })
        }, 30)
      })

      return () => {
        intervals.forEach((interval) => clearInterval(interval))
      }
    }
  }, [isInView])

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(34,197,94,0.05),rgba(6,182,212,0.05))]" />

      <div className="container max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-gradient-green-cyan neon-text">By The Numbers</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Track record of success in the blockchain and cryptocurrency space.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="relative mb-4 mx-auto">
                <div className="w-24 h-24 rounded-full bg-black border border-[rgba(34,197,94,0.3)] flex items-center justify-center mx-auto shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                  <span className="text-3xl font-bold text-gradient-green-cyan">
                    {counts[index]}
                    {stat.suffix}
                  </span>
                </div>
                <div className="absolute -inset-1 rounded-full bg-[linear-gradient(to_right,rgba(34,197,94,0.2),rgba(6,182,212,0.2))] blur-lg -z-10" />
              </div>
              <h3 className="text-lg font-medium text-gray-300">{stat.label}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
