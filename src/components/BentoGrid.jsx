import { motion } from 'framer-motion'
import { ShoppingCart, CreditCard, Award, BarChart } from 'lucide-react'

function BentoGridItem({ icon: Icon, title, description, className }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className={`bg-slate-900/50 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 flex flex-col justify-between ${className}`}
    >
      <div className="mb-4">
        <Icon className="w-10 h-10 text-amber-500 mb-4" />
        <h3 className="text-xl font-bold tracking-tighter mb-2">{title}</h3>
        <p className="text-slate-400">{description}</p>
      </div>
    </motion.div>
  )
}

function BentoGrid() {
  const gridItems = [
    {
      icon: ShoppingCart,
      title: 'Smart Order',
      description: 'AI-powered personalized coffee recommendations'
    },
    {
      icon: CreditCard,
      title: 'Crypto Payments',
      description: 'Seamless crypto transactions for your coffee'
    },
    {
      icon: Award,
      title: 'NFT Loyalty',
      description: 'Unique digital collectibles with each purchase'
    },
    {
      icon: BarChart,
      title: 'Live Analytics',
      description: 'Real-time insights into your coffee consumption'
    }
  ]

  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {gridItems.map((item, index) => (
          <BentoGridItem 
            key={index} 
            icon={item.icon} 
            title={item.title} 
            description={item.description} 
          />
        ))}
      </div>
    </motion.section>
  )
}

export default BentoGrid