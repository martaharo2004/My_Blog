export const ProjectItems =  ({ id, title, subtitle, date, emoji, logo, tags = [], description, features = [], ciFeatures = [], notice, videoUrl, githubUrl, authors = [],}) => {
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

                {videoUrl && (
                    <div className="video-section">
                        <div className="video-icon">
                            <i className="ti ti-brand-youtube" aria-hidden="true"></i>
                        </div>
                        <div className="video-text">
                        <span className="video-label">Demo en vídeo</span>
                        <span className="video-url">{videoUrl}</span>
                        </div>
                        <a href={videoUrl} target="_blank" rel="noreferrer" className="btn-link">
                        <i className="ti ti-external-link" aria-hidden="true"></i> Ver
                        </a>
                    </div>
                )}
            </div>

            <footer className="proj-footer">
                <div className="authors">
                    {authors.map((author, i) => (<div key={i} className="avatar">{author.initials}</div>))}
                    <span className="authors-label">{authors.map(author => author.name).join(' · ')}</span>
                </div>
               <div className="proj-links">
                    {githubUrl && (
                        <a href={githubUrl} target="_blank" rel="noreferrer" className="btn-link">
                            <i className="ti ti-brand-github" aria-hidden="true"></i> GitHub
                        </a>
                    )}
                </div>
            </footer>   
        </article>
    );
};