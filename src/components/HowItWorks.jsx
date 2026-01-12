import { motion } from 'framer-motion'
import { Coffee, QrCode, Award } from 'lucide-react'

function StepCard({ icon: Icon, title, description, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.2 }}
      className="bg-slate-900/50 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 flex items-center space-x-6"
    >
      <div className="bg-gradient-gold-orange p-4 rounded-full">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <div>
        <h3 className="text-xl font-bold tracking-tighter mb-2">{title}</h3>
        <p className="text-slate-400">{description}</p>
      </div>
    </motion.div>
  )
}

function HowItWorks() {
  const steps = [
    {
      icon: Coffee,
      title: 'Select Your Coffee',
      description: 'Choose from our curated menu of premium coffees'
    },
    {
      icon: QrCode,
      title: 'Smart Ordering',
      description: 'Scan QR code or use our mobile app for instant order'
    },
    {
      icon: Award,
      title: 'Earn Rewards',
      description: 'Collect NFT loyalty tokens with each purchase'
    }
  ]

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-16"
    >
      <h2 className="text-4xl font-bold tracking-tighter text-center mb-12 bg-gradient-gold-orange bg-clip-text text-transparent">
        How It Works
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <StepCard 
            key={index} 
            icon={step.icon} 
            title={step.title} 
            description={step.description}
            index={index}
          />
        ))}
      </div>
    </motion.section>
  )
}

export default HowItWorks