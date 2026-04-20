import { projects } from '../../data/projects'

export const ProjectCard = ({
  project,
  index,
  theme,
}: {
  project: typeof projects[0]
  index: number
  theme: 'dark' | 'light'
}) => {
  const isDark = theme === 'dark'
  const num = String(index + 1).padStart(2, '0')

  return (
    <div
      className={`group relative w-full rounded-2xl p-6 sm:p-8 flex flex-col transition-all duration-300 ${
        isDark
          ? 'border border-emerald-500/30 bg-emerald-800/60 hover:shadow-xl hover:shadow-emerald-500/15 hover:border-emerald-400/50 hover:bg-emerald-800/75'
          : 'border border-emerald-600/30 bg-emerald-100/85 shadow-sm hover:shadow-xl hover:shadow-emerald-500/10 hover:border-emerald-600/55 hover:bg-emerald-100/95'
      }`}
    >
      {/* Ust satir: etiket + GitHub icon-only */}
      <div className="flex items-center justify-between mb-3">
        <span
          className={`text-[11px] font-mono uppercase tracking-[0.18em] font-medium ${
            isDark ? 'text-emerald-300' : 'text-emerald-600'
          }`}
        >
          Proje · {num}
        </span>
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Kaynak kod"
            className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
              isDark
                ? 'text-emerald-300/70 hover:text-emerald-300 hover:bg-emerald-400/10'
                : 'text-slate-500 hover:text-emerald-600 hover:bg-emerald-500/10'
            }`}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        )}
      </div>

      {/* Ince gradient divider */}
      <div
        className={`h-px mb-5 bg-gradient-to-r ${
          isDark
            ? 'from-emerald-400/50 via-emerald-400/10 to-transparent'
            : 'from-emerald-500/40 via-emerald-500/10 to-transparent'
        }`}
      />

      {/* Baslik */}
      <h3
        className={`text-xl sm:text-2xl font-bold leading-tight mb-3 ${
          isDark ? 'text-white' : 'text-slate-900'
        }`}
      >
        {project.title}
      </h3>

      {/* Aciklama */}
      <p
        className={`text-sm leading-relaxed mb-6 flex-1 ${
          isDark ? 'text-slate-300' : 'text-slate-600'
        }`}
      >
        {project.description}
      </p>

      {/* Outline tech chipler */}
      <div className="flex flex-wrap gap-1.5 mb-6">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className={`text-[11px] font-mono px-2.5 py-1 rounded-full border ${
              isDark
                ? 'border-emerald-400/30 text-emerald-300 bg-emerald-500/5'
                : 'border-emerald-500/30 text-emerald-700 bg-emerald-500/5'
            }`}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Tam genislik primary CTA */}
      {project.liveUrl ? (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`group/btn w-full text-sm px-4 py-2.5 rounded-xl font-medium transition-all flex items-center justify-center gap-2 border ${
            isDark
              ? 'bg-emerald-500/15 text-emerald-300 border-emerald-400/40 hover:bg-emerald-500/25 hover:border-emerald-400/60'
              : 'bg-emerald-500/10 text-emerald-700 border-emerald-500/30 hover:bg-emerald-500/20 hover:border-emerald-500/50'
          }`}
        >
          Canli Demo
          <svg
            className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </a>
      ) : (
        <div
          className={`w-full text-xs text-center py-2.5 font-mono uppercase tracking-wider ${
            isDark ? 'text-slate-500' : 'text-slate-400'
          }`}
        >
          Yakinda
        </div>
      )}
    </div>
  )
}
