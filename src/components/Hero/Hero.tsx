import { motion } from 'motion/react'
import { useState, useCallback, useRef, useEffect } from 'react'
import { fadeInLeft } from '../../utils/animations'

// Text scramble hook — hover'da harf harf glitch efekti
function useTextScramble(originalText: string) {
  const [text, setText] = useState(originalText)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const scramble = useCallback(() => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&!<>{}[]'
    let iteration = 0
    if (intervalRef.current) clearInterval(intervalRef.current)

    intervalRef.current = setInterval(() => {
      setText(
        originalText.split('').map((_, i) => {
          if (i < iteration) return originalText[i]
          return chars[Math.floor(Math.random() * chars.length)]
        }).join('')
      )
      iteration += 1 / 3
      if (iteration >= originalText.length) {
        setText(originalText)
        if (intervalRef.current) clearInterval(intervalRef.current)
      }
    }, 30)
  }, [originalText])

  return { text, scramble }
}

// Magnetic wrapper — her link kendi ref'ine sahip, rAF ile throttle
const MagneticLink = ({ href, target, rel, download, className, children }: {
  href: string
  target?: string
  rel?: string
  download?: boolean | string
  className?: string
  children: React.ReactNode
}) => {
  const ref = useRef<HTMLAnchorElement>(null)
  const rafRef = useRef<number | null>(null)
  const coordsRef = useRef<{ x: number; y: number } | null>(null)

  useEffect(() => () => {
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
  }, [])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    coordsRef.current = { x: e.clientX, y: e.clientY }
    if (rafRef.current !== null) return
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null
      const el = ref.current
      const coords = coordsRef.current
      if (!el || !coords) return
      const rect = el.getBoundingClientRect()
      const x = coords.x - rect.left - rect.width / 2
      const y = coords.y - rect.top - rect.height / 2
      el.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`
      el.style.transition = 'transform 0.15s ease-out'
    })
  }, [])

  const handleMouseLeave = useCallback(() => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = null
    }
    const el = ref.current
    if (!el) return
    el.style.transform = 'translate(0, 0)'
    el.style.transition = 'transform 0.4s ease-out'
  }, [])

  return (
    <a
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      download={download}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </a>
  )
}

const stars = [
  { top: '8%', left: '12%', size: 3 },
  { top: '15%', left: '45%', size: 2 },
  { top: '25%', left: '8%', size: 2.5 },
  { top: '35%', left: '28%', size: 2 },
  { top: '12%', left: '62%', size: 3 },
  { top: '42%', left: '15%', size: 2 },
  { top: '6%', left: '30%', size: 1.5 },
  { top: '20%', left: '55%', size: 2 },
  { top: '48%', left: '5%', size: 2.5 },
  { top: '30%', left: '42%', size: 1.5 },
]

const socialLinks = [
  { href: 'https://github.com', label: 'GitHub', ext: true, fill: true, svg: <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /> },
  { href: 'https://linkedin.com', label: 'LinkedIn', ext: true, fill: true, svg: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /> },
  { href: 'mailto:ornek@email.com', label: 'E-posta', ext: false, fill: false, svg: <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /> },
  { href: '/Furkan_Sahin_CV.pdf', label: 'CV', ext: false, fill: false, download: true, svg: <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" /> },
]

const heroStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 2.6 },
  },
}

const Hero = () => {
  const { text: sahinText, scramble: scrambleSahin } = useTextScramble('Şahin')

  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* ============ KOYU ALAN ============ */}
      <div className="absolute inset-0 clip-hero-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-[#021a0a] via-[#061f10] to-[#0a2818]" />

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[-20%] left-[-10%] w-[120%] h-[40%] bg-gradient-to-r from-transparent via-emerald-500/15 to-transparent blur-[40px]" />
          <div className="absolute top-[10%] left-[-5%] w-[110%] h-[30%] bg-gradient-to-r from-transparent via-green-400/10 to-transparent blur-[50px]" />
          <div className="absolute top-[30%] left-[10%] w-[100%] h-[25%] bg-gradient-to-r from-transparent via-teal-400/8 to-transparent blur-[45px]" />
        </div>

        <div className="absolute top-[8%] left-[5%] w-80 h-80 bg-emerald-600/8 rounded-full blur-[60px]" />
        <div className="absolute top-[25%] left-[30%] w-56 h-56 bg-green-600/6 rounded-full blur-[45px]" />
        <div className="absolute top-[5%] right-[20%] w-40 h-40 bg-emerald-500/5 rounded-full blur-[40px] animate-pulse-glow" />

        {stars.map((s, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/50"
            style={{ top: s.top, left: s.left, width: s.size, height: s.size }}
          />
        ))}
      </div>

      {/* ============ ACIK ALAN ============ */}
      <div className="absolute inset-0 clip-hero-light">
        <div className="absolute inset-0 bg-gradient-to-tl from-[#ecfdf5] via-[#f0fdf4] to-[#f0fdf4]" />
        <div className="absolute bottom-[8%] right-[8%] w-72 h-72 bg-emerald-200/20 rounded-full blur-[50px]" />
        <div className="absolute bottom-[30%] right-[25%] w-48 h-48 bg-green-200/12 rounded-full blur-[40px]" />
        <div className="absolute bottom-[15%] left-[30%] w-56 h-56 bg-teal-200/10 rounded-full blur-[45px]" />
      </div>

      {/* ============ CAPRAZ CIZGI ============ */}
      <div className="absolute inset-0 pointer-events-none z-[2] clip-hero-line">
        <div className="w-full h-full bg-gradient-to-br from-emerald-500/40 via-green-400/50 to-emerald-300/40" />
      </div>

      {/* ============ FLOATING SHAPES ============ */}
      <div className="absolute top-[14%] right-[15%] w-3 h-3 rounded-full bg-white/15 animate-float hidden sm:block z-[3]" style={{ animationDuration: '5s' }} />
      <div className="absolute top-[8%] left-[55%] w-5 h-5 rounded-lg rotate-45 border border-white/8 animate-float hidden sm:block z-[3]" style={{ animationDuration: '7s', animationDelay: '1s' }} />
      <div className="absolute bottom-[20%] right-[12%] w-4 h-4 rounded-full border border-emerald-400/12 animate-float hidden sm:block z-[3]" style={{ animationDuration: '6s', animationDelay: '2s' }} />
      <div className="absolute bottom-[35%] left-[20%] w-6 h-6 rounded-xl rotate-12 border border-green-300/10 animate-float hidden md:block z-[3]" style={{ animationDuration: '8s', animationDelay: '3s' }} />

      {/* ============ ICERIK ============ */}
      <div className="relative z-10 min-h-screen grid grid-cols-1 lg:grid-cols-2">

        {/* SOL UST — Koyu */}
        <div className="flex flex-col justify-center px-5 sm:px-10 lg:px-14 xl:px-20 py-16 sm:py-20 lg:py-24 overflow-hidden lg:-translate-y-40">
          <motion.div variants={heroStagger} initial="hidden" animate="visible">
            <motion.p
              variants={fadeInLeft}
              className="text-sm sm:text-base font-mono text-emerald-400/80 tracking-[0.25em] uppercase flex items-center gap-3 mb-6 sm:mb-8"
            >
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: 40 }}
                transition={{ delay: 3.4, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="h-px bg-gradient-to-r from-emerald-500 to-green-400 inline-block"
              />
              Software Developer
              <span className="typing-cursor" />
            </motion.p>

            <motion.h1 variants={fadeInLeft}>
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[0.9] text-white">
                Furkan
              </span>
              <span
                className="block mt-1 pb-2 text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[1.1] bg-gradient-to-r from-emerald-500 via-green-400 to-emerald-300 bg-clip-text text-transparent cursor-pointer"
                onMouseEnter={scrambleSahin}
              >
                {sahinText}
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInLeft}
              className="text-lg sm:text-xl text-white/35 max-w-md leading-relaxed mt-6 sm:mt-8"
            >
              Modern web teknolojileriyle kullanici odakli,
              <span className="text-white/60 font-medium"> temiz </span>
              ve
              <span className="text-white/60 font-medium"> performansli </span>
              uygulamalar gelistiriyorum.
            </motion.p>

            <motion.div
              variants={fadeInLeft}
              className="flex flex-wrap gap-2.5 mt-7 sm:mt-9"
            >
              {socialLinks.map((link) => (
                <MagneticLink
                  key={link.label}
                  href={link.href}
                  target={link.ext ? '_blank' : undefined}
                  rel={link.ext ? 'noopener noreferrer' : undefined}
                  download={link.download}
                  className="group flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/8 text-sm font-medium text-white/40 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all duration-300"
                >
                  <svg
                    className="w-4 h-4 transition-transform duration-500 group-hover:rotate-[360deg]"
                    fill={link.fill ? 'currentColor' : 'none'}
                    stroke={link.fill ? undefined : 'currentColor'}
                    strokeWidth={link.fill ? undefined : 1.5}
                    viewBox="0 0 24 24"
                  >
                    {link.svg}
                  </svg>
                  {link.label}
                </MagneticLink>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* SAG ALT — Acik */}
        <div className="flex flex-col justify-end px-5 sm:px-10 lg:px-14 xl:px-20 py-16 sm:py-20 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:ml-auto lg:max-w-lg xl:max-w-xl lg:mb-10 lg:mr-4 xl:mr-8"
          >
            <div className="relative">
              <div className="absolute -inset-[1px] rounded-2xl overflow-hidden">
                <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_40%,#10b981_50%,#34d399_55%,transparent_65%)] animate-spin-slow" />
              </div>

              <div className="relative rounded-2xl border border-transparent bg-white/65 backdrop-blur-sm p-6 sm:p-8 overflow-hidden shadow-2xl shadow-emerald-400/8">
                <div className="absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-br from-emerald-400/[0.04] via-transparent to-green-400/[0.04]" />
                <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />

                <h2 className="relative z-10 text-sm font-mono text-emerald-500 mb-4 flex items-center gap-3 tracking-wider uppercase">
                  <span className="w-5 h-px bg-emerald-500" />
                  Hakkımda
                </h2>
                <p className="relative z-10 text-secondary leading-relaxed text-base sm:text-lg mb-3">
                  Full-stack junior geliştirici olarak, birbirine uyumlu teknolojileri
                  bir araya getirerek performanslı ve ölçeklenebilir projeler üretiyorum.
                  Her katmanda doğru aracı doğru yerde kullanmanın fark yarattığına inanıyorum.
                </p>
                <p className="relative z-10 text-secondary leading-relaxed text-base sm:text-lg">
                  Yapay zekayı geliştirme sürecimin etkin bir parçası olarak kullanıyor,
                  sektördeki yeniliklere hızla adapte oluyorum. Temiz kod ve sürdürülebilir
                  mimari, çalışmalarımın temel prensipleri.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  )
}

export default Hero
