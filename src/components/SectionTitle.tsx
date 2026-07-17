import { motion } from 'framer-motion'

interface Props {
  children: React.ReactNode
  highlight?: string
}

export default function SectionTitle({ children, highlight }: Props) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-1px] mb-12 sm:mb-16"
    >
      {children}{' '}
      {highlight && <span className="text-gradient">{highlight}</span>}
    </motion.h2>
  )
}
