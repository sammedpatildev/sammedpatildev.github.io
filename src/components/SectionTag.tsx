import { motion } from 'framer-motion'

interface Props {
  text: string
}

export default function SectionTag({ text }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="flex items-center gap-3 font-mono text-xs text-[#a78bfa] mb-4 tracking-wider uppercase"
    >
      <span className="w-8 h-px bg-[#a78bfa]" />
      {text}
    </motion.div>
  )
}
