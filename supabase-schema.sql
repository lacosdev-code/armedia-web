-- ============================================================
-- ARMEDIA Portal — Supabase Database Schema
-- Jalankan di SQL Editor Supabase (https://app.supabase.com)
-- ============================================================

-- 1. Tabel Registrasi Pelanggan (Form Pendaftaran)
CREATE TABLE IF NOT EXISTS registrations (
  id            BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  paket         TEXT NOT NULL,
  langganan_sebelumnya TEXT,
  nama          TEXT NOT NULL,
  whatsapp      TEXT NOT NULL,
  kecamatan     TEXT DEFAULT 'GUMELAR',
  desa          TEXT NOT NULL,
  alamat        TEXT NOT NULL,
  tanggal_pemasangan TEXT DEFAULT 'Secepatnya',
  waktu_survei  TEXT DEFAULT 'Pagi (08:00 - 11:00)',
  status        TEXT DEFAULT 'baru',
  created_at    TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Tabel Testimoni
CREATE TABLE IF NOT EXISTS testimonials (
  id            BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  quote         TEXT NOT NULL,
  author_name   TEXT NOT NULL,
  author_role   TEXT NOT NULL,
  avatar_initials TEXT NOT NULL,
  created_at    TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Tabel Artikel / Berita
CREATE TABLE IF NOT EXISTS articles (
  id            BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  category      TEXT NOT NULL,
  title         TEXT NOT NULL,
  excerpt       TEXT NOT NULL,
  image_url     TEXT NOT NULL,
  created_at    TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- SEED DATA (Opsional — langsung isi konten awal)
-- ============================================================

-- Testimoni Seed
INSERT INTO testimonials (quote, author_name, author_role, avatar_initials) VALUES
('Internet dari ARMEDIA sangat stabil. Sangat membantu operasional kantor kami yang membutuhkan koneksi cepat setiap hari.', 'Budi Santoso', 'Manager IT, Jakarta', 'BS'),
('Layanan pelanggan ARMEDIA sangat responsif. Jika ada kendala teknis, tim mereka langsung datang menangani.', 'Siti Aminah', 'Pemilik Café, Bandung', 'SA'),
('Sejak menggunakan Armedia, lab komputer sekolah dan ujian online siswa berjalan tanpa hambatan sama sekali. Ping stabil dan bandwidth sangat bisa diandalkan.', 'Ahmad Fauzi', 'Kepala Sekolah, Surabaya', 'AF');

-- Artikel Seed
INSERT INTO articles (category, title, excerpt, image_url) VALUES
('TEKNOLOGI', 'Masa Depan 5G di Indonesia', 'Bagaimana teknologi 5G akan merubah cara kita berinteraksi secara digital.', 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=400&auto=format&fit=crop'),
('KEAMANAN', 'Cybersecurity Bagi UMKM', 'Tips melindungi data bisnis Anda dari serangan siber yang marak.', 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=400&auto=format&fit=crop'),
('INFRASTRUKTUR', 'Fiber Optic Enterprise', 'Infrastruktur kabel optik sebagai tulang punggung bisnis modern.', 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=400&auto=format&fit=crop'),
('INTERNET OF THINGS', 'Smart Home & IoT 2026', 'Rumah cerdas butuh kestabilan bandwidth tinggi penopang multi-device.', 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=400&auto=format&fit=crop');