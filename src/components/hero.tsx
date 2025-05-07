"use client"

import { useState, useEffect } from "react"
import { motion } from "motion/react"
import { ArrowRight, Bitcoin, EclipseIcon as Ethereum } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-24">
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block px-4 py-1.5 rounded-full bg-black border border-green-500 text-green-500 text-sm font-medium"
            >
              Example Website !!!
            </motion.div>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
            >
              <span className="block">Innovating in the</span>
              <span className="text-gradient-green-cyan neon-text">Crypto Space</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-lg text-gray-300 max-w-xl"
            >
              Showcasing cutting-edge blockchain projects and DeFi solutions that are shaping the future of finance and
              technology.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Button className="bg-gradient-green-cyan hover:opacity-90 text-black font-medium px-6 py-6 rounded-lg transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                Explore Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="border-green-500 text-green-500 hover:bg-[rgba(34,197,94,0.1)] px-6 py-6 rounded-lg transition-all duration-300"
              >
                Contact Me
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative w-full h-[400px] sm:h-[500px]">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(34,197,94,0.2),rgba(6,182,212,0.2))] rounded-2xl blur-3xl" />
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 50,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                <div className="relative w-64 h-64 sm:w-80 sm:h-80">
                  <motion.div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-green-cyan rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.7)]"
                    animate={{
                      y: [0, 20, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    <Bitcoin className="w-10 h-10 text-black" />
                  </motion.div>
                  <motion.div
                    className="absolute bottom-0 left-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-purple-pink rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.7)]"
                    animate={{
                      y: [0, -15, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                  >
                    <Ethereum className="w-8 h-8 text-black" />
                  </motion.div>
                  <motion.div
                    className="absolute bottom-0 right-0 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-yellow-orange rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(251,191,36,0.7)]"
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                  >
                    <svg className="w-8 h-8 text-black" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0L7.2 12H16.8L12 24L16.8 12H7.2L12 0Z" />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-0 right-0 flex justify-center"
      >
        <div className="animate-bounce flex items-center justify-center w-10 h-10 rounded-full bg-[rgba(34,197,94,0.2)] border border-green-500">
          <ArrowRight className="w-5 h-5 text-green-500 rotate-90" />
        </div>
      </motion.div>
    </section>
  )
}
