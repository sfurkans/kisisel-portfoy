import { motion } from 'motion/react'
import { projects } from '../../data/projects'
import { fadeInUp, staggerContainer } from '../../utils/animations'
import { ProjectCard } from './ProjectCard'

const darkStars = [
  { top: '55%', left: '6%', size: 2 },
  { top: '72%', left: '18%', size: 1.5 },
  { top: '88%', left: '32%', size: 2 },
  { top: '65%', left: '4%', size: 1.5 },
  { top: '82%', left: '12%', size: 2 },
  { top: '92%', left: '45%', size: 1.5 },
  { top: '78%', left: '55%', size: 2 },
]

const ProjectsExtra = () => {
  const extraProjects = projects.slice(3, 7)

  return (
    <section id="projects-extra" className="relative min-h-screen overflow-hidden">

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

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute bottom-[-10%] left-[-10%] w-[80%] h-[40%] bg-gradient-to-r from-transparent via-emerald-500/12 to-transparent blur-[50px]" />
          <div className="absolute bottom-[15%] left-[-5%] w-[60%] h-[30%] bg-gradient-to-r from-transparent via-green-400/10 to-transparent blur-[40px]" />
          <div className="absolute bottom-[35%] left-[5%] w-[45%] h-[25%] bg-gradient-to-r from-transparent via-teal-400/8 to-transparent blur-[45px]" />
        </div>

        <div className="absolute bottom-[12%] left-[10%] w-72 h-72 bg-emerald-600/10 rounded-full blur-[60px]" />
        <div className="absolute bottom-[30%] left-[25%] w-56 h-56 bg-green-600/6 rounded-full blur-[45px]" />

        {darkStars.map((s, i) => (
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
        <div className="absolute top-[10%] right-[8%] w-72 h-72 bg-pink-200/20 rounded-full blur-[50px]" />
        <div className="absolute top-[30%] right-[25%] w-48 h-48 bg-indigo-200/15 rounded-full blur-[40px]" />
        <div className="absolute top-[8%] right-[40%] w-56 h-56 bg-emerald-200/12 rounded-full blur-[45px]" />
      </div>

      {/* ============ TERS CAPRAZ CIZGI ============ */}
      <div
        className="absolute inset-0 pointer-events-none z-[2]"
        style={{ clipPath: 'polygon(0 -1.5px, 100% calc(100% - 1.5px), calc(100% - 3px) calc(100% + 1.5px), -3px 1.5px)' }}
      >
        <div className="w-full h-full bg-gradient-to-br from-emerald-500/40 via-green-400/50 to-emerald-300/40" />
      </div>

      {/* MOBIL / TABLET */}
      <div className="lg:hidden relative z-10 flex flex-col gap-6 sm:gap-8 px-5 sm:px-10 py-16 sm:py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="flex flex-col gap-6 sm:gap-8"
        >
          {extraProjects.map((project, i) => (
            <motion.div key={i} variants={fadeInUp}>
              <ProjectCard
                project={project}
                index={i + 3}
                theme={i < 2 ? 'light' : 'dark'}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* DESKTOP (lg+): 4 kart absolute */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="hidden lg:block absolute inset-0 z-10 pointer-events-none"
      >
        <motion.div
          variants={fadeInUp}
          className="absolute top-[25%] right-[3%] w-[22%] xl:w-[20%] pointer-events-auto"
        >
          <ProjectCard project={extraProjects[0]} index={3} theme="light" />
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className="absolute top-[6%] right-[26%] w-[22%] xl:w-[20%] pointer-events-auto"
        >
          <ProjectCard project={extraProjects[1]} index={4} theme="light" />
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className="absolute top-[32%] left-[3%] w-[25%] xl:w-[23%] pointer-events-auto"
        >
          <ProjectCard project={extraProjects[2]} index={5} theme="dark" />
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className="absolute top-[58%] left-[30%] w-[23%] xl:w-[21%] pointer-events-auto"
        >
          <ProjectCard project={extraProjects[3]} index={6} theme="dark" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default ProjectsExtra
