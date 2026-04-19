export interface Skill {
  name: string
  icon: string
  category: string
}

export interface Project {
  title: string
  description: string
  techStack: string[]
  githubUrl?: string
  liveUrl?: string
}
