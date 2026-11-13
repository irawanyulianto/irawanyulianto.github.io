/* ============================================================
   DATA PORTOFOLIO — sesuaikan di sini
   Semua teks proyek, skill, pengalaman, kontak ada di sini.
   Ganti isinya tanpa perlu ngeedit HTML/CSS.          */
const PORTFOLIO = {
  siteTitle: 'Irawan Yulianto',
  siteTagline: 'Web Developer & Digital Content Producer',

  about: {
    intro: 'Lama berkecimpung di WordPress dan Drupal sebagai developer frontend, admin, dan webmaster. Kini saya merevolusi—berfokus ke arsitektur headless, frontend modern dengan React/Vite/Tailwind, dan otomatisasi berbasis Node.js.',
    roles: [
      'Digital Content Producer — universitas di Australia (sekarang)',
      'Admin & Webmaster — Seafood Industry Council',
      'Admin & Webmaster — Organisasi Kesehatan',
      'Web Developer & Content Producer — 12+ tahun'
    ],
    stats: [
      { value: '12+', label: 'tahun di dunia web' },
      { value: '0', label: 'proyek klien fokus WordPress/Drupal (sekarang headless)' }
    ]
  },

  skills: {
    frontend: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'React', 'Vite', 'Tailwind CSS', 'Figma', 'Next.js'],
    backend: ['Node.js', 'Express', 'REST API', 'node:sqlite', 'Python', 'PHP'],
    cms: ['WordPress', 'Drupal', 'Headless CMS', 'Content Modeling', 'GraphQL', 'Sanity'],
    tools: ['Git & GitHub', 'Nginx', 'Linux', 'systemd', 'Telegram Bot', 'ngrok', 'AI & Automation', 'GitHub Pages']
  },

  experience: [
    {
      role: 'Digital Content Producer',
      org: 'Universitas — Australia',
      date: 'sekarang',
      desc: 'Mengelola konten digital, multimedia, dan pengalaman pengguna di lingkungan akademik dengan fokus pada konsistensi, aksesibilitas, dan eksekusi.'
    },
    {
      role: 'Admin & Webmaster',
      org: 'Seafood Industry Council',
      date: 'belum jelas',
      desc: 'Mengelola situs perusahaan, konten media, dan kolaborasi dengan tim bisnis.'
    },
    {
      role: 'Admin & Webmaster',
      org: 'Organisasi Kesehatan',
      date: 'belum jelas',
      desc: 'Mengelola situs kesehatan, keamanan informasi, dan pelaporan digital.'
    },
    {
      role: 'Web Developer & Content Producer',
      org: 'Berkepanjangan (12+ tahun)',
      date: 'belum jelas',
      desc: 'Beragam proyek: developer frontend WordPress/Drupal, admin webmaster, hingga arsitektur headless.'
    }
  ],

  projects: [
    {
      title: 'Kantor AI',
      tech: 'Node.js · Express · SQLite · Telegram Bot · Tailwind',
      desc: 'Otomatisasi kantor berbasis Node.js, Express, SQLite, dan bot Telegram. Dashboard berbasis Tailwind.',
      link: 'https://github.com/irawanyulianto',
      demo: '',
      color: '#7c3aed'
    },
    {
      title: 'Headless Website',
      tech: 'Vite · React · Tailwind · Headless CMS · REST API',
      desc: 'Situs statis berbasis headless CMS dengan Vite + React + Tailwind, terhubung ke API.',
      link: 'https://github.com/irawanyulianto',
      demo: '',
      color: '#0e7490'
    },
    {
      title: 'Heart Pokemon',
      tech: 'HTML · CSS · JavaScript · GitHub Pages',
      desc: 'Proyek frontend sederhana yang saya serverkan melalui GitHub Pages.',
      link: 'https://github.com/irawanyulianto/heart-pokemon',
      demo: '',
      color: '#7c3aed'
    }
  ],

  contact: {
    email: 'me@irawan.io',
    github: 'https://github.com/irawanyulianto',
    instagram: 'https://instagram.com/irawanyulianto',
    web: 'https://irawan.io'
  }
};
