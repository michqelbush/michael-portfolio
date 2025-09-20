'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname() || '/';
  // Active on that route (and subroutes), but NOT on "/"
  const active = pathname !== '/' && pathname.startsWith(href);

  return (
    <Link
      href={href}
      aria-current={active ? 'page' : undefined}
      className={
        active
          ? 'font-semibold text-base md:text-lg transition-all'
          : 'text-sm opacity-80 hover:opacity-100 transition-all'
      }
    >
      {children}
    </Link>
  );
}

export default function Navbar() {
  return (
    <header className="py-6">
      <nav className="mx-auto px-6 max-w-xl flex items-center justify-between">
        <Link href="/" className="font-semibold text-xl md:text-2xl tracking-wide leading-none">
          MICHAEL BUSH
        </Link>
        <div className="flex items-center gap-4">
          {/* use NavLink here so active styles apply */}
          <NavLink href="/projects">projects</NavLink>
          <NavLink href="/certs">certs</NavLink>
          <NavLink href="/contact">contact</NavLink>
        </div>
      </nav>
    </header>
  );
}
