"use client"

import { useRef } from "react"
import { motion, useInView } from "motion/react"
import { ArrowUpRight, Bitcoin, EclipseIcon as Ethereum, DollarSign } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
  {
    id: 1,
    title: "DeFi Lending Platform",
    description:
      "A decentralized lending platform allowing users to lend and borrow crypto assets with competitive interest rates.",
    icon: <DollarSign className="h-6 w-6" />,
    color: "bg-gradient-green-cyan",
    shadowColor: "rgba(6,182,212,0.5)",
  },
  {
    id: 2,
    title: "NFT Marketplace",
    description:
      "A marketplace for creating, buying, and selling unique digital assets secured by blockchain technology.",
    icon: <Ethereum className="h-6 w-6" />,
    color: "bg-gradient-purple-pink",
    shadowColor: "rgba(168,85,247,0.5)",
  },
  {
    id: 3,
    title: "Crypto Trading Bot",
    description: "An automated trading system using advanced algorithms to execute trades based on market conditions.",
    icon: <Bitcoin className="h-6 w-6" />,
    color: "bg-gradient-yellow-orange",
    shadowColor: "rgba(251,191,36,0.5)",
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-gradient-green-cyan neon-text">Featured Projects</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore my portfolio of blockchain and cryptocurrency projects that demonstrate innovation and technical
            expertise in the digital asset space.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card className="bg-[rgba(0,0,0,0.5)] backdrop-blur-sm border border-gray-800 hover:border-[rgba(34,197,94,0.5)] transition-all duration-300 h-full group">
                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-lg ${project.color} flex items-center justify-center mb-4 shadow-[0_0_15px_${project.shadowColor}]`}
                  >
                    {project.icon}
                  </div>
                  <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{project.description}</p>
                </CardContent>
                <CardFooter>
                  <motion.button whileHover={{ x: 5 }} className="flex items-center text-green-400 font-medium">
                    View Project <ArrowUpRight className="ml-2 h-4 w-4" />
                  </motion.button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
