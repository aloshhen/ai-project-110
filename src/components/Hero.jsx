import { motion } from 'framer-motion'
import { ShoppingCart } from 'lucide-react'

function Hero() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-screen flex items-center justify-center text-center px-4"
    >
      <div className="max-w-4xl">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 bg-gradient-gold-orange bg-clip-text text-transparent"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Next-Gen Coffee Ecosystem
        </motion.h1>
        <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
          Revolutionizing coffee experience with smart ordering, crypto payments, and NFT loyalty programs
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center bg-gradient-gold-orange px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition"
        >
          <ShoppingCart className="mr-3" />
          Start Your Order
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Hero