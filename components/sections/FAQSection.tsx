"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "../ui/SectionHeading";

const items = [
    {
        question: "OddinAI est-il compatible avec tous les sports ?",
        answer: "Oui, football, tennis et basket sont déjà couverts et d'autres disciplines arrivent bientôt.",
    },
    {
        question: "L'IA se met-elle à jour en direct ?",
        answer: "Oui, elle analyse en continu les cotes et tendances du marché avec une latence moyenne de 160 ms.",
    },
    {
        question: "Peut-on essayer gratuitement ?",
        answer: "Oui, cliquez sur \"Tester gratuitement\" pour rejoindre le canal Telegram et suivre les signaux.",
    },
    {
        question: "Mes données sont-elles sécurisées ?",
        answer: "Absolument. Nous ne partageons aucune donnée personnelle et respectons le RGPD.",
    },
];

export function FAQSection() {
    const [active, setActive] = useState(0);

    return (
        <section className="container space-y-12 py-16" id="faq">
            <SectionHeading
                eyebrow="QUESTIONS FRÉQUENTES"
                title="Transparence totale, zéro friction."
                subtitle="Accordéons accessibles, interactions Framer Motion."
                align="center"
            />
            <div className="space-y-4">
                {items.map((item, idx) => {
                    const open = active === idx;
                    return (
                        <div
                            key={item.question}
                            className="rounded-3xl border border-white/10 bg-white/5"
                        >
                            <button
                                className="flex w-full items-center justify-between px-6 py-5 text-left text-lg font-medium text-white"
                                onClick={() => setActive(open ? -1 : idx)}
                                aria-expanded={open}
                            >
                                {item.question}
                                <motion.span
                                    animate={{ rotate: open ? 90 : 0 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 14 }}
                                    className="text-electric"
                                >
                                    ▶
                                </motion.span>
                            </button>
                            <motion.div
                                initial={false}
                                animate={{ height: open ? "auto" : 0 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className="overflow-hidden"
                            >
                                <p className="px-6 pb-6 text-white/70">{item.answer}</p>
                            </motion.div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
