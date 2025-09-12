export default function ProjectsPage() {
  return (
    <main className="section">
      <h1 className="text-2xl font-semibold">My Projects</h1>
      <p className="subtle mt-1">A few things I’ve built or am building.</p>

      {/* TODO: replace with your real cards/data */}
      <div className="mt-6 grid gap-8">
        <article className="card overflow-hidden">
          <div className="aspect-[16/9] bg-black/40 grid place-items-center subtle">[ screenshot ]</div>
          <div className="p-5">
            <h3 className="text-xl font-semibold">Cyber Home Lab</h3>
            <p className="mt-1 subtle">Virtualized lab to practice security tooling.</p>
            <p className="mt-2 text-sm subtle">Linux · Windows · VirtualBox · Networking</p>
            <div className="mt-4 flex gap-3">
              <a className="btn" href="https://github.com/your/repo" target="_blank" rel="noreferrer">Source</a>
              <a className="btn" href="#" target="_blank" rel="noreferrer">Visit</a>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
