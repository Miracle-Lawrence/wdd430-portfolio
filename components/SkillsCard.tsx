interface SkillsCardProps {
  title: string;
}

export default function SkillsCard({ title }: SkillsCardProps) {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "MongoDB",
  ];

  return (
    <div className="max-w-md rounded-xl border bg-white p-6 shadow-md">
      <h2 className="mb-4 text-2xl font-bold text-gray-800">{title}</h2>

      <p className="mb-4 text-gray-600">
        These are some of the technologies I use to build responsive and
        user-friendly web applications.
      </p>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
