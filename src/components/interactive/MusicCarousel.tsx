import music from '../../content/music.json';

export default function MusicCarousel() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {music.map((item) => (
        <a key={item.title} href={item.url} target="_blank" rel="noreferrer" className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-ember/60">
          <img src={item.cover} alt={item.title} className="aspect-square w-full rounded-[1.4rem] object-cover opacity-85 transition group-hover:opacity-100" />
          <div className="mt-5 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.25em] text-ember">{item.platform}</p>
              <h3 className="mt-2 font-display text-4xl uppercase text-bone">{item.title}</h3>
            </div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-smoke group-hover:text-ember">Abrir</span>
          </div>
        </a>
      ))}
    </div>
  );
}
