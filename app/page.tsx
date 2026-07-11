import ProjectList from "@/components/ProjectList";


const projects = [
  {
    title: "Movie Tracker API",
    description:
      "A full-stack RESTful API for managing a movie rental system. The application allows users to manage movie information, track rented movies, authenticate securely with JWT, and perform CRUD operations through documented API endpoints.",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT Authentication",
      "Swagger",
      "Render",
    ],
    link: "https://github.com/Miracle-Lawrence/MovietrackerAPP",
  },
  {
    title: "School Portal",
    description:
      "A responsive school management web application that provides students, parents, and staff with access to school information, announcements, academic resources, and other essential services through a modern, user-friendly interface.",
    technologies: ["Node.js",
      "Express.js",
      "PostgreSQL",
      "Sequelize",
      "JWT Authentication",
      "Swagger",
      "Render",],
    link: "https://github.com/Miracle-Lawrence/School-portal",
  },
];


export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
          I'm a full-stack developer passionate about building modern web
          applications with Next.js, React, TypeScript, and Node.js. Here are
          some of my recent projects.
        </p>
      </section>
      <ProjectList projects={projects} />
    </main>
  );
}

