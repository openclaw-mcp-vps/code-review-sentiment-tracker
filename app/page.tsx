export default function Home() {
  const faqs = [
    {
      q: "Which platforms does it support?",
      a: "GitHub and GitLab. Connect via personal access token and start seeing sentiment data within minutes."
    },
    {
      q: "How is sentiment analysis done?",
      a: "Comments are scored for tone, negativity, and stress markers. Trends are surfaced on a per-contributor and per-repo basis."
    },
    {
      q: "Is my code or review content stored?",
      a: "No raw code is stored. Only aggregated sentiment scores and metadata are retained for your dashboard."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          For Engineering Managers
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Track Team Morale Through{" "}
          <span className="text-[#58a6ff]">Code Review Tone</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Analyze GitHub and GitLab review comments for sentiment patterns. Spot friction, burnout, and toxicity before they damage your team.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Free Trial
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required to try. Cancel anytime.</p>
      </section>

      {/* Social proof strip */}
      <section className="border-y border-[#21262d] bg-[#161b22] py-6">
        <div className="max-w-3xl mx-auto px-6 flex flex-wrap justify-center gap-8 text-sm text-[#8b949e]">
          <span>✓ GitHub &amp; GitLab</span>
          <span>✓ Real-time sentiment scoring</span>
          <span>✓ Burnout early warnings</span>
          <span>✓ Per-contributor trends</span>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Simple Pricing</h2>
        <p className="text-[#8b949e] mb-10">One plan. Everything included.</p>
        <div className="inline-block w-full max-w-sm border border-[#58a6ff] rounded-2xl bg-[#161b22] p-8 text-left shadow-lg shadow-[#58a6ff]/10">
          <div className="flex items-center justify-between mb-1">
            <span className="text-lg font-semibold text-white">Pro</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-[#58a6ff]/10 text-[#58a6ff] border border-[#58a6ff]/30">Most Popular</span>
          </div>
          <div className="mb-6">
            <span className="text-4xl font-bold text-white">$14</span>
            <span className="text-[#8b949e] ml-1">/mo</span>
          </div>
          <ul className="space-y-3 mb-8 text-sm">
            {[
              "Unlimited repos & contributors",
              "Sentiment trend dashboard",
              "Toxic comment alerts",
              "Burnout risk indicators",
              "GitHub & GitLab integration",
              "Email digest reports"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block text-center bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started — $14/mo
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          {faqs.map(({ q, a }) => (
            <div key={q} className="border border-[#21262d] rounded-xl p-6 bg-[#161b22]">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] py-8 text-center text-xs text-[#6e7681]">
        © {new Date().getFullYear()} Code Review Sentiment Tracker. All rights reserved.
      </footer>
    </main>
  );
}
