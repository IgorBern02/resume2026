type ProjectProps = {
  title: string;
  description: string;
  demoLink?: string;
  githubLink?: string;
};

export function Project({
  title,
  description,
  demoLink,
  githubLink,
}: ProjectProps) {
  return (
    <div className="mb-4">
      <h3 className="font-medium">{title}</h3>
      <p className="text-sm text-gray-700">{description}</p>
      <a
        href={demoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm"
      >
        🌐 Demo
      </a>
      <a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm ml-4"
      >
        💻 GitHub
      </a>
    </div>
  );
}
