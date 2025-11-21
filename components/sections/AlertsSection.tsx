"use client";

import { motion } from "framer-motion";
import { RiNotification3Line, RiLineChartLine, RiFlashlightLine } from "react-icons/ri";
import { SectionHeading } from "../ui/SectionHeading";

const alertExamples = [
    {
        type: "Safe Bet",
        icon: RiFlashlightLine,
        sport: "Football",
        detail: "+2.4% edge détectée",
        odds: "1.85",
        time: "Il y a 2 min",
        color: "from-electric to-azure",
    },
    {
        type: "Value Bet",
        icon: RiLineChartLine,
        sport: "Tennis",
        detail: "Cote 1.78 → 1.65",
        odds: "1.78",
        time: "Il y a 5 min",
        color: "from-azure to-electric",
    },
    {
        type: "Momentum",
        icon: RiNotification3Line,
        sport: "Basket",
        detail: "Série de 4 victoires",
        odds: "1.92",
        time: "Il y a 8 min",
        color: "from-electric to-orange",
    },
];

export function AlertsSection() {
    return (
        <section className="relative overflow-hidden py-16" id="alertes">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,136,229,0.08),transparent_60%)]" aria-hidden />
            <div className="container relative z-10 space-y-16">
                <SectionHeading
                    eyebrow="ALERTES EN TEMPS RÉEL"
                    title="Recevez les meilleures opportunités directement sur Telegram."
                    subtitle="Notre IA analyse en continu et vous envoie uniquement les signaux à forte valeur, avant que les cotes ne changent."
                    align="center"
                />

                <div className="max-w-4xl mx-auto space-y-8">
                    <motion.div
                        className="text-center space-y-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-lg text-white/80">
                            Chaque alerte contient :
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 text-sm">
                            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70">
                                ⚡ Type d'opportunité
                            </span>
                            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70">
                                📊 Analyse détaillée
                            </span>
                            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70">
                                🎯 Cote recommandée
                            </span>
                            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70">
                                ⏱️ Timing optimal
                            </span>
                        </div>
                    </motion.div>

                    <div className="grid gap-6 md:grid-cols-3">
                        {alertExamples.map((alert, idx) => {
                            const Icon = alert.icon;
                            return (
                                <motion.div
                                    key={alert.type}
                                    className="relative group"
                                    initial={{ opacity: 0, y: 32 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                                >
                                    <div className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-night/40 p-6 backdrop-blur-sm hover:border-white/20 transition-colors">
                                        <div className="absolute top-3 right-3 text-xs text-white/40">
                                            {alert.time}
                                        </div>

                                        <div className="flex items-start gap-4 mb-4">
                                            <div className={`p-3 rounded-xl bg-gradient-to-br ${alert.color} shadow-lg`}>
                                                <Icon className="text-white text-xl" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-lg font-semibold text-white mb-1">
                                                    {alert.type}
                                                </h3>
                                                <span className="inline-block px-2 py-0.5 rounded text-xs bg-white/10 text-white/60">
                                                    {alert.sport}
                                                </span>
                                            </div>
                                        </div>

                                        <p className="text-white/80 mb-3">
                                            {alert.detail}
                                        </p>

                                        <div className="flex items-center justify-between pt-3 border-t border-white/10">
                                            <span className="text-sm text-white/60">
                                                Cote recommandée
                                            </span>
                                            <span className="text-lg font-bold text-electric">
                                                {alert.odds}
                                            </span>
                                        </div>
                                    </div>

                                    <motion.div
                                        className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-electric/20 to-azure/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
                                        aria-hidden
                                    />
                                </motion.div>
                            );
                        })}
                    </div>

                    <motion.div
                        className="text-center pt-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <a
                            className="btn-primary inline-flex items-center gap-2 py-4 px-8 animate-pulse-glow"
                            href="https://t.me/+9P4yVW6WvQQyMDI0"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <RiNotification3Line className="text-xl" />
                            Essayer gratuitement sur Telegram
                        </a>
                        <p className="mt-4 text-sm text-white/50">
                            Aucune carte bancaire requise • Accès immédiat
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
