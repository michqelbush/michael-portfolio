import LocationMap from "@/components/LocationMap";

export default function Home() {
  return (
    <>
      {/* Map */}
      <section className="section">
        <div className="container">
          <LocationMap />
        </div>
      </section>

      {/* Profile + availability */}
      <section className="-mt-6">
        <div className="container flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/avatar.jpg"
            alt="avatar"
            className="h-12 w-12 rounded-full border border-white/10"
          />
          <div>
            <h1 className="text-2xl font-semibold">Hey, I’m Michael 👋</h1>
            <p className="text-sm">
              <span className="mr-2 inline-block size-2 rounded-full bg-green-500 align-middle" />
              Available for work
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section">
        <div className="container">
          <div className="card p-5">
            <p className="subtle">[Short About blurb placeholder]</p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section">
        <div className="container grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            "HTML",
            "CSS",
            "TypeScript",
            "Next.js",
            "Tailwind",
            "Linux",
            "VMs",
            "Networking",
          ].map((s) => (
            <span key={s} className="pill">
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* Recent projects */}
      <section className="section">
        <div className="container">
          <div className="mb-3 inline-flex items-center rounded-lg px-3 py-1 text-sm bg-white/5 border border-white/10 subtle">
            Recent projects
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <article key={i} className="card overflow-hidden">
                <div className="aspect-[16/9] bg-black/40 grid place-items-center subtle">
                  [ screenshot ]
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold">Project Title</h3>
                  <p className="mt-1 subtle">One-line description goes here.</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6">
            <a
              className="underline decoration-white/20 underline-offset-4 hover:decoration-white/40"
              href="/projects"
            >
              More projects →
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <div className="container">
          <p>
            Contact:{" "}
            <a
              className="underline decoration-white/20 hover:decoration-white/40"
              href="mailto:michqelbush@gmail.com"
            >
              michqelbush@gmail.com
            </a>{" "}
            ·
            <a
              className="underline decoration-white/20 hover:decoration-white/40 ml-2"
              href="https://github.com/michqelbush"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>{" "}
            ·
            <a
              className="underline decoration-white/20 hover:decoration-white/40 ml-2"
              href="https://www.linkedin.com/in/YOUR_HANDLE"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
