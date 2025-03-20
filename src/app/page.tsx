import type { Metadata } from 'next';
import Image, { StaticImageData } from 'next/image';
import image1 from '../../public/images/24164548224.jpg';

export const metadata: Metadata = {
  title: 'Tentang Saya',
  description: 'Halaman tentang perjalanan dan pengalaman saya.',
  openGraph: {
    title: 'Tentang Saya',
    description: 'Halaman tentang perjalanan dan pengalaman saya.',
  },
};

type AboutItemProps = {
  name: string;
  urlDisplay: string;
  imageSrc: StaticImageData;
};

function AboutItem({ name, urlDisplay, imageSrc }: AboutItemProps) {
  return (
    <div className="text-center">
      <Image 
        src={imageSrc} 
        alt={name} 
        width={300} 
        height={200} 
        className="rounded-lg shadow-md" 
      />
      <p className="mt-2 text-sm text-zinc-700 font-semibold">{name}</p>
      <span className="text-xs text-zinc-500">{urlDisplay}</span>
    </div>
  );
}

export default function AboutMe() {
  return (
    <div className="mt-16 px-8 max-w-3xl mx-auto">
      <header className="text-center">
        <h1 className="font-bold text-4xl text-zinc-800 hover:text-zinc-600 transition-colors duration-300">
          Tentang Saya
        </h1>
        <p className="mt-2 text-zinc-600 text-lg">
          Halo, saya Gana! Saya seorang pengembang web dengan latar belakang di Manajemen Informatika dan ketertarikan dalam teknologi web.
        </p>
      </header>
      
      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-zinc-700">Riwayat</h2>
        <ul className="mt-4 space-y-3 text-zinc-600">
          <li>🎓 Lulusan D3 Manajemen Informatika dari Politeknik Negeri PSDKU Malang di Kediri.</li>
          <li>💻 Berpengalaman dalam pengembangan aplikasi web menggunakan PHP dan Laravel.</li>
          <li>📌 Sedang mengerjakan proyek monitoring pelanggaran siswa berbasis WhatsApp Gateway.</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-zinc-700">Galeri</h2>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
          {/* Menggunakan static import untuk semua gambar */}
          <Image 
            src={image1} 
            alt="Foto 1" 
            width={300} 
            height={200} 
            className="rounded-lg shadow-md" 
          />
        </div>
      </section>
    </div>
  );
}