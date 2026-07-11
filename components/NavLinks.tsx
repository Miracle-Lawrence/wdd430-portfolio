"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/projects/opensource", label: "Open Source" },
  { href: "/projects/school", label: "School Projects" },
  { href: "/projects/settings", label: "Settings" },
    { href: "/contact", label: "Contact" }
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="nav-links">
        {links.map((link) => {
          const isActive =
            pathname === link.href ||
            (link.href !== "/" && pathname.startsWith(link.href));

          return (
            <li key={link.href}>
              <Link href={link.href} className={isActive ? "active" : ""}>
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
