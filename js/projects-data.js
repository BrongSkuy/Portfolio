/**
 * Data Terstruktur Proyek, Sertifikasi & Pengalaman
 * Muhammad Faiz Rabbani
 */

const PORTFOLIO_DATA = {
  projects: [
    {
      id: "danatowa",
      category: "ai",
      title: "DanaToWA - AI WhatsApp Automation",
      subtitle: "Bot Otomatisasi Transaksi & Notifikasi Pembayaran",
      summary: "Aplikasi otomatisasi bot WhatsApp yang terintegrasi dengan deteksi notifikasi pembayaran DANA secara real-time untuk mempercepat operasional UMKM.",
      image: "assets/img/projects/danatowa_screen.png",
      tags: ["Android", "Kotlin", "Webhook", "WhatsApp API", "Stitch UI"],
      highlights: [
        "Mendeteksi mutasi dan notifikasi pembayaran e-wallet DANA secara otomatis tanpa intervensi manual.",
        "Mengirim struk dan konfirmasi pesanan ke nomor pembeli WhatsApp secara instan (real-time webhook).",
        "Didesain dengan antarmuka modern elegan berbasis Stitch Kinetic Forge untuk kemudahan konfigurasi pedagang."
      ],
      architecture: "Notification Listener Service (Android) -> Webhook Relay Dispatcher -> WhatsApp Automation Engine -> Struk Digital Generator."
    },
    {
      id: "smk-absensi",
      category: "web",
      title: "Sistem Absensi & Penilaian Siswa",
      subtitle: "SMK Penerbangan Dirghantara",
      summary: "Sistem informasi absensi online, integrasi data Virtual Account BNI, rekapitulasi rapor PSKK, dan algoritma penentuan siswa berprestasi.",
      image: "assets/img/projects/smk_login.png",
      tags: ["Antigravity IDE", "Vibe Coding", "Web System", "Logika Data Excel", "VA BNI"],
      highlights: [
        "Membangun dan mengimplementasikan sistem absensi digital dan evaluasi siswa berbasis web.",
        "Mengembangkan algoritma ranking penentuan siswa terbaik berdasarkan bobot presensi dan nilai akademik.",
        "Mengotomasi pengolahan data tagihan VA BNI dan rekapitulasi nilai rapor PSKK menggunakan kombinasi logika data dan AI-assisted coding."
      ],
      architecture: "Antigravity IDE Vibe Coding -> Web Application Interface -> Database Absensi & Penilaian -> BNI Virtual Account Data Bridge."
    },
    {
      id: "dwitunggal-cv",
      category: "web",
      title: "LPK CV Builder & Career Hub",
      subtitle: "PT Dwi Tunggal Jaya Abadi",
      summary: "Aplikasi web modern berbasis React 19 & Neon Serverless PostgreSQL untuk pembuatan CV dwibahasa (Indonesia & Jepang) peserta pemagangan.",
      image: "assets/img/projects/dwitunggal_logo.png",
      tags: ["React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "Neon PostgreSQL"],
      highlights: [
        "Aplikasi enterprise production-ready dengan arsitektur modern TypeScript & React 19.",
        "Engine export dokumen otomatis multi-format: DOCX standar Jepang, ExcelJS, dan PDF.",
        "Database cloud serverless berkecepatan tinggi menggunakan Neon Database (PostgreSQL) terintegrasi Vercel."
      ],
      architecture: "React 19 + Vite 6 -> Tailwind CSS v4 + Framer Motion -> Neon Serverless PostgreSQL -> Docx/Excel Templater Engine."
    },
    {
      id: "kopi-kenangan",
      category: "ecommerce",
      title: "Kedai Kopi Kenangan Senja",
      subtitle: "E-Commerce & Smart Order System",
      summary: "Platform pemesanan online coffee shop dengan keranjang belanja dinamis berbasis Alpine.js dan direct WhatsApp order format.",
      image: "assets/img/projects/kopi_kenangan.jpg",
      tags: ["Alpine.js", "Vanilla CSS", "JavaScript", "WhatsApp API", "Responsive UI"],
      highlights: [
        "State management keranjang belanja interaktif yang cepat tanpa framework berat.",
        "Modal dialog rincian produk, validasi form checkout otomatis, dan penghitungan harga total dalam Rupiah.",
        "Pesan pesanan diformat otomatis dan langsung dikirim ke chat WhatsApp kasir/barista."
      ],
      architecture: "HTML5 Semantic -> Custom CSS3 -> Alpine.js Store Management -> WhatsApp Order Gateway."
    },
    {
      id: "faya-wedding",
      category: "web",
      title: "Faya Wedding - Digital Invitation",
      subtitle: "Platform Undangan Digital Responsif",
      summary: "Website undangan pernikahan interaktif modern dengan hitung mundur waktu nyata (countdown timer), pemutar musik, dan buku tamu online.",
      image: "assets/img/projects/wedding_bg.webp",
      tags: ["HTML5", "CSS3", "JavaScript", "SimplyCountdown", "Audio API"],
      highlights: [
        "Desain responsif estetik dengan live countdown ceremony waktu acara.",
        "Fitur autoplay background music berizin pengguna dan integrasi peta lokasi navigasi acara.",
        "Form konfirmasi kehadiran (RSVP) serta penyampaian doa/ucapan selamat dari para tamu."
      ],
      architecture: "Mobile-First Semantic Layout -> CSS Keyframe Animations -> Event Countdown Engine -> RSVP Data Handler."
    }
  ],

  certificates: [
    {
      id: "cert-1",
      title: "The Implementation of Artificial Intelligence in System Engineering and Technology in Industrial Revolution 5.0",
      issuer: "Universitas Pamulang - Seminar Nasional TI",
      year: "2024",
      pdf: "assets/docs/certs/SERTIFIKAT_1_SEMINAR TEKNIK INFORMATIKA The Implementation of Artificial Intelligence in System Engineering and Technology in Industrial Revolution 5.0.pdf"
    },
    {
      id: "cert-5",
      title: "Artificial Intelligence as Smart Solutions for Indonesia's Future",
      issuer: "Universitas Pamulang - Seminar Nasional AI",
      year: "2024",
      pdf: "assets/docs/certs/SERTIFIKAT_5_SEMINAR ARTIFICIAL INTELLIGENCE AS SMART SOLUTIONS FOR INDONESIA'S FUTURE.pdf"
    },
    {
      id: "cert-6",
      title: "Masa Depan Web Development - Membangun Generasi Programmer Yang Andal, Kreatif, dan Berdaya Saing",
      issuer: "Universitas Pamulang - Seminar Web Development",
      year: "2024",
      pdf: "assets/docs/certs/SERTIFIKAT_6_SEMINAR NASIONAL TEKNIK INFORMATIKA  Masa Depan Web Development - Membangun Generasi Programmer Yang Andal, Kreatif, dan Berdaya Saing.pdf"
    },
    {
      id: "cert-7",
      title: "Beyond Technical Skills: Leadership, Creativity, and Digital Personal Branding in the Era of AI",
      issuer: "Universitas Pamulang",
      year: "2024",
      pdf: "assets/docs/certs/SERTIFIKAT_7_SEMINAR BEYOND TECHNICAL SKILLS LEADERSHIP, CREATIVITY, AND DIGITAL PERSONAL BRANDING IN THE ERA OF ARTIFICIAL INTELLIGENCE.pdf"
    },
    {
      id: "cert-8",
      title: "Professional Discipline for Ethical Artificial Intelligence and Critical Thinking in Informatics",
      issuer: "Universitas Pamulang",
      year: "2024",
      pdf: "assets/docs/certs/SERTIFIKAT_8_PROFESSIONAL DISCIPLINE FOR ETHICAL ARTIFICIAL INTELLIGENCE AND CRITICAL THINKING IN INFORMATICS.pdf"
    },
    {
      id: "cert-toefl",
      title: "Official English Proficiency Certification (TOEFL)",
      issuer: "Lembaga Bahasa Universitas Pamulang",
      year: "2024",
      pdf: "assets/docs/certs/SERTIFIKAT_TOEFL_260810080787_MUHAMMAD FAIZ RABBANI.PDF"
    }
  ]
};
