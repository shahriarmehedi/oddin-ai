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
                className="pointer-events-none absolute inset-0 opacity-20 sm:opacity-30"
                aria-hidden
                initial={{ opacity: 0.2 }}
                animate={{ opacity: 0.3, backgroundPositionX: ["0%", "20%"], backgroundPositionY: ["0%", "30%"] }}
                transition={{ opacity: { duration: 0.1 }, backgroundPositionX: { duration: 20, repeat: Infinity, ease: "linear" }, backgroundPositionY: { duration: 20, repeat: Infinity, ease: "linear" } }}
                style={{
                    backgroundImage:
                        "linear-gradient(120deg, rgba(0,230,118,0.08) 1px, transparent 1px), linear-gradient(0deg, rgba(30,136,229,0.08) 1px, transparent 1px)",
                    backgroundSize: "100px 100px, 80px 80px",
                }}
            />
            <motion.div
                className="pointer-events-none absolute inset-0 hidden sm:block"
                aria-hidden
                initial={{ opacity: 0.8 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1 }}
            >
                <motion.div
                    className="absolute inset-x-0 top-8 flex gap-8 sm:gap-12 lg:gap-16 text-xs sm:text-sm font-mono text-white/10"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                >
                    {[...backgroundDigits, ...backgroundDigits].map((digit, idx) => (
                        <span key={`band-${digit}-${idx}`}>{digit}</span>
                    ))}
                </motion.div>
            </motion.div>
            <div className="container relative z-10 space-y-8 sm:space-y-12">
                <SectionHeading
                    eyebrow="IA EN TEMPS RÉEL"
                    title="Des milliers de données. Une seule logique : le moment présent."
                    subtitle={
                        <span className="text-sm sm:text-base text-white/50 block max-w-3xl mx-auto">
                            OddinAI observe en continu les <span className="pulse-link">cotes</span>, les{" "}
                            <span className="pulse-link">tendances</span> et les{" "}
                            <span className="pulse-link">probabilités</span>. Chaque seconde, notre IA réévalue et détecte les opportunités avant tout le monde.
                        </span>
                    }
                />
                <div className="flex flex-col lg:grid lg:grid-cols-[300px_1fr] xl:grid-cols-[340px_1fr] gap-6 lg:gap-8">
                    <div className="glass-panel flex flex-col gap-4 sm:gap-5 rounded-2xl sm:rounded-3xl border border-white/20 p-4 sm:p-5 lg:p-6">
                        <p className="text-sm sm:text-base leading-relaxed text-white/70">
                            Chaque seconde notre IA réévalue les probabilités et détecte les opportunités avant tout le monde.
                        </p>
                        <div className="space-y-2 sm:space-y-2.5 rounded-xl sm:rounded-2xl border border-white/10 bg-night/70 p-3 sm:p-4">
                            <p className="text-[10px] sm:text-xs uppercase tracking-wider text-white/40">FOCUS</p>
                            {[
                                { label: "cotes", hint: "Latence marché", Icon: FiActivity },
                                { label: "tendances", hint: "Momentum & runs", Icon: FiTrendingUp },
                                { label: "probabilités", hint: "Projection à 5 min", Icon: FiPieChart },
                            ].map((item) => (
                                <button
                                    key={item.label}
                                    className="flex w-full items-center gap-2 sm:gap-3 rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 px-3 sm:px-4 py-2.5 sm:py-3 text-left transition hover:bg-white/10"
                                >
                                    <span className="rounded-lg sm:rounded-xl bg-white/10 p-1.5 sm:p-2 text-electric flex-shrink-0">
                                        <item.Icon className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                                    </span>
                                    <span className="flex flex-col min-w-0 flex-1">
                                        <span className="text-xs sm:text-sm font-semibold text-white truncate">{item.label}</span>
                                        <span className="text-[10px] sm:text-xs text-white/60 truncate">{item.hint}</span>
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="relative flex flex-col gap-6 sm:gap-8 rounded-2xl sm:rounded-3xl border border-white/10 bg-gradient-to-br from-night to-night-muted p-4 sm:p-6 lg:p-8">
                        <div className="absolute inset-0 bg-grid-glow opacity-20 rounded-2xl sm:rounded-3xl pointer-events-none" aria-hidden />
                        <div className="relative space-y-5 sm:space-y-6 lg:space-y-8">
                            <div>
                                <p className="text-xs sm:text-sm uppercase text-white/40 mb-3 sm:mb-4">Flux de données en direct</p>
                                <div className="ticker-mask overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 bg-white/5">
                                    <div className="overflow-x-auto scrollbar-hide">
                                        <motion.div
                                            className="flex gap-3 sm:gap-4 lg:gap-8 whitespace-nowrap py-3 sm:py-4 lg:py-5 font-mono text-sm sm:text-base lg:text-xl text-electric min-w-max"
                                            animate={{ x: ["0%", "-50%"] }}
                                            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                                        >
                                            {streamDigits.concat(streamDigits).map((digit, idx) => (
                                                <span key={`${digit}-${idx}`} className="inline-block">
                                                    {digit.toString().padStart(4, "0")}
                                                </span>
                                            ))}
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid gap-3 sm:gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
                                {[
                                    { title: "Temps de réaction", value: "160 ms" },
                                    { title: "Sources suivies", value: "72" },
                                    { title: "Alertes/min", value: "4.8" },
                                    { title: "Précision live", value: "93 %" },
                                ].map((item) => (
                                    <div
                                        key={item.title}
                                        className="space-y-0.5 sm:space-y-1 rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 px-2.5 sm:px-3 lg:px-4 py-2.5 sm:py-3 lg:py-4 transition hover:border-white/20"
                                    >
                                        <p className="text-[9px] sm:text-[10px] lg:text-xs uppercase text-white/40 leading-tight">
                                            {item.title}
                                        </p>
                                        <p className="text-base sm:text-lg lg:text-2xl font-semibold text-white">{item.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
