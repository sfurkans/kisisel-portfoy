import type { Project } from '../types'

export const projects: Project[] = [
  {
    title: 'Algoritma & Veri Yapilari',
    description:
      'Temel algoritma ve veri yapilarini interaktif gorsellestirmelerle anlatan egitim amacli web uygulamasi. Siralama, arama ve temel veri yapilari konularini ornekleriyle sunar.',
    techStack: ['React', 'Vite', 'JavaScript', 'CSS'],
    githubUrl: 'https://github.com/sfurkans/algo-veri',
    liveUrl: 'https://algoritma-veri.netlify.app',
  },
  {
    title: 'Finans Tracker',
    description:
      'Gelir gider takibi, kategori yonetimi ve grafik analizleriyle kisisel finans asistani. JWT kimlik dogrulama ve PostgreSQL ile guvenli full-stack uygulama.',
    techStack: ['React', 'Express', 'PostgreSQL', 'JWT'],
    githubUrl: 'https://github.com/sfurkans/finance-tracker',
  },
  {
    title: 'Oto Elektrik Websitesi',
    description:
      'Özer Oto Elektrik & Aksesuar için geliştirdiğim kurumsal tanıtım sitesi. Hizmet kategorileri, iletişim formu ve çok sayfalı routing yapısı içerir.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'React Router', 'Framer Motion'],
    githubUrl: 'https://github.com/sfurkans/ozeroto',
    liveUrl: 'https://ozeroto.vercel.app',
  },
  {
    title: 'Otel Yönetim Sistemi',
    description:
      'ASP.NET Core MVC ile geliştirdiğim otel yönetim sistemi. Rezervasyon, oda durumu ve müşteri kayıtları için MVC mimarisi ve C# tabanlı backend içerir.',
    techStack: ['ASP.NET Core', 'C#', 'MVC', 'HTML/CSS'],
    githubUrl: 'https://github.com/sfurkans/otelyonetim1',
  },
  {
    title: 'CV Builder',
    description: 'Cok yakinda hazir olacak.',
    techStack: [],
  },
  {
    title: 'E-Ticaret Website',
    description:
      'Urun listeleme, kategori filtreleme ve sepet yonetimi sunan modern e-ticaret arayuzu. Responsive tasarim ve functional components tabanli yapi.',
    techStack: ['React', 'React Router', 'Axios', 'CSS'],
    githubUrl: 'https://github.com/sfurkans/e-ticaret',
  },
  {
    title: 'Restoran Otomasyonu',
    description:
      'Restoran icin siparis alma, masa yonetimi ve adisyon takibi saglayan C# tabanli desktop otomasyon uygulamasi.',
    techStack: ['C#', '.NET', 'WinForms', 'SQL Server'],
    githubUrl: 'https://github.com/sfurkans/restoran-otomasyonu',
  },
]
