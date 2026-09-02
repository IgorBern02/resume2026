type ProjectProps = {
  title: string;
  description: string;
<<<<<<< HEAD
  local: string;
  date: string;
  activies: string[];
=======
  demoLink?: string;
  githubLink?: string;
>>>>>>> 5e0dda15460719707014eb977c7156b383311667
};

export function Project({
  title,
  description,
<<<<<<< HEAD
  local,
  date,
  activies,
=======
  demoLink,
  githubLink,
>>>>>>> 5e0dda15460719707014eb977c7156b383311667
}: ProjectProps) {
  return (
    <div className="mb-4">
      <h3 className="font-medium">{title}</h3>
<<<<<<< HEAD
      <p>{local}</p>
      <p className="text-sm text-gray-700">{date}</p>
      <ul className="list-disc pl-5 text-sm text-gray-700">
        {activies.map((activity, index) => (
          <li key={index}>{activity}</li>
        ))}
      </ul>
      <p className="text-sm text-gray-800 mt-2">{description}</p>
=======
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
>>>>>>> 5e0dda15460719707014eb977c7156b383311667
    </div>
  );
}
