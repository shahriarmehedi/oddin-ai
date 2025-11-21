"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { SectionHeading } from "../ui/SectionHeading";

const paragraphs = [
    "OddinAI est développé par une équipe passionnée de sport, de logique et de technologie.",
    "Notre mission : rendre l'analyse intelligente accessible à tous.",
    "Nous croyons que la performance ne dépend pas du hasard, mais de la compréhension — et de l'adaptation.",
];

const carouselItems = [
    {
        name: "Élise Garreau",
        role: "Lead IA",
        quote: "Nous construisons une IA qui lit le match comme un trader lit un carnet d'ordres.",
    },
    {
        name: "Maxime Court",
        role: "Head of Data",
        quote: "Chaque signal OddinAI passe par 42 validations statistiques avant d'être poussé.",
    },
    {
        name: "Sarah Blanc",
        role: "Design Ops",
        quote: "L'expérience doit être aussi fluide qu'un tableau de bord Figma, même sur mobile.",
    },
    {
        name: "Léo Dumas",
        role: "Realtime Lead",
        quote: "On capte les swings de cotes en 180 ms pour que nos membres agissent avant le marché.",
    },
];

const CARD_WIDTH = 320;
const CARD_GAP = 24;

export function AboutSection() {
    const [currentCard, setCurrentCard] = useState(0);
    const trackRef = useRef<HTMLDivElement | null>(null);
    const totalCards = carouselItems.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentCard((prev) => (prev + 1) % totalCards);
        }, 6000);
        return () => clearInterval(interval);
    }, [totalCards]);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;
        const scrollLeft = currentCard * (CARD_WIDTH + CARD_GAP);
        track.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }, [currentCard]);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;
        const handleScroll = () => {
            const idx = Math.round(track.scrollLeft / (CARD_WIDTH + CARD_GAP));
            setCurrentCard(idx);
        };
        track.addEventListener("scroll", handleScroll, { passive: true });
        return () => track.removeEventListener("scroll", handleScroll);
    }, []);

    const indicators = useMemo(() => Array.from({ length: totalCards }), [totalCards]);

    return (
        <section className="container space-y-12 py-16" id="a-propos">
            <SectionHeading
                eyebrow="À PROPOS"
                title="OddinAI. Là où la logique rencontre la performance."
                align="center"
            />

            <div className="relative rounded-[32px] border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-10 text-center">
                <div className="absolute inset-0 bg-grid-glow opacity-20" aria-hidden />
                <div className="relative space-y-5 text-lg text-white/80">
                    {paragraphs.map((text) => (
                        <motion.p
                            key={text}
                            initial={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            {text}
                        </motion.p>
                    ))}
                </div>
                <div className="mt-8">
                    <a
                        className="btn-primary"
                        href="https://t.me/+9P4yVW6WvQQyMDI0"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        Rejoindre la communauté
                    </a>
                </div>
            </div>


        </section>
    );
}

function getInitials(name: string) {
    return name
        .split(" ")
        .map((part) => part.charAt(0))
        .join("")
        .toUpperCase();
}

function Sparkles() {
    const sparkles = [
        { top: "12%", left: "78%", delay: 0 },
        { top: "68%", left: "10%", delay: 0.4 },
        { top: "30%", left: "55%", delay: 0.8 },
    ];
    return (
        <div className="pointer-events-none" aria-hidden>
            {sparkles.map((sparkle, idx) => (
                <motion.span
                    key={`sparkle-${idx}`}
                    className="absolute h-2 w-2 rotate-45 bg-gradient-to-br from-white to-transparent"
                    style={{ top: sparkle.top, left: sparkle.left }}
                    animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
                    transition={{ duration: 2.4, repeat: Infinity, delay: sparkle.delay, ease: "easeInOut" }}
                />
            ))}
        </div>
    );
}
