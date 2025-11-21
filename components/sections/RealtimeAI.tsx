"use client";

import { motion } from "framer-motion";
import { FiActivity, FiPieChart, FiTrendingUp } from "react-icons/fi";
import { SectionHeading } from "../ui/SectionHeading";

const streamDigits = new Array(20).fill(null).map((_, idx) => idx * 7 + 42);
const backgroundDigits = new Array(24)
    .fill(null)
    .map((_, idx) => (idx * 37 + 101).toString().padStart(4, "0"));

export function RealtimeAISection() {
    return (
        <section className="relative overflow-hidden py-16" id="temps-reel">
            <motion.div
                className="pointer-events-none absolute inset-0 opacity-30"
                aria-hidden
                animate={{ backgroundPositionX: ["0%", "20%"], backgroundPositionY: ["0%", "30%"] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{
                    backgroundImage:
                        "linear-gradient(120deg, rgba(0,230,118,0.08) 1px, transparent 1px), linear-gradient(0deg, rgba(30,136,229,0.08) 1px, transparent 1px)",
                    backgroundSize: "140px 140px, 120px 120px",
                }}
            />
            <motion.div
                className="pointer-events-none absolute inset-0"
                aria-hidden
            >
                <motion.div
                    className="absolute inset-x-0 top-8 flex gap-16 text-sm font-mono text-white/10"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                >
                    {[...backgroundDigits, ...backgroundDigits].map((digit, idx) => (
                        <span key={`band-${digit}-${idx}`}>{digit}</span>
                    ))}
                </motion.div>
            </motion.div>
            <div className="container relative z-10 space-y-12">
                <SectionHeading
                    eyebrow="IA EN TEMPS RÉEL"
                    title="Des milliers de données. Une seule logique : le moment présent."
                    subtitle={
                        <span className="text-base text-white/50">
                            OddinAI observe en continu les <span className="pulse-link">cotes</span>, les{" "}
                            <span className="pulse-link">tendances</span> et les{" "}
                            <span className="pulse-link">probabilités</span>. Chaque seconde, notre IA réévalue et détecte les opportunités avant tout le monde.
                        </span>
                    }
                />
                <div className="grid items-stretch gap-8 lg:grid-cols-[minmax(0,360px)_1fr] xl:grid-cols-[380px_minmax(0,1fr)]">
                    <motion.aside
                        className="glass-panel flex flex-col gap-6 rounded-[32px] border border-white/20 p-6"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-base leading-relaxed text-white/70">
                            Chaque seconde notre IA réévalue les probabilités et détecte les opportunités avant tout le monde.
                        </p>
                        <div className="space-y-3 rounded-[24px] border border-white/10 bg-night/70 p-4">
                            <p className="text-xs uppercase tracking-[0.4em] text-white/40">F O C U S</p>
                            {[
                                { label: "cotes", hint: "Latence marché", Icon: FiActivity },
                                { label: "tendances", hint: "Momentum & runs", Icon: FiTrendingUp },
                                { label: "probabilités", hint: "Projection à 5 min", Icon: FiPieChart },
                            ].map((item) => (
                                <motion.button
                                    key={item.label}
                                    whileHover={{ x: 6, backgroundColor: "rgba(0,230,118,0.08)" }}
                                    className="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left transition"
                                >
                                    <span className="rounded-xl bg-white/10 p-2 text-electric">
                                        <item.Icon size={18} />
                                    </span>
                                    <span className="flex flex-col">
                                        <span className="text-sm font-semibold text-white">{item.label}</span>
                                        <span className="text-xs text-white/60">{item.hint}</span>
                                    </span>
                                </motion.button>
                            ))}
                        </div>
                    </motion.aside>
                    <motion.article
                        className="relative flex flex-col gap-8 rounded-[32px] border border-white/10 bg-gradient-to-br from-night to-night-muted p-6 sm:p-10"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="absolute inset-0 bg-grid-glow opacity-20" aria-hidden />
                        <div className="relative space-y-8">
                            <div>
                                <p className="text-sm uppercase text-white/40 mb-4">Flux de données en direct</p>
                                <div className="ticker-mask overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                                    <motion.div
                                        className="flex gap-8 whitespace-nowrap py-5 font-mono text-xl text-electric"
                                        animate={{ x: ["0%", "-50%"] }}
                                        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                                    >
                                        {streamDigits.concat(streamDigits).map((digit, idx) => (
                                            <span key={`${digit}-${idx}`}>
                                                {digit.toString().padStart(4, "0")}
                                            </span>
                                        ))}
                                    </motion.div>
                                </div>
                            </div>
                            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                                {[
                                    { title: "Temps de réaction", value: "160 ms" },
                                    { title: "Sources suivies", value: "72" },
                                    { title: "Alertes/min", value: "4.8" },
                                    { title: "Précision live", value: "93 %" },
                                ].map((item) => (
                                    <motion.div
                                        key={item.title}
                                        className="space-y-1 rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
                                        whileHover={{ scale: 1.03, borderColor: "rgba(255,255,255,0.3)" }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <p className="text-xs uppercase text-white/40">
                                            {item.title}
                                        </p>
                                        <p className="text-2xl font-semibold text-white">{item.value}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.article>
                </div>
            </div>
        </section>
    );
}
