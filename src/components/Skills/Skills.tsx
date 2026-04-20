import { motion } from 'motion/react'
import { skills } from '../../data/skills'
import { fadeInUp, staggerContainer } from '../../utils/animations'

const sectionStars = [
  { top: '5%', left: '8%', size: 2 },
  { top: '12%', left: '88%', size: 1.5 },
  { top: '35%', left: '3%', size: 2 },
  { top: '55%', left: '93%', size: 1.5 },
  { top: '78%', left: '12%', size: 2 },
  { top: '25%', left: '96%', size: 1.5 },
  { top: '48%', left: '5%', size: 2 },
  { top: '88%', left: '82%', size: 1.5 },
]

const Skills = () => {
  return (
    <section id="skills" className="relative min-h-screen overflow-hidden">

      {/* ============ KOYU ALAN (sol-alt ucgen) ============ */}
      <div className="absolute inset-0" style={{ clipPath: 'polygon(0 0, 100% 100%, 0 100%)' }}>
        <div className="absolute inset-0 bg-gradient-to-tr from-[#021a0a] via-[#061f10] to-[#0a2818]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: 'radial-gradient(circle, #10b981 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        <div className="absolute bottom-[12%] left-[10%] w-72 h-72 bg-emerald-600/15 rounded-full blur-[30px]" />

        {sectionStars.map((s, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/50"
            style={{ top: s.top, left: s.left, width: s.size, height: s.size }}
          />
        ))}
      </div>

      {/* ============ ACIK ALAN (sag-ust ucgen) ============ */}
      <div className="absolute inset-0" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}>
        <div className="absolute inset-0 bg-gradient-to-bl from-[#ecfdf5] via-[#f0fdf4] to-[#f0fdf4]" />
        <div className="absolute top-[10%] right-[8%] w-72 h-72 bg-emerald-200/35 rounded-full blur-[30px]" />
      </div>

      {/* ============ TERS CAPRAZ CIZGI ============ */}
      <div
        className="absolute inset-0 pointer-events-none z-[2]"
        style={{ clipPath: 'polygon(0 -1.5px, 100% calc(100% - 1.5px), calc(100% - 3px) calc(100% + 1.5px), -3px 1.5px)' }}
      >
        <div className="w-full h-full bg-gradient-to-br from-emerald-500/40 via-green-400/50 to-emerald-300/40" />
      </div>

      {/* ============ CONTENT ============ */}
      <div className="relative z-10 min-h-screen grid grid-cols-1 lg:grid-cols-2">

        {/* SAG-UST - ACIK: Baslik + Frontend */}
        <div className="flex flex-col justify-start px-5 sm:px-10 lg:px-14 xl:px-20 py-16 sm:py-20 lg:py-24 lg:col-start-2 lg:row-start-1">
          <div className="lg:ml-auto lg:max-w-md xl:max-w-lg w-full">

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="mb-10 sm:mb-12 text-center lg:text-right"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mt-3"
              >
                Kullandığım{' '}
                <span className="bg-gradient-to-r from-emerald-500 via-green-400 to-emerald-300 bg-clip-text text-transparent">
                  teknolojiler
                </span>
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-secondary mt-4 text-sm sm:text-base font-light"
              >
                Projelerimde kullandigim modern teknolojiler ve araclar
              </motion.p>
            </motion.div>

            <div>
              <motion.h3
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-xs font-mono text-emerald-600/80 mb-4 flex items-center gap-3 uppercase tracking-widest"
              >
                <span className="w-4 h-px bg-gradient-to-r from-emerald-500/60 to-green-500/60" />
                Frontend
                <span className="flex-1 h-px bg-gradient-to-r from-emerald-500/30 to-transparent" />
              </motion.h3>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3"
              >
                {skills.filter((s) => s.category === 'Frontend').map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={fadeInUp}
                    className="group relative rounded-2xl border border-emerald-600/25 bg-emerald-600/10 overflow-hidden flex items-center gap-3 p-3.5 sm:p-4 transition-all duration-300 hover:border-emerald-600/50 hover:bg-emerald-600/15 hover:-translate-y-0.5"
                  >
                    <span className="relative z-10 text-xl sm:text-2xl transition-transform duration-300 group-hover:scale-110">{skill.icon}</span>
                    <span className="relative z-10 text-sm sm:text-base font-medium text-emerald-900 truncate">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* SOL-ALT - KOYU: Backend + Araclar */}
        <div className="flex flex-col justify-end px-5 sm:px-10 lg:px-14 xl:px-20 py-16 sm:py-20 lg:py-24 lg:col-start-1 lg:row-start-1">
          <div className="lg:max-w-md xl:max-w-lg w-full space-y-8 sm:space-y-10">
            {(['Backend', 'Araçlar'] as const).map((category) => {
              const catSkills = skills.filter((s) => s.category === category)
              return (
                <div key={category}>
                  <motion.h3
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-xs font-mono text-emerald-400/60 mb-4 flex items-center gap-3 uppercase tracking-widest"
                  >
                    <span className="w-4 h-px bg-gradient-to-r from-emerald-500/40 to-green-400/40" />
                    {category}
                    <span className="flex-1 h-px bg-gradient-to-r from-emerald-500/20 to-transparent" />
                  </motion.h3>

                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3"
                  >
                    {catSkills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        variants={fadeInUp}
                        className="group relative rounded-2xl border border-white/15 bg-white/[0.12] overflow-hidden flex items-center gap-3 p-3.5 sm:p-4 transition-all duration-300 hover:border-white/30 hover:bg-white/20 hover:-translate-y-0.5"
                      >
                        <span className="relative z-10 text-xl sm:text-2xl transition-transform duration-300 group-hover:scale-110">{skill.icon}</span>
                        <span className="relative z-10 text-sm sm:text-base font-medium text-white/85 truncate">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
