import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur shadow-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div
          id="header-title"
          className="text-2xl font-extrabold tracking-wide text-slate-800"
        >
          Miracle Lawrence
        </div>

        <ul className="flex items-center gap-8 text-sm font-medium text-slate-700">
          <li>
            <Link
              href="/"
              className="transition-colors duration-200 hover:text-blue-600"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="transition-colors duration-200 hover:text-blue-600"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="transition-colors duration-200 hover:text-blue-600"
            >
              Projects
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              className="transition-colors duration-200 hover:text-blue-600"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
