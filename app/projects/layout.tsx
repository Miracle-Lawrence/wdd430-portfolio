import Link from "next/link";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section style={{ padding: "20px" }}>
      <h2>Projects Section</h2>

      <nav style={{ marginBottom: "20px" }}>
        <ul
          style={{
            display: "flex",
            gap: "20px",
            listStyle: "none",
            padding: 0,
          }}
        >
          <li>
            <Link href="/projects">Overview</Link>
          </li>
          <li>
            <Link href="/projects/settings">Settings</Link>
          </li>
          <li>
            <Link href="/projects/opensource">Open Source</Link>
          </li>
          <li>
            <Link href="/projects/school">School Projects</Link>
          </li>
        </ul>
      </nav>

      {children}
    </section>
  );
}
