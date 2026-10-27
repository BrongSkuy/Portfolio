/**
 * Data Terstruktur Proyek, Sertifikasi & Pengalaman
 * Muhammad Faiz Rabbani
 */

const PORTFOLIO_DATA = {
  projects: [
    {
      id: "toko-cendera-mata",
      category: ["ecommerce", "web"],
      title: "Sistem Kasir POS & Nota Pembelian Digital",
      subtitle: "TOKO CENDERA MATA INDAH (Studi Kasus UNPAM)",
      summary: "Aplikasi kasir digital (POS) & generator faktur nota pembelian interaktif berbasis PHP Native dan JavaScript DOM dengan kalkulasi estimasi real-time, diskon berjenjang member, faktur PPN 11%, dan layout siap cetak (print-ready).",
      image: "assets/img/projects/toko_cendera_mata_indah.png",
      liveUrl: "http://127.0.0.1:8000/Muhammad_faiz_Rabbani.php",
      liveUrlLabel: "Buka Sistem POS",
      tags: ["PHP Native", "JavaScript DOM", "Single-File Architecture", "Live Calculation", "Tiered Discount", "PPN 11%", "Print Media CSS"],
      highlights: [
        "Membangun sistem kasir POS dan penerbitan nota transaksi resmi dengan arsitektur single-file PHP mandiri tanpa dependensi framework eksternal.",
        "Mengembangkan fitur Live Payment Summary yang secara real-time menghitung subtotal, diskon berjenjang member (Non-Member 0%, Silver 2.5%, Gold 5%, Platinum 7.5%, Member Standar 10%), DPP, dan PPN 11%.",
        "Menyediakan validasi formulir cerdas, penomoran nomor nota transaksi otomatis (readonly), serta styling cetak dokumen (@media print) yang bersih dan presisi."
      ],
      architecture: "Single-File Native PHP Architecture -> Real-Time DOM Event Listener -> Dynamic Item & Quantity Aggregator -> Tiered Discount & Tax Engine -> Print-Ready CSS Layout."
    },
    {
      id: "dwitunggal-portal",
      category: "web",
      title: "Corporate Web Portal & P3MI System",
      subtitle: "PT Dwi Tunggal Jaya Abadi & LPK Delta Abadi",
      summary: "Website resmi multi-halaman berstandar korporat untuk perusahaan penempatan pekerja migran resmi SIP3MI Kemenaker RI & LPK Luar Negeri dengan optimasi SEO Schema.org dan integrasi WhatsApp.",
      image: "assets/img/projects/dwitunggal_portal.webp",
      liveUrl: "https://dwideltainternational.com",
      tags: ["HTML5 Semantic", "Vanilla CSS3", "SEO Schema.org", "WhatsApp Gateway", "Multi-Page Portal", "Responsive Design"],
      highlights: [
        "Merancang dan mengembangkan website profil resmi perusahaan penempatan tenaga kerja luar negeri (Jepang, Taiwan, Turki, Polandia, dll.) dengan 10+ sub-halaman komprehensif.",
        "Mengimplementasikan structured data JSON-LD (Schema.org) untuk memaksimalkan ranking SEO dan keterlihatan di Google Search.",
        "Mengintegrasikan tombol floating action cepat yang terhubung langsung ke WhatsApp tim pendaftaran & konsultasi calon kandidat PMI."
      ],
      architecture: "HTML5 Semantic Architecture -> Custom Optimized CSS3 -> Schema.org JSON-LD Structured Data -> WhatsApp Direct API Relay."
    },
    {
      id: "danatowa",
      category: "ai",
      title: "DanaToWA - AI WhatsApp Automation",
      subtitle: "Bot Otomatisasi Transaksi & Notifikasi Pembayaran",
      summary: "Aplikasi otomatisasi bot WhatsApp yang terintegrasi dengan deteksi notifikasi pembayaran DANA secara real-time untuk mempercepat operasional UMKM.",
      image: "assets/img/projects/danatowa_screen.png",
      tags: ["Android", "Kotlin", "Webhook", "WhatsApp API", "Stitch UI", "Automation"],
      highlights: [
        "Mendeteksi mutasi dan notifikasi pembayaran e-wallet DANA secara otomatis tanpa intervensi manual.",
        "Mengirim struk dan konfirmasi pesanan ke nomor pembeli WhatsApp secara instan (real-time webhook).",
        "Didesain dengan antarmuka modern elegan berbasis Stitch Kinetic Forge untuk kemudahan konfigurasi pedagang."
      ],
      architecture: "Notification Listener Service (Android) -> Webhook Relay Dispatcher -> WhatsApp Automation Engine -> Struk Digital Generator."
    },
    {
      id: "delta-abadi-platform",
      category: "web",
      title: "Enterprise LPK Candidate Management",
      subtitle: "LPK Delta Abadi International",
      summary: "Platform manajemen kandidat magang luar negeri terintegrasi berbasis Next.js 16 (App Router), React 19, Express 5, dan Prisma ORM dengan verifikasi dokumen paspor/visa/sertifikat.",
      image: "assets/img/projects/lpk_platform.jpg",
      tags: ["Next.js 16", "React 19", "Express 5", "Prisma ORM", "Tailwind CSS v4", "Docker", "Redux Toolkit"],
      highlights: [
        "Membangun arsitektur full-stack modern dengan pemisahan frontend Next.js 16 App Router dan backend RESTful API Express 5.",
        "Mendesain sistem pelacakan dokumen kandidat (Paspor, Visa, Sertifikat N4/N5 bahasa Jepang) dengan validasi schema Zod.",
        "Menyediakan dashboard interaktif analitik pendaftaran dan kehadiran pelatihan menggunakan Recharts dan Redux Toolkit."
      ],
      architecture: "Next.js 16 (App Router) + Tailwind CSS v4 -> Express 5 API Service + JWT Auth -> Prisma ORM -> PostgreSQL / Cloudinary Storage."
    },
    {
      id: "dwitunggal-cv",
      category: "web",
      title: "LPK CV Builder & Career Hub",
      subtitle: "PT Dwi Tunggal Jaya Abadi",
      summary: "Aplikasi web modern berbasis React 19 & Neon Serverless PostgreSQL untuk pembuatan CV dwibahasa (Indonesia & Jepang) peserta pemagangan.",
      image: "assets/img/projects/dwitunggal_logo.png",
      tags: ["React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "Neon PostgreSQL", "Docx Engine"],
      highlights: [
        "Aplikasi enterprise production-ready dengan arsitektur modern TypeScript & React 19.",
        "Engine export dokumen otomatis multi-format: DOCX standar Jepang, ExcelJS, dan PDF.",
        "Database cloud serverless berkecepatan tinggi menggunakan Neon Database (PostgreSQL) terintegrasi Vercel."
      ],
      architecture: "React 19 + Vite 6 -> Tailwind CSS v4 + Framer Motion -> Neon Serverless PostgreSQL -> Docx/Excel Templater Engine."
    },
    {
      id: "iot-pet-feeder",
      category: "iot",
      title: "Smart Automated Pet Feeder with Telegram Bot",
      subtitle: "ESP32 Embedded IoT Automation System",
      summary: "Sistem dispenser pakan hewan otomatis berbasis mikrokontroler ESP32 terintegrasi Telegram Bot API, sensor jarak ultrasonik HC-SR04 untuk monitoring sisa pakan, dan sensor inframerah.",
      image: "assets/img/projects/iot_pet_feeder.jpg",
      tags: ["ESP32", "Arduino C++", "Telegram Bot API", "HC-SR04", "IR Sensor", "Servo Motor", "IoT"],
      highlights: [
        "Kontrol pakan jarak jauh melalui pesan chat Telegram Bot (/feed untuk manual, /status untuk cek kondisi pakan dan sensor alat).",
        "Sensor ultrasonik HC-SR04 memantau sisa volume wadah pakan dan mengirim notifikasi otomatis ke smartphone saat stok menipis.",
        "Mekanisme motor servo presisi dengan proteksi jeda makan otomatis untuk memastikan kuantitas porsi pakan yang akurat."
      ],
      architecture: "ESP32 WiFi Microcontroller -> UniversalTelegramBot Client -> HC-SR04 & IR Sensor Reading -> Servo Dispenser Actuator."
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
      id: "bank-sampah",
      category: "web",
      title: "Bank Sampah Indonesia Web Platform",
      subtitle: "Sistem Manajemen Sampah & Reward Digital",
      summary: "Aplikasi web pengelolaan sampah digital terpadu dengan kalkulator timbangan dinamis, tracking poin nasabah, katalog penukaran reward, dan buku besar transaksi keuangan.",
      image: "assets/img/projects/bank_sampah.jpg",
      tags: ["PHP MVC", "MySQL", "Chart.js", "Bootstrap 5", "Financial Ledger", "Dynamic Calculator"],
      highlights: [
        "Kalkulator dinamis untuk penghitungan otomatis konversi berat sampah ke nilai rupiah dan perolehan poin nasabah secara instan.",
        "Dashboard member interaktif menampilkan grafik perkembangan setoran sampah dan saldo tabungan nasabah secara visual.",
        "Modul penukaran reward (sembako, voucher belanja, saldo tunai) serta panel admin untuk audit buku besar setoran sampah."
      ],
      architecture: "PHP MVC Architecture -> MySQL Relational Database -> Chart.js Visualizer Engine -> Points & Cashout Transaction Ledger."
    },
    {
      id: "nlp-sentiment-analysis",
      category: "ai",
      title: "NLP Sentiment Analysis on App Reviews",
      subtitle: "Data Science & Machine Learning Pipeline",
      summary: "Pipeline pengolahan bahasa alami (NLP) untuk menganalisis sentimen ribuan ulasan aplikasi Google Play Store menggunakan Python, TF-IDF, dan pemodelan klasifikasi Machine Learning.",
      image: "assets/img/projects/nlp_sentiment.jpg",
      tags: ["Python", "NLP", "Scikit-Learn", "NLTK", "TF-IDF", "Data Science", "Machine Learning"],
      highlights: [
        "Pipeline text preprocessing komprehensif bahasa Indonesia (case folding, tokenization, stopword removal, dan stemming Sastrawi).",
        "Ekstraksi fitur kata kunci dominan dengan Term Frequency-Inverse Document Frequency (TF-IDF).",
        "Evaluasi model klasifikasi machine learning dengan akurasi 94.2% serta visualisasi Confusion Matrix dan Word Cloud sentimen."
      ],
      architecture: "Google Play Scraper -> NLP Text Preprocessing (Sastrawi/NLTK) -> TF-IDF Vectorizer -> ML Classification Model -> Sentiment Insight Dashboard."
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
