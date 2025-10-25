# NADIM TOGEL - Platform Gaming Online

## Ringkasan Platform
NADIM TOGEL adalah platform gaming online mobile-first yang dirancang untuk pasar Indonesia. Platform ini menawarkan berbagai jenis permainan termasuk lottery (togel), casino, slots, e-lottery, dan arcade games, semua disajikan dengan antarmuka modern dan user-friendly dalam Bahasa Indonesia.

## Status Proyek Saat Ini

### Fitur yang Sudah Diimplementasikan
1. **Halaman Utama (Home)**
   - Grid kategori permainan dengan filter
   - Pencarian global untuk semua game
   - Banner promosi carousel
   - Sections untuk: Togel, Casino, Slot, E-Lottery, Arcade

2. **Sistem Keuangan**
   - Halaman Deposit dengan pilihan metode pembayaran (bank, e-wallet)
   - Halaman Withdraw dengan form penarikan
   - Tampilan saldo user dengan tombol refresh

3. **Manajemen Transaksi**
   - History: Riwayat permainan dan transaksi keuangan (tab interface)
   - Invoice: Generate invoice untuk game tertentu
   - Transactions: Detail transaksi dengan search dan filtering

4. **Informasi & Support**
   - Promosi: Halaman menampilkan promosi aktif
   - Hadiah: Informasi hadiah dan reward
   - Contact: Multi-channel support (Live Chat, WhatsApp, Telegram, Instagram, Facebook)

5. **Navigasi**
   - Header sticky dengan logo dan tombol Deposit
   - Bottom navigation untuk akses cepat
   - Hash-based navigation untuk browser back/forward button support

6. **Provider Games**
   - SlotProvider: Detail games dari provider slot (PRAGMATIC PLAY, HABANERO, IDNSLOT, dll.)
   - Sudah diimplementasikan: Penghapusan icon back dari halaman provider (Oktober 2025)

### Arsitektur Teknis

#### Frontend Stack
- **Core:** React 18.3.1, TypeScript 5.x, Vite 6.x
- **UI Framework:** Tailwind CSS 3.x dengan shadcn/ui components
- **Routing:** Wouter 3.x (lightweight client-side routing)
- **State Management:** React useState + TanStack React Query
- **Forms:** react-hook-form dengan Zod validation
- **UI Components:** @radix-ui primitives untuk accessibility
- **Icons:** lucide-react, react-icons/si
- **Carousel:** embla-carousel-react

#### Backend Stack
- **Server:** Node.js, Express.js, TypeScript
- **Database:** PostgreSQL (Neon Serverless)
- **ORM:** Drizzle ORM dengan drizzle-kit dan drizzle-zod
- **Session:** express-session, connect-pg-simple, memorystore
- **Auth:** passport, passport-local

### Sistem Desain

#### Skema Warna (Dark Mode)
- **Background Primary:** `220 15% 8%` (sangat gelap blue-black)
- **Background Secondary:** `220 18% 12%` (panels/cards sedikit lebih terang)
- **Primary Accent:** `190 95% 42%` - `190 95% 50%` (cyan/turquoise vibrant untuk CTA)
- **Text Primary:** `0 0% 98%` (hampir putih)
- **Text Secondary:** `0 0% 70%` (gray muted)
- **Success/Balance:** `140 65% 50%` (hijau untuk tampilan saldo)
- **Border:** `220 15% 20%` (border gelap subtle)

#### Tipografi
- **Font:** 'Inter', sans-serif
- **Logo/Brand:** text-xl font-bold
- **Judul Halaman:** text-2xl font-bold
- **Header Sections:** text-xl font-bold
- **Body Text:** text-base
- **Category Labels:** text-xs font-medium uppercase

#### Spacing & Layout
- **Spacing Units:** Tailwind 2, 4, 6, 8
- **Component Padding:** p-4 atau p-6
- **Section Gaps:** space-y-4 atau space-y-6
- **Container:** Mobile-first, full width dengan px-4 padding, max-w-md mx-auto

#### Komponen Standar

**1. Header (Top Bar)**
- Dark background dengan gradient subtle
- Logo NADIM TOGEL (kiri)
- Tombol Deposit (cyan background, rounded-full)

**2. User Info Panel**
- Card dengan secondary background
- Nama user dan saldo (IDR format)
- Icon refresh untuk update saldo
- Rounded-xl dengan shadow

**3. Category Grid**
- Grid 3 kolom (grid-cols-3)
- Card dengan icon dan label
- Hover state dengan cyan border
- Icons 64x64px colorful

**4. Search Bar**
- Full width dengan icon search
- Muted icon dan placeholder 50% opacity
- Border-2 border-primary
- Rounded-md dengan hover-elevate

**5. Promotional Banner**
- Gradient background
- Carousel dengan embla-carousel
- Rounded-xl corners
- Call-to-action text/button

**6. Bottom Navigation**
- Fixed di bottom
- 4-5 icons dengan labels
- Active state: cyan color
- Border-top untuk separation

### Prinsip Desain
1. **Mobile Gaming Focus:** Semua elemen dioptimalkan untuk thumb-reach dan interaksi cepat
2. **Dark Mode Excellence:** High contrast untuk readability, accent colors vibrant
3. **Information Hierarchy:** Saldo dan actions langsung terlihat
4. **Quick Access:** Bottom nav + category grid untuk instant game discovery
5. **Trust & Security:** Styling professional, balance display jelas

### Navigation Flow
- State-based navigation dengan hash fragments (#deposit, #withdraw, dll)
- Browser history terintegrasi untuk back/forward functionality
- Sidebar sliding dari kiri untuk comprehensive navigation
- Menu clicks trigger state updates dan conditional rendering

### Preferensi Development
- Bahasa clear dan simple dengan penjelasan detail jika diperlukan
- Pendekatan iterative development
- Prioritas mempertahankan design system dan architectural patterns
- Tanyakan sebelum membuat perubahan struktural besar
- Jangan ubah folder `attached_assets`

### Asset Management
- Stock images untuk promotional banners
- Colorful slot machine images untuk game previews
- Casino, lottery, dan arcade themed imagery
- Icons: lucide-react dan react-icons/si

### External Integrations
- **Contact Channels:** WhatsApp, Telegram, Instagram, Facebook (linked externally)
- **Payment Methods:** Multiple banks dan e-wallets (UI ready, backend integration pending)
- **Game Providers:** PRAGMATIC PLAY, HABANERO, IDNSLOT, IDN LOTTERY, PG POCKET GAMES SOFT, TOPTREND GAMING, CWM, MICROGAMING, NOLIMIT CITY, PS, SLOT MANIA, FAT PANDA, BOOMING GAMES, SPADEGAMING

## Recent Changes
- **25 Oktober 2025:** Icon back dihapus dari halaman SlotProvider (IDNSLOT dan provider lainnya)
