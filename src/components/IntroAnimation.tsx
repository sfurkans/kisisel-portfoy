import { motion } from 'motion/react'
import { useEffect, useState } from 'react'

const NAME = 'FURKAN ŞAHİN'

const IntroAnimation = ({ onComplete }: { onComplete: () => void }) => {
  const [slideUp, setSlideUp] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setSlideUp(true), 1900)
    const t2 = setTimeout(() => onComplete(), 2500)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: slideUp ? '-100%' : 0 }}
      transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[60] bg-[#021a0a] flex flex-col items-center justify-center pointer-events-none"
    >
      {/* Ince aksan cizgisi — soldan saga cizilir */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="w-16 h-px bg-emerald-400/60 origin-left mb-7"
      />

      {/* Isim — harf harf mask reveal */}
      <div className="flex overflow-hidden">
        {NAME.split('').map((char, i) => (
          <motion.span
            key={i}
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ delay: 0.4 + i * 0.025, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`text-2xl sm:text-4xl md:text-5xl font-light tracking-[0.15em] leading-[1.25] text-white ${
              char === ' ' ? 'w-3 sm:w-5' : ''
            }`}
            style={{ display: 'inline-block' }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </div>

      {/* Altyazi — yumusak fade + hafif y */}
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mt-7 text-[10px] sm:text-xs font-mono tracking-[0.35em] uppercase text-emerald-400/60"
      >
        Software Developer
      </motion.p>
    </motion.div>
  )
}

export default IntroAnimation
