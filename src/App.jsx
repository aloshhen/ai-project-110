import Header from './components/Header'
import Hero from './components/Hero'
import BentoGrid from './components/BentoGrid'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />
      <Hero />
      <BentoGrid />
      <HowItWorks />
      <Pricing />
      <Footer />
    </div>
  )
}

export default App