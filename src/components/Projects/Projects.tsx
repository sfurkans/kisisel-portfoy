import { motion } from 'motion/react'
import { projects } from '../../data/projects'
import { fadeInUp, staggerContainer } from '../../utils/animations'
import { ProjectCard } from './ProjectCard'

const darkStars = [
  { top: '8%', left: '10%', size: 2 },
  { top: '15%', left: '35%', size: 1.5 },
  { top: '5%', left: '55%', size: 2 },
  { top: '25%', left: '15%', size: 1.5 },
  { top: '35%', left: '8%', size: 2 },
  { top: '12%', left: '68%', size: 1.5 },
]

const Projects = () => {
  const firstProject = projects[0]
  const restProjects = projects.slice(1)

  return (
    <section id="projects" className="relative min-h-screen overflow-hidden">

      {/* ============ KOYU ALAN (sol-ust ucgen) ============ */}
      <div className="absolute inset-0" style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#021a0a] via-[#061f10] to-[#0a2818]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: 'radial-gradient(circle, #10b981 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        <div className="absolute top-[10%] left-[8%] w-72 h-72 bg-emerald-600/15 rounded-full blur-[30px]" />

        {darkStars.map((s, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/50"
            style={{ top: s.top, left: s.left, width: s.size, height: s.size }}
          />
        ))}
      </div>

      {/* ============ ACIK ALAN (sag-alt ucgen) ============ */}
      <div className="absolute inset-0" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}>
        <div className="absolute inset-0 bg-gradient-to-tl from-[#ecfdf5] via-[#f0fdf4] to-[#f0fdf4]" />
        <div className="absolute bottom-[10%] right-[8%] w-72 h-72 bg-emerald-200/35 rounded-full blur-[30px]" />
      </div>

      {/* ============ CAPRAZ CIZGI ============ */}
      <div
        className="absolute inset-0 pointer-events-none z-[2]"
        style={{ clipPath: 'polygon(0 calc(100% - 1.5px), 100% -1.5px, calc(100% + 3px) 1.5px, 3px calc(100% + 1.5px))' }}
      >
        <div className="w-full h-full bg-gradient-to-br from-emerald-500/40 via-green-400/50 to-emerald-300/40" />
      </div>

      {/* ============ CONTENT ============ */}
      <div className="relative z-10 min-h-screen grid grid-cols-1 lg:grid-cols-2">

        {/* SOL UST - KOYU: Baslik + ilk proje */}
        <div className="flex flex-col justify-start px-5 sm:px-10 lg:px-14 xl:px-20 py-16 sm:py-20 lg:py-24 lg:col-start-1 lg:row-start-1">
          <div className="w-full lg:max-w-md xl:max-w-lg">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="mb-8 sm:mb-10"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3"
              >
                <span className="bg-gradient-to-r from-emerald-500 via-green-400 to-emerald-300 bg-clip-text text-transparent">
                  Çalışmalarım
                </span>
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-white/40 mt-4 text-sm sm:text-base font-light"
              >
                Gelistirdigim projelerin kucuk bir seckisi
              </motion.p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
            >
              <ProjectCard project={firstProject} index={0} theme="dark" />
            </motion.div>
          </div>
        </div>

        {/* SAG ALT - ACIK (mobil/tablet icin) */}
        <div className="flex flex-col justify-end px-5 sm:px-10 pb-16 sm:pb-20 lg:col-start-2 lg:row-start-1 lg:hidden">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="w-full flex flex-col gap-6 sm:gap-8"
          >
            <motion.div variants={fadeInUp}>
              <ProjectCard project={restProjects[0]} index={1} theme="light" />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <ProjectCard project={restProjects[1]} index={2} theme="light" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* DESKTOP (lg+) - ACIK alanda absolute kartlar */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="hidden lg:block absolute inset-0 z-10 pointer-events-none"
      >
        <motion.div
          variants={fadeInUp}
          className="absolute top-[28%] right-[2%] w-[22%] xl:w-[19%] pointer-events-auto"
        >
          <ProjectCard project={restProjects[0]} index={1} theme="light" />
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className="absolute top-[58%] left-[47%] w-[26%] xl:w-[24%] pointer-events-auto"
        >
          <ProjectCard project={restProjects[1]} index={2} theme="light" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Projects
