import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Essays',
  description: 'Kumpulan esai bebas yang membahas berbagai topik kesehatan.',
  openGraph: {
    title: 'Essays',
    description: 'Kumpulan esai bebas yang membahas berbagai topik kesehatan.',
  },
};

export default function Essays() {
  return (
    <div className="mt-16 px-8 max-w-3xl mx-auto">
      <header className="text-center">
        <h1 className="font-bold text-4xl text-zinc-800 hover:text-zinc-600 transition-colors duration-300">
          Essays
        </h1>
        <p className="mt-2 text-zinc-600 text-lg">
          Kumpulan pemikiran, refleksi, dan eksplorasi berbagai topik kesehatan yang penting dan inspiratif.
        </p>
      </header>
      
      <section className="mt-8 space-y-6">
        <article className="p-4 border border-zinc-300 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-zinc-700">Pentingnya Kesehatan Mental</h2>
          <p className="text-zinc-600 mt-1">Menjaga kesehatan mental sama pentingnya dengan menjaga kesehatan fisik. Bagaimana kita bisa merawatnya?</p>
        </article>

        <article className="p-4 border border-zinc-300 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-zinc-700">Gaya Hidup Sehat</h2>
          <p className="text-zinc-600 mt-1">Menerapkan pola hidup sehat dapat meningkatkan kualitas hidup secara keseluruhan. Mulai dari mana?</p>
        </article>
      </section>
    </div>
  );
}
