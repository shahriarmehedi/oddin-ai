"use client";

import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { SectionHeading } from "../ui/SectionHeading";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
    {
        quote: "L'analyse est bluffante, les alertes arrivent avant les autres sites.",
        author: "Adrien M.",
    },
    {
        quote: "Enfin une IA qui fait plus que des stats : elle comprend le jeu.",
        author: "Julien R.",
    },
    {
        quote: "Je ne parie plus pareil depuis OddinAI.",
        author: "Marc T.",
    },
];

export function TestimonialsSection() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true, align: "center" },
        [Autoplay({ delay: 6000, stopOnInteraction: true })]
    );

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on("select", onSelect);
        return () => {
            emblaApi.off("select", onSelect);
        };
    }, [emblaApi, onSelect]);

    const scrollTo = useCallback(
        (index: number) => emblaApi && emblaApi.scrollTo(index),
        [emblaApi]
    );

    return (
        <section className="relative overflow-hidden py-16" id="temoignages">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,230,118,0.08),transparent_60%)]" aria-hidden />
            <div className="container relative z-10 space-y-12">
                <SectionHeading
                    eyebrow="CE QU'ILS EN DISENT"
                    title="Des signaux qui changent le jeu."
                    align="center"
                />
                <div className="space-y-8">
                    <div className="flex items-center justify-center gap-3">
                        {testimonials.map((_, idx) => (
                            <button
                                key={`dot-${idx}`}
                                onClick={() => scrollTo(idx)}
                                className={`h-1.5 rounded-full transition-all ${idx === selectedIndex ? "w-12 bg-electric" : "w-6 bg-white/20 hover:bg-white/40"
                                    }`}
                                aria-label={`Aller au témoignage ${idx + 1}`}
                            />
                        ))}
                    </div>
                    <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-night to-transparent" aria-hidden />
                        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-night to-transparent" aria-hidden />
                        <Sparkles />
                        <div className="overflow-hidden max-w-2xl mx-auto" ref={emblaRef}>
                            <div className="flex">
                                {testimonials.map((item, idx) => (
                                    <motion.article
                                        data-card
                                        key={item.author}
                                        className="relative flex-[0_0_100%] min-w-0 rounded-[28px] border border-white/10 bg-gradient-to-b from-white/5 to-night/40 p-8 text-center shadow-card"
                                        initial={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.2 }}
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <div className="flex flex-col items-center gap-6">
                                            <div className="relative">
                                                <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-azure to-electric p-0.5">
                                                    <div className="flex h-full w-full items-center justify-center rounded-full bg-night text-xl font-bold text-white">
                                                        {getInitials(item.author)}
                                                    </div>
                                                </div>
                                                <motion.span
                                                    className="absolute inset-0 rounded-full border-2 border-electric/30"
                                                    animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0, 0.5] }}
                                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                                    aria-hidden
                                                />
                                            </div>
                                            <div className="flex flex-col items-center gap-2">
                                                <p className="text-xl font-semibold text-white">{item.author}</p>
                                                <Stars />
                                            </div>
                                        </div>
                                        <motion.div
                                            className="mt-8 text-xl leading-relaxed text-white/90 font-light"
                                            initial={{ opacity: 0, y: 16 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, delay: 0.1 }}
                                        >
                                            <p>"{item.quote}"</p>
                                        </motion.div>
                                    </motion.article>
                                ))}
                            </div>
                        </div>
                    </div>
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
        .replace(/\./g, "")
        .slice(0, 2)
        .toUpperCase();
}

function Stars() {
    return (
        <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, idx) => (
                <motion.span
                    key={`star-${idx}`}
                    className="text-sm text-electric"
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: idx * 0.15, ease: "easeInOut" }}
                >
                    ★
                </motion.span>
            ))}
        </div>
    );
}

function Sparkles() {
    const sparkles = [
        { top: "15%", left: "85%", delay: 0 },
        { top: "75%", left: "8%", delay: 0.6 },
        { top: "45%", left: "50%", delay: 1.2 },
    ];
    return (
        <div className="pointer-events-none absolute inset-0 z-20" aria-hidden>
            {sparkles.map((sparkle, idx) => (
                <motion.span
                    key={`spark-${idx}`}
                    className="absolute h-1.5 w-1.5 rotate-45 bg-gradient-to-br from-electric to-transparent"
                    style={{ top: sparkle.top, left: sparkle.left }}
                    animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.4, 1] }}
                    transition={{ duration: 2.4, repeat: Infinity, delay: sparkle.delay, ease: "easeInOut" }}
                />
            ))}
        </div>
    );
}
