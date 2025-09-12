export default function CertsPage() {
    const current = [
      { name: "CompTIA Security+", issuer: "CompTIA", date: "2025-.." },
    ];
    const inProgress = [
      { name: "Google Cybersecurity", issuer: "Google/Coursera", date: "target 10/15" },
    ];
  
    return (
      <main className="section">
        <h1 className="text-2xl font-semibold">Certifications</h1>
  
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <section className="card p-5">
            <h2 className="font-semibold">Current</h2>
            <ul className="mt-3 space-y-2 subtle">
              {current.length === 0 && <li>None yet.</li>}
              {current.map(c => (
                <li key={c.name}>{c.name} — {c.issuer} ({c.date})</li>
              ))}
            </ul>
          </section>
  
          <section className="card p-5">
            <h2 className="font-semibold">In progress</h2>
            <ul className="mt-3 space-y-2 subtle">
              {inProgress.map(c => (
                <li key={c.name}>{c.name} — {c.issuer} ({c.date})</li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    );
  }
  