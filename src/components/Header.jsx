import { Menu } from 'lucide-react'
import { motion } from 'framer-motion'

function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-2xl bg-slate-950/70 border-b border-white/10"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-tighter">Coffee Ecosystem</div>
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="text-slate-400 hover:text-white transition">Home</a>
          <a href="#features" className="text-slate-400 hover:text-white transition">Features</a>
          <a href="#pricing" className="text-slate-400 hover:text-white transition">Pricing</a>
        </nav>
        <button className="md:hidden">
          <Menu className="text-white" />
        </button>
      </div>
    </motion.header>
  )
}