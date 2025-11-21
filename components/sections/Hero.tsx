"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ComponentProps, useEffect, useMemo, useRef, useState } from "react";

type Notification = {
    title: string;
    detail: string;
    tag: string;
};

const notifications: Notification[] = [
    {
        title: "Safe Bet",
        detail: "+2.4% edge détectée",
        tag: "Football",
    },
    {
        title: "Value Bet",
        detail: "Cote 1.78 → 1.65",
        tag: "Tennis",
    },
    {
        title: "Momentum",
        detail: "Série de 4 victoires",
        tag: "Basket",
    },
];

const heroStats = [
    { label: "Matchs trackés", value: "24 700" },
    { label: "Alertes IA", value: "58 098" },
    { label: "Gains déclarés", value: "1 240 000 €" },
];

export function HeroSection() {
    const [current, setCurrent] = useState(0);
    const heroRef = useRef<HTMLElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    });
    const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
    const phoneScale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);

    useEffect(() => {
        const id = setInterval(() => {
            setCurrent((prev) => (prev + 1) % notifications.length);
        }, 6000);
        return () => clearInterval(id);
    }, []);

    const cycles = useMemo(() => notifications.concat(notifications), []);

    return (
        <motion.section
            id="hero"
            ref={heroRef}
            style={{ scale: heroScale, transformOrigin: "top center" }}
            className="relative isolate overflow-hidden pt-28 pb-20 sm:pt-36"
        >
            <motion.div
                aria-hidden
                className="absolute inset-0 bg-halo opacity-80"
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2 }}
            />
            <div className="noise-overlay" aria-hidden />
            <motion.div className="container relative z-10 grid items-center gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
                <div className="flex flex-col gap-8">
                    <div className="space-y-5">
                        <motion.h1
                            className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-white/50 text-2xl sm:text-3xl lg:text-4xl block mb-2">Si l'on veut gagner sa vie, il suffit de travailler.</span>
                            <span className="text-electric">Mais pour devenir riche…</span>
                            <br />
                            il faut OddinAI.
                        </motion.h1>
                        <motion.p
                            className="max-w-lg text-base text-white/50"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9 }}
                        >
                            La première application IA qui combine l'analyse de données en direct, les cotes en
                            temps réel et les statistiques live.
                        </motion.p>
                    </div>
                    <motion.div
                        className="flex flex-wrap items-center gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <a
                            className="btn-primary py-4 animate-pulse-glow"
                            href="https://t.me/+9P4yVW6WvQQyMDI0"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            Essayer gratuitement sur Telegram
                        </a>
                        <a className="btn-ghost py-4" href="#simulateur">
                            Voir le simulateur
                        </a>
                    </motion.div>
                    <div className="mt-6 grid gap-6 sm:grid-cols-3">
                        {heroStats.map((stat, idx) => (
                            <motion.div
                                key={stat.label}
                                className="space-y-1"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                            >
                                <p className="text-2xl font-semibold text-white">{stat.value}</p>
                                <p className="text-xs text-white/40 uppercase tracking-wide">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                    <div className="lg:hidden">
                        <div className="relative mt-8">
                            <div className="absolute inset-0 -z-10 rounded-full bg-azure/20 blur-[120px]" aria-hidden />
                            <PhoneMockup
                                current={current}
                                cycles={cycles}
                                className="mx-auto w-[220px] sm:w-[260px]"
                                imageSizes="(max-width: 640px) 70vw, 260px"
                                notificationHeightClass="h-44"
                            />
                        </div>
                    </div>
                </div>
                <div className="relative hidden lg:flex lg:justify-end lg:items-center">
                    <motion.div
                        className="absolute inset-0 -z-10 rounded-full bg-azure/20 blur-[120px]"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 0.6, scale: 1 }}
                        transition={{ duration: 1 }}
                    />
                    <PhoneMockup
                        current={current}
                        cycles={cycles}
                        className="w-[320px] lg:ml-auto"
                        imageSizes="320px"
                        priority
                        animate={{ rotateY: [4, -4, 4] }}
                        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                        style={{ scale: phoneScale }}
                    />
                </div>
            </motion.div>
        </motion.section>
    );
}

type PhoneMockupProps = ComponentProps<typeof motion.div> & {
    current: number;
    cycles: Notification[];
    imageSizes?: string;
    priority?: boolean;
    notificationHeightClass?: string;
};

function PhoneMockup({
    current,
    cycles,
    className,
    imageSizes = "320px",
    priority = false,
    notificationHeightClass,
    ...motionProps
}: PhoneMockupProps) {
    const containerClass = ["relative text-white", className].filter(Boolean).join(" ");
    const notificationsHeight = notificationHeightClass ?? "h-36";

    return (
        <motion.div className={containerClass} {...motionProps}>
            <div className="relative aspect-[410/808]">
                <Image
                    src="/iphone15-frame.svg"
                    alt="Mockup iPhone 15"
                    fill
                    sizes={imageSizes}
                    priority={priority}
                    className="pointer-events-none select-none"
                />
                <div className="absolute left-[8%] right-[8%] top-[4.5%] bottom-[6%] sm:top-[5%] sm:bottom-[7%] flex flex-col rounded-[28px] bg-night/95 p-5 shadow-[inset_0_0_30px_rgba(0,0,0,0.6)]">
                    <div className="mb-4 flex items-center justify-between text-xs text-white/70">
                        <span>OddinAI</span>
                        {/* <span>iPhone 15 Pro</span> */}
                    </div>
                    <div className="rounded-2xl bg-night/85 lg:p-4 shadow-inner">
                        <div className="flex items-center justify-between text-xs text-white/60">
                            <span>Live Feed</span>
                            <span className="rounded-full border border-white/10 px-2 py-0.5 text-[10px] text-white/70">
                                Win 66 %
                            </span>
                        </div>
                        <p className="text-xs lg:text-3xl font-semibold text-white">+6,92 % ROI</p>
                        <p className="text-xs text-white/60">Stake moyen 7 %</p>
                        <div className="mt-3 h-7 lg:h-20 w-full rounded-2xl bg-gradient-to-r from-azure/40 to-electric/40">
                            <div
                                className="h-full w-full"
                                style={{
                                    backgroundImage:
                                        "url('data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'180\\' height=\\'64\\' viewBox=\\'0 0 180 64\\'%3E%3Cg fill=\\'none\\' stroke=\\'%23ffffff\\' stroke-width=\\'3\\' opacity=\\'0.15\\'%3E%3Cpath d=\\'M0 48 Q 45 16 90 40 T 180 28\\' stroke-linecap=\\'round\\'/%3E%3C/g%3E%3C/svg%3E')",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center",
                                }}
                            />
                        </div>
                    </div>
                    <div className="mt-3 space-y-2.5">
                        <div className="text-xs uppercase text-white/40">Notifications</div>
                        <div className={`relative overflow-hidden rounded-2xl ${notificationsHeight}`}>
                            <motion.div
                                className="absolute inset-0"
                                animate={{ y: `-${current * 96}px` }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                style={{ willChange: "transform" }}
                            >
                                {cycles.map((notif, idx) => (
                                    <div
                                        key={`${notif.title}-${idx}`}
                                        className="mb-3 rounded-2xl border border-white/10 bg-white/5 p-4 shadow-inner"
                                    >
                                        <div className="flex items-center justify-between text-xs text-white/60">
                                            <span>{notif.tag}</span>
                                            <span>Live</span>
                                        </div>
                                        <p className="text-lg font-semibold text-white">{notif.title}</p>
                                        <p className="text-sm text-white/70">{notif.detail}</p>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
