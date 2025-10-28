'use client';

import { useState } from "react";

export default function Home() {
  const prompt =
    "Slow, smooth dolly-out. Start locked onto the forklift's reinforced mast and hydraulic chains, close enough to feel the hum of the steel. Glide backward on a perfectly leveled track, widening the frame until the entire forklift stands revealed within its bay. Hold a steady pace to underline the machine's weight and stature, letting soft parallax from stacked pallets hint at its surroundings. Invite warm industrial lighting to skim across the metal, catching subtle reflections and movement in the warehouse beyond.";
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy prompt", error);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-50">
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(ellipse_at_top,_rgba(56,189,248,0.18),_transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(ellipse_at_bottom,_rgba(251,191,36,0.12),_transparent_60%)]" />

      <main className="relative mx-auto flex min-h-screen max-w-5xl flex-col gap-16 px-6 py-16 sm:px-10 lg:px-16">
        <header className="flex flex-col gap-4">
          <p className="text-sm uppercase tracking-[0.4em] text-cyan-300/80">
            Shot Craft • Camera Direction
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
            Slow dolly-out reveal, showcasing the forklift&apos;s presence with polished,
            cinematic precision.
          </h1>
          <p className="max-w-2xl text-base text-slate-300 sm:text-lg">
            Deliver a prompt that guides a virtual cinematographer to track from an
            intimate detail to the full scene, highlighting scale, polish, and subtle
            environmental interplay.
          </p>
        </header>

        <section className="rounded-3xl border border-white/10 bg-slate-900/60 p-8 backdrop-blur">
          <header className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-xl font-semibold text-cyan-200">
              Final Camera Movement Prompt
            </h2>
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center justify-center rounded-full border border-cyan-300/40 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-100 transition hover:bg-cyan-400/20"
            >
              {copied ? "Copied!" : "Copy Prompt"}
            </button>
          </header>
          <p className="mt-6 text-lg leading-8 text-slate-100">{prompt}</p>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-white">Opening Detail</h3>
            <p className="mt-3 text-sm text-slate-200">
              Anchor the lens tight on the forklift&apos;s mast, forks, and hydraulic
              assembly. Let micro-vibrations and machine texture fill the frame so the
              viewer feels the industrial muscle before the reveal.
            </p>
          </article>
          <article className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-white">Motion Path</h3>
            <p className="mt-3 text-sm text-slate-200">
              Roll the camera straight back on a balanced dolly track with measured,
              unbroken momentum. Keep vertical alignment steady and parallax subtle to
              preserve the forklift&apos;s dominance.
            </p>
          </article>
          <article className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-white">Scale & Framing</h3>
            <p className="mt-3 text-sm text-slate-200">
              Transition from medium macro to a wide hero angle that lands with the
              forklift centered in its bay. Allow supporting elements—pallet stacks,
              warehouse lines—to emerge as context without stealing focus.
            </p>
          </article>
          <article className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-white">Light & Atmosphere</h3>
            <p className="mt-3 text-sm text-slate-200">
              Blend overhead sodium glow with cool rim lights so metal surfaces pick up
              dynamic reflections. Introduce gentle ambient movement—dust motes,
              distant activity—to keep the environment alive yet restrained.
            </p>
          </article>
        </section>

        <footer className="mb-8 flex flex-col gap-4 rounded-3xl border border-white/10 bg-slate-900/60 p-6 text-sm text-slate-300 backdrop-blur">
          <span className="text-xs uppercase tracking-[0.3em] text-slate-500">
            Delivery Notes
          </span>
          <ul className="space-y-3">
            <li>
              Pair with a 35-50mm focal length to balance intimacy and breadth once the
              environment opens up.
            </li>
            <li>
              Favor a gimbal-stabilized dolly or remote head to keep motion fluid and
              polished.
            </li>
            <li>
              Introduce a gentle aperture shift (f/2.8 → f/5.6) during the move for a
              controlled depth transition that sells scale.
            </li>
          </ul>
        </footer>
      </main>
    </div>
  );
}
