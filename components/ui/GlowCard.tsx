"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlowCardProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

export function GlowCard({ children, className, delay = 0 }: GlowCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay }}
            className={clsx(
                "group relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-b from-white/5 via-white/3 to-transparent p-6 shadow-card",
                className
            )}
        >
            <span
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,230,118,0.12),transparent_55%)] opacity-60"
                aria-hidden
            />
            <span
                className="pointer-events-none absolute -left-1/2 top-1/2 h-[140%] w-[140%] -translate-y-1/2 rotate-45 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 transition group-hover:opacity-100"
                aria-hidden
            />
            <div className="relative z-10">{children}</div>
        </motion.div>
    );
}
