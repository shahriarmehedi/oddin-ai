"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeadingProps {
    eyebrow?: string;
    title: ReactNode;
    subtitle?: ReactNode;
    align?: "left" | "center";
}

export function SectionHeading({
    eyebrow,
    title,
    subtitle,
    align = "left",
}: SectionHeadingProps) {
    return (
        <div
            className={`flex flex-col gap-4 ${align === "center" ? "text-center items-center" : "text-left"}`}
        >
            {eyebrow && (
                <motion.span
                    initial={{ opacity: 0, y: -8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.4 }}
                    className="eyebrow"
                >
                    {eyebrow}
                </motion.span>
            )}
            <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5 }}
                className="text-3xl tracking-tight text-white/95 sm:text-4xl lg:text-5xl font-semibold"
            >
                {title}
            </motion.h2>
            {subtitle && (
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.6 }}
                    className={`max-w-2xl text-base sm:text-lg text-white/70 ${align === "center" ? "mx-auto" : ""}`}
                >
                    {subtitle}
                </motion.p>
            )}
        </div>
    );
}
