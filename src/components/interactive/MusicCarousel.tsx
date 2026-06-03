import music from '../../content/music.json';

const assetPath = (path: string) => `${import.meta.env.BASE_URL.replace(/\/?$/, '/')}${path.replace(/^\//, '')}`;

export default function MusicCarousel() {
  const [featuredTrack, officialVideo] = music;

  return (
    <div className="music-showcase">
      <a
        href={featuredTrack.url}
        target="_blank"
        rel="noreferrer"
        className="music-cover-card music-cover-card--featured"
        aria-label={`Abrir ${featuredTrack.title} en ${featuredTrack.platform}`}
      >
        <img src={assetPath(featuredTrack.cover)} alt={`Portada de ${featuredTrack.title}`} className="music-cover-card__image" />
        <div className="music-cover-card__content">
          <div>
            <p className="music-cover-card__platform">{featuredTrack.platform}</p>
            <h4 className="music-cover-card__title">{featuredTrack.title}</h4>
          </div>
          <span className="music-cover-card__action">Abrir</span>
        </div>
      </a>

      <div className="music-video-row">
        <a
          href={officialVideo.url}
          target="_blank"
          rel="noreferrer"
          className="music-cover-card music-cover-card--video"
          aria-label={`Abrir ${officialVideo.title} en ${officialVideo.platform}`}
        >
          <img src={assetPath(officialVideo.cover)} alt={`Portada de ${officialVideo.title}`} className="music-cover-card__image" />
          <div className="music-cover-card__content">
            <div>
              <p className="music-cover-card__platform">{officialVideo.platform}</p>
              <h4 className="music-cover-card__title">{officialVideo.title}</h4>
            </div>
            <span className="music-cover-card__action">Abrir</span>
          </div>
        </a>

        <a
          href={officialVideo.url}
          target="_blank"
          rel="noreferrer"
          className="music-video-frame"
          aria-label="Abrir video oficial"
        >
          <span>Video oficial</span>
        </a>
      </div>
    </div>
  );
}
