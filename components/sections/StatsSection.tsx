"use client";

import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { SectionHeading } from "../ui/SectionHeading";

const stats = [
    { label: "matchs analysés", value: 24700, color: "#1E88E5" },
    { label: "alertes envoyées", value: 58098, color: "#FFA726" },
    { label: "€ de gains", value: 1240000, color: "#00E676" },
];

const radius = 96;
const circumference = 2 * Math.PI * radius;

function StatCircle({ label, value, color }: (typeof stats)[number]) {
    const ref = useRef<HTMLDivElement | null>(null);
    const inView = useInView(ref, { once: true, amount: 0.3 });
    const [display, setDisplay] = useState(0);

    useEffect(() => {
        if (!inView) return;
        const controls = animate(0, value, {
            duration: 1.2,
            ease: "easeOut",
            onUpdate: (latest) => setDisplay(Math.round(latest)),
        });
        return () => controls.stop();
    }, [inView, value]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.6 }}
            className="group relative"
        >
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-10 text-center backdrop-blur-sm transition-all duration-300 group-hover:border-white/20 group-hover:shadow-[0_0_60px_rgba(255,255,255,0.1)]">
                <div className="relative mx-auto flex h-56 w-56 items-center justify-center">
                    <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 240 240"
                        className="-rotate-90"
                        aria-hidden
                    >
                        <circle
                            cx="120"
                            cy="120"
                            r={radius}
                            stroke="rgba(255,255,255,0.08)"
                            strokeWidth="10"
                            fill="transparent"
                        />
                        <motion.circle
                            cx="120"
                            cy="120"
                            r={radius}
                            stroke={color}
                            strokeWidth="10"
                            strokeLinecap="round"
                            fill="transparent"
                            strokeDasharray={circumference}
                            strokeDashoffset={circumference}
                            animate={inView ? { strokeDashoffset: 0 } : {}}
                            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
                            style={{ filter: `drop-shadow(0 0 8px ${color}40)` }}
                        />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                        <p className="text-3xl font-bold text-white tabular-nums">
                            {display.toLocaleString("fr-FR")}
                        </p>
                        <p className="text-xs uppercase tracking-wide text-white/50 px-4">{label}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export function StatsSection() {
    return (
        <section className="relative overflow-hidden py-24" id="chiffres">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,230,118,0.08),transparent_70%)] opacity-50" aria-hidden />
            <div className="container relative z-10 space-y-16">
                <SectionHeading
                    eyebrow="LES CHIFFRES PARLENT"
                    title="Quand les données racontent l'histoire."
                    align="center"
                />
                <div className="grid gap-8 sm:grid-cols-3">
                    {stats.map((item, idx) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                        >
                            <StatCircle {...item} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
