# Irawan Yulianto — Portfolio

Portfolio website untuk **Irawan Yulianto**, web developer & digital content producer dengan lebih dari **12 tahun pengalaman** di dunia web.

> Fokus: kepala blance (headless), frontend modern, otomatisasi. Tidak lagi fokus WordPress/Drupal proyek klien.

## Struktur

```
.
├── index.html      # Halaman utama (struktur & markup)
├── styles.css      # Semua gaya (susun, ganti bebas)
├── config.js       # 🔑 SATU-SATUNYA DATA (ganti di sini saja)
├── script.js       # Logika render & form (jangan diubah)
└── README.md       # Panduan deployment & custom
```

## Cara menyesuaikan

**Hanya edit `config.js`:** nama, bio, keterangan peran, skill, proyek, kontak, statistik.

Contoh — ganti proyek:

```js
projects: [
  {
    title: 'Nama Proyek',
    tech: 'React · Node.js',
    desc: 'Deskripsi singkat',
    link: 'https://github.com/...',   // atau domain
    demo: '',
    color: '#7c3aed'
  }
]
```

## Cara deploy di GitHub Pages

1. **Buat repo baru** di GitHub, contoh: `irawan-portfolio`
2. **Upload semua file** di atas (index.html, styles.css, config.js, script.js, README.md)
3. **Settings → Pages**:
   - Branch: `main` / folder `/ (root)` → **Save**
4. Website mu jadi ada di `https://irawanyulianto.github.io/irawan-portfolio/`

### Domain kustom (opsional)

Jika punya domain misal `irawan.io`:

```text
Settings → Pages → Custom domain: irawan.io
```

Lalu catat file `CNAME` ini di root repo:

```
irawan.io
```

> Arahkan `irawan.io` → GitHub Pages URL dari repo settings. Biar semua link di website mu tetap hidup, ganti base URL di `index.html` bila perlu.

## Catatan

- Konsisten dengan `config.js` — jangan mengubah struktur HTML/CSS kecuali keinginan jadi berubah.
- Data proyek di sini adalah **contoh**. Ganti dengan proyek asli kalian.
- Klik **Lewati ke konten** (`skip-link`) untuk aksesibilitas keyboard.

## Dasbor

- Stack: HTML / CSS (custom) / JS vanilla
- Responsive: mobile-first
- Aksesibilitas: skip-link, `aria-*`, kontras cukup
