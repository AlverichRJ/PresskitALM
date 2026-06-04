const galleryItems = [
  {
    id: 'grupo',
    label: 'Grupo nosotros',
    caption: 'Retrato de la banda',
    className: 'gallery-collage__item--group',
  },
  {
    id: 'tocando-uno',
    label: 'Tocando',
    caption: 'Energía en vivo',
    className: 'gallery-collage__item--playing-one',
  },
  {
    id: 'tocando-dos',
    label: 'Tocando',
    caption: 'El pulso del escenario',
    className: 'gallery-collage__item--playing-two',
  },
  {
    id: 'publico',
    label: 'Público',
    caption: 'La respuesta frente al escenario',
    className: 'gallery-collage__item--audience',
  },
  {
    id: 'detalle',
    label: 'Pepe con micrófono viejito',
    caption: 'Detalle con historia',
    className: 'gallery-collage__item--detail',
  },
  {
    id: 'convivencia',
    label: 'Con el público',
    caption: 'Otro momento compartido',
    className: 'gallery-collage__item--shared',
  },
  {
    id: 'escenario',
    label: 'Escenario',
    caption: 'Donde todo termina de cobrar vida',
    className: 'gallery-collage__item--stage',
  },
];

export default function GalleryGrid() {
  return (
    <div className="gallery-collage" aria-label="Collage de momentos de Al-Maburak">
      {galleryItems.map((item) => (
        <figure key={item.id} className={`gallery-collage__item ${item.className}`}>
          <div className="gallery-collage__placeholder">
            <span className="gallery-collage__label">{item.label}</span>
          </div>
          <figcaption className="gallery-collage__caption">{item.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}
