const items = Array.from({ length: 6 }, (_, index) => index + 1);

export default function GalleryGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {items.map((item) => (
        <figure key={item} className="group min-h-64 overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-ember/10 p-6 transition hover:border-ember/60">
          <div className="grid h-full min-h-52 place-items-center rounded-[1.4rem] bg-black/35 text-center">
            <span className="font-display text-5xl uppercase text-bone/45 transition group-hover:text-ember">Foto {item}</span>
          </div>
        </figure>
      ))}
    </div>
  );
}
