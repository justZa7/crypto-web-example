"use client"

import { useRef } from "react"
import { motion, useInView } from "motion/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageSquare, Send } from "lucide-react"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <section ref={ref} id="contact" className="py-24 px-4 sm:px-6 relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(34,197,94,0.05),rgba(6,182,212,0.05))]" />

      <div className="container max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-gradient-green-cyan neon-text">Get In Touch</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to learn more about my services? Send me a message.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold">Let's discuss your project</h3>
            <p className="text-gray-400">
              Whether you're looking to develop a new blockchain application, need a security audit, or want to
              integrate crypto payments into your platform, I'm here to help.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="mr-4 p-3 rounded-lg bg-[rgba(34,197,94,0.1)] text-green-400">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-gray-400">example@exmaple.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 p-3 rounded-lg bg-[rgba(34,197,94,0.1)] text-green-400">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">Discord</h4>
                  <p className="text-gray-400">@example</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="bg-[rgba(0,0,0,0.5)] backdrop-blur-sm border border-gray-800 rounded-lg p-6 shadow-[0_0_25px_rgba(6,182,212,0.2)]"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="bg-[rgba(0,0,0,0.5)] border-gray-700 focus:border-green-500 focus:ring-[rgba(34,197,94,0.2)]"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    className="bg-[rgba(0,0,0,0.5)] border-gray-700 focus:border-green-500 focus:ring-[rgba(34,197,94,0.2)]"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="How can I help you?"
                  className="bg-[rgba(0,0,0,0.5)] border-gray-700 focus:border-green-500 focus:ring-[rgba(34,197,94,0.2)]"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  className="bg-[rgba(0,0,0,0.5)] border-gray-700 focus:border-green-500 focus:ring-[rgba(34,197,94,0.2)] min-h-[120px]"
                />
              </div>
              <Button className="w-full bg-gradient-green-cyan hover:opacity-90 text-black font-medium shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                Send Message <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
