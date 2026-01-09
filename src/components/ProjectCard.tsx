interface ProjectCardProps {
  title: string;
  description: string;
  desktopBanner: string;
  mobileBanner: string;
  url?: string;
}

const ProjectCard = ({ title, description, desktopBanner, mobileBanner, url }: ProjectCardProps) => {
  const CardContent = () => (
    <article className="project-card group">
      <div className="overflow-hidden rounded-t-2xl">
        <picture>
          <source media="(min-width: 768px)" srcSet={desktopBanner} />
          <img
            src={mobileBanner}
            alt={title}
            className="project-card-image"
            loading="lazy"
          />
        </picture>
      </div>
      <div className="project-card-content">
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-description line-clamp-3">{description}</p>
      </div>
    </article>
  );

  if (url) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" className="block">
        <CardContent />
      </a>
    );
  }

  return <CardContent />;
};

export default ProjectCard;
