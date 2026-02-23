type ProjectProps = {
  title: string;
  description: string;
};

export function Project({ title, description }: ProjectProps) {
  return (
    <div className="mb-4">
      <h3 className="font-medium">{title}</h3>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  );
}
