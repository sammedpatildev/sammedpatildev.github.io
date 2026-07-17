import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Loader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[10000] bg-[#09090b] flex flex-col items-center justify-center gap-6"
        >
          <motion.div
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-3xl font-bold text-gradient"
          >
            sammed.dev
          </motion.div>
          <div className="w-48 h-0.5 bg-[#27272a] rounded-full overflow-hidden">
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '300%' }}
              transition={{ duration: 1, ease: 'easeInOut', repeat: Infinity }}
              className="w-1/2 h-full bg-gradient-custom"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
