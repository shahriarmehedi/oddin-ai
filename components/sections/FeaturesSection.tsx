"use client";

import { motion } from "framer-motion";
import { FiBell, FiCpu, FiDatabase, FiTrendingUp } from "react-icons/fi";
import { GlowCard } from "../ui/GlowCard";
import { SectionHeading } from "../ui/SectionHeading";

const features = [
    {
        title: "Intelligence Adaptative",
        description:
            "L'IA apprend de chaque match, de chaque écart et de chaque résultat pour renforcer ses modèles.",
        Icon: FiCpu,
    },
    {
        title: "Données Vérifiées",
        description:
            "Toutes les analyses proviennent de sources officielles et d'historiques réels, multi-sports.",
        Icon: FiDatabase,
    },
    {
        title: "Alertes Instantanées",
        description: "Recevez les signaux avant les changements de cotes, directement sur Telegram.",
        Icon: FiBell,
    },
    {
        title: "Décisions Renforcées",
        description: "Une vision logique, sans émotion, mais toujours humaine grâce aux insights expliqués.",
        Icon: FiTrendingUp,
    },
];

export function FeaturesSection() {
    return (
        <section className="container space-y-12 py-16" id="pourquoi">
            <SectionHeading
                eyebrow="POURQUOI ODDINAI ?"
                title="Choisir OddinAI, c'est choisir la clarté."
                subtitle="Quatre piliers pour des décisions guidées par l'IA, prêtes pour Telegram et Stripe."
            />
            <div className="overflow-x-auto pb-4">
                <div className="grid min-w-full gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature, idx) => (
                        <GlowCard
                            key={feature.title}
                            delay={idx * 0.1}
                            className="h-full min-w-[240px]"
                        >
                            <motion.div className="flex flex-col gap-4">
                                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-electric/15 text-electric">
                                    <feature.Icon size={22} />
                                </span>
                                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                                <p className="text-sm text-white/70">{feature.description}</p>
                            </motion.div>
                        </GlowCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
