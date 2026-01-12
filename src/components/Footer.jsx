import { motion } from 'framer-motion'

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-slate-900/50 backdrop-blur-2xl border-t border-white/10 py-16"
    >
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-xl font-bold tracking-tighter mb-4">Coffee Ecosystem</h4>
          <p className="text-slate-400">Revolutionizing coffee experience through technology</p>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4">Features</h4>
          <ul className="space-y-2 text-slate-400">
            <li>Smart Order</li>
            <li>Crypto Payments</li>
            <li>NFT Loyalty</li>
            <li>Live Analytics</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4">Company</h4>
          <ul className="space-y-2 text-slate-400">
            <li>About Us</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4">Legal</h4>
          <ul className="space-y-2 text-slate-400">
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Cookies Policy</li>
            <li>Disclaimer</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-slate-400 mt-8 pt-8 border-t border-white/10">
        © 2024 Coffee Ecosystem. All rights reserved.
      </div>
    </motion.footer>
  )
}

export default Footer