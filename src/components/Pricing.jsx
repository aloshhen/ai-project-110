import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

function PricingCard({ title, price, features, isMostPopular }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className={`bg-slate-900/50 backdrop-blur-2xl border border-white/10 rounded-2xl p-8 relative overflow-hidden
        ${isMostPopular ? 'border-amber-500 shadow-xl' : ''}`}
    >
      {isMostPopular && (
        <div className="absolute top-0 left-0 right-0 bg-amber-500 text-center py-2 text-sm font-bold">
          Most Popular
        </div>
      )}
      <h3 className="text-2xl font-bold tracking-tighter mb-4">{title}</h3>
      <div className="text-4xl font-bold mb-6 bg-gradient-gold-orange bg-clip-text text-transparent">
        ${price}
        <span className="text-base text-slate-400 ml-2">/month</span>
      </div>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-slate-400">
            <Check className="text-green-500 mr-3" />
            {feature}
          </li>
        ))}
      </ul>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full bg-gradient-gold-orange py-4 rounded-full font-bold text-white"
      >
        Choose Plan
      </motion.button>
    </motion.div>
  )
}

function Pricing() {
  const plans = [
    {
      title: 'Lite',
      price: 9.99,
      features: ['Basic Coffee Selection', 'Standard Ordering', 'Monthly Rewards']
    },
    {
      title: 'Pro',
      price: 19.99,
      features: ['Premium Coffee Selection', 'Smart Ordering', 'Weekly NFT Drops', 'Priority Support'],
      isMostPopular: true
    },
    {
      title: 'Enterprise',
      price: 49.99,
      features: ['Unlimited Coffee', 'Custom AI Recommendations', 'Dedicated Support', 'Enterprise NFT Program']
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
        Pricing Plans
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <PricingCard 
            key={index}
            title={plan.title}
            price={plan.price}
            features={plan.features}
            isMostPopular={plan.isMostPopular}
          />
        ))}
      </div>
    </motion.section>
  )
}

export default Pricing