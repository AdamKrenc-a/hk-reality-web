import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calculator, Home, Key, Settings, MessageSquare, ArrowRight } from 'lucide-react'

const iconMap = {
  Calculator,
  Home,
  Key,
  Settings,
  MessageSquare,
}

interface ServiceCardProps {
  id: string
  title: string
  description: string
  icon: keyof typeof iconMap
  index?: number
}

export default function ServiceCard({ id, title, description, icon, index = 0 }: ServiceCardProps) {
  const Icon = iconMap[icon] || Home

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      <Link to={`/sluzby/${id}`} className="block h-full">
        <div className="card card-hover h-full p-6 lg:p-8 group">
          <div className="mb-6">
            <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
              <Icon className="w-7 h-7 lg:w-8 lg:h-8 text-primary group-hover:text-white transition-colors duration-300" />
            </div>
          </div>
          <h3 className="text-xl lg:text-2xl font-heading font-bold text-gray-900 mb-3">
            {title}
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            {description}
          </p>
          <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
            <span>Zjistit více</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

