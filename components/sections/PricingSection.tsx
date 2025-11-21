"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import { useState } from "react";
import { GlowCard } from "../ui/GlowCard";
import { SectionHeading } from "../ui/SectionHeading";

const plans = [
    { name: "Starter", description: "Pour débuter en toute simplicité", price: 29 },
    { name: "Pro", description: "L'expérience complète (recommandé)", price: 49, featured: true },
    { name: "Elite", description: "Pour les plus ambitieux", price: 99 },
    { name: "VIP", description: "Sur mesure, alertes exclusives", price: 0 },
];

export function PricingSection() {
    const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

    const formatPrice = (price: number) => {
        if (price === 0) return "Sur demande";
        const amount = billing === "monthly" ? price : price * 10;
        return `${amount} €${billing === "monthly" ? "/mois" : "/an"}`;
    };

    return (
        <section className="container space-y-12 py-16" id="pricing">
            <SectionHeading
                eyebrow="PLANS ET TARIFS"
                title="Choisissez votre façon de gagner."
                subtitle="Stripe-ready · Prix en euros · Expérience premium"
                align="center"
            />
            <div className="flex justify-center">
                <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 p-2">
                    {["monthly", "yearly"].map((option) => (
                        <button
                            key={option}
                            className={clsx(
                                "rounded-full px-5 py-2 text-sm font-medium capitalize transition",
                                billing === option
                                    ? "bg-electric text-night shadow-halo"
                                    : "text-white/60 hover:text-white"
                            )}
                            onClick={() => setBilling(option as "monthly" | "yearly")}
                        >
                            {option === "monthly" ? "Mensuel" : "Annuel (-2 mois)"}
                        </button>
                    ))}
                </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-4">
                {plans.map((plan, idx) => (
                    <GlowCard key={plan.name} delay={idx * 0.1} className="h-full">
                        <div className="flex h-full flex-col gap-6">
                            <div>
                                <div className="flex items-center gap-3">
                                    <h3 className="text-2xl font-semibold text-white">{plan.name}</h3>
                                    {plan.featured && (
                                        <span className="rounded-full bg-electric/15 px-3 py-1 text-xs font-semibold text-electric">
                                            RECOMMANDÉ
                                        </span>
                                    )}
                                </div>
                                <p className="mt-2 text-sm text-white/70">{plan.description}</p>
                            </div>
                            <div>
                                <p className="text-3xl font-semibold text-white">{formatPrice(plan.price)}</p>
                                {plan.price !== 0 && billing === "yearly" && (
                                    <p className="text-xs text-white/60">Deux mois offerts</p>
                                )}
                            </div>
                            <ul className="flex flex-1 flex-col gap-3 text-sm text-white/70">
                                <li>Accès aux alertes IA</li>
                                <li>Support Telegram prioritaire</li>
                                <li>Pré-intégration Stripe</li>
                                <li>Rapports PDF premium</li>
                            </ul>
                            <button className="btn-primary mt-auto w-full">Commencer</button>
                        </div>
                    </GlowCard>
                ))}
            </div>
        </section>
    );
}
