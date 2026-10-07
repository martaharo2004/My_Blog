import { useRef, useState } from 'react';

export const ProjectItems = ({ id, title, subtitle, date, emoji, headerIcon, headerImage, logo, tags = [], description, features = [], ciFeatures = [], relatedProject, notice, videoUrl, videoLinks = [], githubUrl, sketchfabUrl, itchUrl, figmaUrl, figmaEmbed, authors = [], images = [], videos = [], models = [] }) => {
    const [activeModel, setActiveModel] = useState(models[0] ?? null);
    const [activeImage, setActiveImage] = useState(null);
    const imageDialog = useRef(null);
    const openImage = image => {
        setActiveImage(image);
        imageDialog.current.showModal();
    };
    return (
        <article id={id} className="proj-card">
            <header className="proj-header">
                <div className="proj-header-top">
                    <div className="proj-header-top-left">
                        <h1 className="proj-title">{title}</h1>
                        <h2 className="proj-subtitle">{subtitle}</h2>
                        {date && <p className="proj-date">{date}</p>}
                    </div>

                    <div className="proj-header-top-right">
                        {logo
                            ? <img src={logo} alt={title} className="proj-logo-img" />
                            : headerImage ? <img src={headerImage} alt="" className="proj-header-symbol" />
                            : headerIcon ? <i className={`ti ti-${headerIcon} proj-emoji`} aria-hidden="true"></i>
                            : emoji && <span className="proj-emoji">{emoji}</span>
                        }
                    </div>
                </div>

                

                <div className="proj-tags">
                    {tags.map((tags, i) => (
                        <span key={i} className="tag">{tags}</span>
                    ))}
                </div>
            </header>

            <div className="proj-body">
                <p className="proj-desc">{description}</p>
                {relatedProject && (
                    <section className="proj-origin">
                        <h3>Origen del proyecto</h3>
                        <p className="proj-desc">{relatedProject.description}</p>
                        <a className="btn-link" href={relatedProject.url} target="_blank" rel="noopener noreferrer">{relatedProject.label} ↗</a>
                    </section>
                )}

                {activeModel && (
                    <section className="proj-models" aria-label={`Visor 3D de ${title}`}>
                        <h3>Visor 3D</h3>
                        <div className="proj-links" aria-label="Seleccionar modelo o pose">
                            {models.map(model => (
                                <button key={model.id} type="button" className="btn-link" aria-pressed={activeModel.id === model.id} onClick={() => setActiveModel(model)}>{model.label}</button>
                            ))}
                        </div>
                        <iframe key={activeModel.id} title={`${title} · ${activeModel.label}`} src={`https://sketchfab.com/models/${activeModel.id}/embed`} allow="autoplay; fullscreen; xr-spatial-tracking" allowFullScreen loading="lazy" />
                    </section>
                )}

                {images.length > 0 && (
                    <div className="proj-gallery">
                        {images.map(image => (
                            <figure key={image.src}>
                                <button type="button" onClick={() => openImage(image)} aria-label={`Ampliar: ${image.alt}`}>
                                    <img src={image.src} alt={image.alt} loading="lazy" />
                                </button>
                                <figcaption>{image.alt}</figcaption>
                            </figure>
                        ))}
                    </div>
                )}

                <dialog className="proj-lightbox" ref={imageDialog} aria-label={activeImage?.alt ?? 'Render ampliado'} onClose={() => setActiveImage(null)} onClick={event => { if (event.target === event.currentTarget) imageDialog.current.close(); }}>
                    <form method="dialog"><button className="btn-link" aria-label="Cerrar imagen ampliada">Cerrar ×</button></form>
                    {activeImage && <figure><img src={activeImage.src} alt={activeImage.alt} /><figcaption>{activeImage.alt}</figcaption></figure>}
                </dialog>

                {(videoUrl || videoLinks.length > 0 ? [] : videos).map(video => (
                    <figure className="proj-video" key={video.src}>
                        <video controls preload="none" playsInline poster={video.poster} aria-label={video.title}>
                            <source src={video.src} type="video/mp4" />
                            Tu navegador no permite reproducir este vídeo. <a href={video.src}>Abrir vídeo</a>
                        </video>
                        <figcaption>{video.title}</figcaption>
                    </figure>
                ))}

                <div className="features-grid">
                    {features.map((f, i) => (
                        <div key={i} className="feature">
                            <i className={`ti ti-${f.icon}`} aria-hidden="true"></i>
                            <span className="feature-name">{f.name}</span>
                            <span className="feature-desc">{f.desc}</span>
                        </div>
                    ))}
                </div>

                {ciFeatures.length > 0 && (
                    <div className="ci-features">
                        <span className="ci-label">Características de CodeIgniter 4</span>
                        <div className="ci-pills">
                            {ciFeatures.map((f, i) => (
                                <span key={i} className="ci-pill">
                                    <i className={`ti ti-${f.icon}`} aria-hidden="true"></i>
                                    {f.name}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {notice && (
                    <div className="notice">
                        <i className="ti ti-info-circle" aria-hidden="true"></i>
                        <p>{notice}</p>
                    </div>
                )}

                {figmaEmbed && (
                    <div className="figma-embed">
                        <iframe
                            src={figmaEmbed}
                            width="100%"
                            height="450"
                            allowFullScreen
                        />
                    </div>
                )}

                {[...(videoUrl ? [{ title: 'Demo en vídeo', url: videoUrl }] : []), ...videoLinks].map(video => (
                    <div className="video-section" key={video.url ?? video.title}>
                        <div className="video-icon">
                            <i className="ti ti-brand-youtube" aria-hidden="true"></i>
                        </div>
                        <div className="video-text">
                        <span className="video-label">{video.title}</span>
                        <span className="video-url">{video.url ?? 'Enlace de YouTube pendiente'}</span>
                        </div>
                        {video.url && <a href={video.url} target="_blank" rel="noreferrer" className="btn-link" aria-label={`Ver ${video.title} en YouTube`}>
                        <i className="ti ti-external-link" aria-hidden="true"></i> Ver
                        </a>}
                    </div>
                ))}
            </div>   

            <footer className="proj-footer">
                <div className="authors">
                    {authors.map((author, i) => (<div key={i} className="avatar">{author.initials}</div>))}
                    <span className="authors-label">{authors.map(author => author.name).join(' · ')}</span>
                </div>
               <div className="proj-links">
                    {sketchfabUrl && (
                        <a href={sketchfabUrl} target="_blank" rel="noreferrer" className="btn-link">
                            <i className="ti ti-cube" aria-hidden="true"></i> Sketchfab
                        </a>
                    )}
                    {models.map(model => (
                        <a key={model.id} href={model.url} target="_blank" rel="noreferrer" className="btn-link">
                            <i className="ti ti-cube" aria-hidden="true"></i> Sketchfab · {model.label}
                        </a>
                    ))}
                    {itchUrl && (
                        <a href={itchUrl} target="_blank" rel="noreferrer" className="btn-link">
                            <i className="ti ti-device-gamepad-2" aria-hidden="true"></i> itch.io
                        </a>
                    )}
                    {githubUrl && (
                        <a href={githubUrl} target="_blank" rel="noreferrer" className="btn-link">
                            <i className="ti ti-brand-github" aria-hidden="true"></i> GitHub
                        </a>
                    )}
                    {figmaUrl && (
                        <a href={figmaUrl} target="_blank" rel="noreferrer" className="btn-link">
                            <i className="ti ti-brand-figma" aria-hidden="true"></i> Figma
                        </a>
                    )}      
                </div>
            </footer>   
        </article>
    );
};
