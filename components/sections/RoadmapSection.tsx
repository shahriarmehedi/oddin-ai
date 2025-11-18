"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";

const roadmap = [
    { title: "Multi-sports", detail: "Formule 1, eSports, NBA", timeline: "T4 2025", status: "En bêta" },
    { title: "Module IA V2", detail: "Scénarios + simulations contextuelles", timeline: "T1 2026", status: "En cours" },
    { title: "API publique", detail: "Connexion directe à vos outils", timeline: "T2 2026", status: "Blueprint" },
    { title: "Application mobile", detail: "iOS & Android natives", timeline: "T3 2026", status: "Prototype" },
];

export function RoadmapSection() {
    return (
        <section className="relative overflow-hidden py-28" id="a-venir">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,230,118,0.15),_transparent_55%)]" aria-hidden />
            <div className="pointer-events-none absolute inset-12 rounded-[48px] border border-white/5 bg-white/5/30 blur-3xl" aria-hidden />
            <div className="container relative z-10 space-y-16">
                <SectionHeading eyebrow="À VENIR" title="Bientôt sur OddinAI" align="center" />
                <div className="mx-auto max-w-5xl space-y-6 rounded-[40px] border border-white/10 bg-white/5/40 p-6 shadow-[0_20px_120px_rgba(0,0,0,0.45)]">
                    <div className="flex flex-col gap-4 rounded-[32px] border border-white/10 bg-night/70 p-6 md:flex-row md:items-center md:justify-between">
                        <div>
                            <p className="text-sm uppercase tracking-[0.4em] text-white/50">Roadmap</p>
                            <p className="text-2xl font-semibold text-white">Penser au-delà des signaux</p>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-white/60">
                            <span className="flex h-2 w-2 rounded-full bg-electric" />
                            <span>Priorité produit</span>
                        </div>
                    </div>
                    <div className="relative pl-10">
                        <div className="pointer-events-none absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-azure/40 via-white/15 to-electric/40" aria-hidden />
                        <div className="space-y-8">
                            {roadmap.map((item, idx) => (
                                <motion.article
                                    key={item.title}
                                    className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-night/80 p-6 shadow-card"
                                    initial={{ opacity: 0, x: -24 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.4 }}
                                    transition={{ delay: idx * 0.08, duration: 0.5 }}
                                >
                                    <span className="absolute left-[-46px] top-8 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-night text-white/70 shadow-[0_0_25px_rgba(0,230,118,0.35)]">
                                        <span className="h-2 w-2 rounded-full bg-gradient-to-r from-azure to-electric" />
                                    </span>
                                    {idx < roadmap.length - 1 && (
                                        <span className="pointer-events-none absolute left-[-38px] top-16 h-16 w-px bg-gradient-to-b from-electric/50 to-azure/20" aria-hidden />
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-br from-azure/10 via-transparent to-electric/10 opacity-0 transition group-hover:opacity-100" aria-hidden />
                                    <div className="relative flex items-center justify-between text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
                                        <span>{item.timeline}</span>
                                        <span className="rounded-full border border-white/20 px-3 py-1 text-[11px] text-white/70">
                                            {item.status}
                                        </span>
                                    </div>
                                    <div className="relative mt-5 flex items-center gap-4">
                                        <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-lg font-semibold text-electric">
                                            {idx + 1}
                                            <span className="absolute inset-[-6px] rounded-3xl border border-azure/20" aria-hidden />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                                            <p className="text-sm text-white/70">{item.detail}</p>
                                        </div>
                                    </div>
                                    <div className="relative mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                                    <p className="relative mt-4 text-sm text-white/60">
                                        {idx % 2 === 0
                                            ? "Portée élargie, données multiples et intégrations en continu."
                                            : "Des expériences native-first avec plus de contexte et de personnalisation."}
                                    </p>
                                </motion.article>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
