export default function ProjectsPage() {
    const list = [
      {
        title: "Cyber Home Lab",
        description: "Virtualized lab to practice security tooling.",
        stack: "Linux · Windows · VirtualBox · Networking",
        image: "/placeholder-map.jpg",
        source: "https://github.com/your/repo",
        visit: "#",
      },
    ];
  
    return (
      <main className="container section">
        <h1 className="text-2xl font-semibold">My Projects</h1>
        <p className="subtle mt-1">A few things I’ve built or am building.</p>
  
        <div className="mt-6 grid gap-8">
          {list.map(p => (
            <article key={p.title} className="card overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.image} alt="" className="w-full aspect-[16/9] object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="mt-1 subtle">{p.description}</p>
                <p className="mt-2 text-sm subtle">{p.stack}</p>
                <div className="mt-4 flex gap-3">
                  <a className="btn" href={p.source} target="_blank" rel="noreferrer">Source</a>
                  <a className="btn" href={p.visit}  target="_blank" rel="noreferrer">Visit</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    );
  }
  