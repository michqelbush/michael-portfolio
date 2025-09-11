import Link from "next/link";

export default function Navbar() {
  return (
    <header className="py-6">
      <nav className="mx-auto max-w-[720px] px-4 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-wide">MICHAEL BUSH</Link>
        <div className="flex items-center gap-4 text-sm">
          <Link href="/projects" className="hover:underline">projects</Link>
          <Link href="/#certs" className="hover:underline">certs</Link>
          <Link href="/#contact" className="hover:underline">contact</Link>
        </div>
      </nav>
    </header>
  );
}
