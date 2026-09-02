type ProjectProps = {
  title: string;
  description: string;
  local: string;
  date: string;
  activies: string[];
};

export function Project({
  title,
  description,
  local,
  date,
  activies,
}: ProjectProps) {
  return (
    <div className="mb-4">
      <h3 className="font-medium">{title}</h3>
      <p>{local}</p>
      <p className="text-sm text-gray-700">{date}</p>
      <ul className="list-disc pl-5 text-sm text-gray-700">
        {activies.map((activity, index) => (
          <li key={index}>{activity}</li>
        ))}
      </ul>
      <p className="text-sm text-gray-800 mt-2">{description}</p>
    </div>
  );
}
