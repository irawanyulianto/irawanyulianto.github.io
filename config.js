/* ============================================================
   DATA PORTOFOLIO — sumber: repo irawan (Vercel)
   Semua teks proyek, skill, pengalaman, kontak ada di sini.   */
const PORTFOLIO = {
  siteTitle: 'Irawan Yulianto',
  siteTagline: 'Web Developer & Web Solutions',

  about: {
    intro: 'Web Developer dengan pengalaman lebih dari 12 tahun membangun website profesional, e-commerce, dan solusi digital. Spesialisasi di custom development, performance optimization, dan SEO.',
    roles: [
      'Web Developer & Web Solutions — Freelance & Agency (2014–sekarang)',
      'Custom Development · E-Commerce · Performance Optimization',
      'Startup, UMKM, hingga enterprise'
    ],
    stats: [
      { value: '12+', label: 'Tahun Pengalaman', icon: 'bi bi-laptop' },
      { value: '50+', label: 'Proyek Selesai', icon: 'bi bi-rocket-takeoff' },
      { value: '30+', label: 'Klien Puas', icon: 'bi bi-people' },
      { value: '100%', label: 'Dedikasi Penuh', icon: 'bi bi-star' }
    ]
  },

  skills: {
    frontend: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'Vue 3', 'Vite'],
    backend: ['Node.js', 'PHP', 'MySQL', 'REST API', 'Express', 'Supabase'],
    cms: ['WordPress', 'WooCommerce', 'Headless CMS', 'Content Modeling'],
    tools: ['Git & GitHub', 'SEO Optimization', 'Performance Tuning', 'Website Security', 'Vercel', 'GitHub Pages']
  },

  experience: [
    {
      role: 'Web Developer & Web Solutions',
      org: 'Freelance & Agency Work',
      date: '2014 - Sekarang',
      desc: 'Mengembangkan dan maintain ratusan website untuk klien lokal dan internasional. Menangani proyek dari berbagai industri dengan kompleksitas tinggi, mulai dari startup, UMKM, hingga perusahaan enterprise. Spesialisasi dalam custom development, e-commerce, dan performance optimization.'
    }
  ],

  projects: [
    {
      title: 'Heart Labs',
      tech: 'Vue 3 · Vite · JavaScript · CSS',
      desc: 'Koleksi mini apps yang dibangun menggunakan Vue 3 dan Vite. Berbagai aplikasi kecil interaktif dengan performa tinggi dan antarmuka modern.',
      link: 'https://heartlabs.vercel.app/',
      icon: 'bi-heart',
      color: '#e11d48'
    },
    {
      title: 'Heart Games',
      tech: 'React · Next.js · TypeScript · Tailwind CSS · Quiz',
      desc: 'Platform permainan web yang dibangun dengan React dan Next.js. Menyediakan berbagai permainan klasik seperti Dam-daman, Flappy Bird, Space Shooter, dan quiz interaktif.',
      link: 'https://hatikehati.vercel.app/',
      icon: 'bi-joystick',
      color: '#7c3aed'
    },
    {
      title: 'Heart Invite',
      tech: 'Next.js · TypeScript · Tailwind CSS · Supabase · shadcn/ui',
      desc: 'Platform SaaS untuk membuat undangan digital modern yang sederhana, elegan, dan mudah digunakan. Dilengkapi dashboard pengelolaan undangan, autentikasi Google login, dan halaman publik berbasis slug.',
      link: 'https://heartinvite.vercel.app/',
      icon: 'bi-envelope-paper-heart',
      color: '#0e7490'
    },
    {
      title: 'Heart Pokémon',
      tech: 'Vue 3 · Vite · TypeScript · Tailwind CSS · Pinia · Vue Router',
      desc: 'Pokémon Explorer berbasis Vue 3 dan Vite yang menampilkan Pokédex lengkap 1025 species dengan pencarian, filter tipe, halaman detail statistik, evolusi, dan kartu TCG. Dibangun sebagai Progressive Web App dengan dukungan offline.',
      link: 'https://heartpokemon.pages.dev/',
      icon: 'bi-lightning-charge',
      color: '#d97706'
    }
  ],

  contact: {
    email: 'irawanyulianto77@gmail.com',
    whatsapp: '6287736224126',
    location: 'Sukoharjo, Jawa Tengah',
    github: 'https://github.com/irawanyulianto',
    instagram: 'https://instagram.com/irawanyulianto',
    web: 'https://irawan.io'
  }
};
