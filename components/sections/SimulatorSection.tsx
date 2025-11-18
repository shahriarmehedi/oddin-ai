"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { SectionHeading } from "../ui/SectionHeading";

const WIN_RATE = 0.66;
const AVERAGE_ODDS = 1.62;
const STAKE = 0.07;
const EXPECTED_ROI = WIN_RATE * (AVERAGE_ODDS - 1) - (1 - WIN_RATE); // ≈ 0.0692

const formatCurrency = (value: number) =>
    value.toLocaleString("fr-FR", {
        style: "currency",
        currency: "EUR",
        maximumFractionDigits: 0,
    });

function useDebounced<T>(value: T, delay = 120) {
    const [debounced, setDebounced] = useState(value);
    useEffect(() => {
        const id = setTimeout(() => setDebounced(value), delay);
        return () => clearTimeout(id);
    }, [value, delay]);
    return debounced;
}

const presets = [
    { label: "Sprint 30j", capital: 1000, duration: 1, bets: 1 },
    { label: "Quarter Pro", capital: 2500, duration: 3, bets: 2 },
    { label: "Elite 6m", capital: 5000, duration: 6, bets: 3.5 },
];

export function SimulatorSection() {
    const [capitalInput, setCapitalInput] = useState(1000);
    const [durationInput, setDurationInput] = useState(1); // months
    const [betsInput, setBetsInput] = useState(1);
    const [peakKey, setPeakKey] = useState(0);
    const liveRegionRef = useRef<HTMLParagraphElement | null>(null);

    const capital = useDebounced(capitalInput);
    const duration = useDebounced(durationInput);
    const betsPerDay = useDebounced(betsInput);

    const result = useMemo(() => {
        const days = duration * 30;
        const totalBets = Math.max(1, Math.round(days * betsPerDay));
        const growthPerBet = 1 + STAKE * EXPECTED_ROI;
        const finalBalance = capital * Math.pow(growthPerBet, totalBets);
        const gain = finalBalance - capital;
        const gainPercent = (gain / capital) * 100;

        return { days, totalBets, finalBalance, gain, gainPercent };
    }, [capital, duration, betsPerDay]);

    useEffect(() => {
        if (!liveRegionRef.current) return;
        liveRegionRef.current.textContent = `Résultat simulé: ${formatCurrency(
            result.finalBalance
        )} soit ${result.gainPercent.toFixed(1)} %`; // aria-live update
    }, [result.finalBalance, result.gainPercent]);

    useEffect(() => {
        setPeakKey((key) => key + 1);
    }, [result.finalBalance]);

    const chart = useMemo(() => {
        const steps = 28;
        const growthPerBet = 1 + STAKE * EXPECTED_ROI;
        const values = Array.from({ length: steps }, (_, idx) => {
            const ratio = idx / (steps - 1);
            const betsAtPoint = Math.round(result.totalBets * ratio);
            return capital * Math.pow(growthPerBet, betsAtPoint);
        });
        const min = Math.min(...values);
        const max = Math.max(...values);
        const width = 480;
        const height = 220;
        const path = values
            .map((value, idx) => {
                const x = (idx / (values.length - 1)) * width;
                const normalized = max === min ? 0 : (value - min) / (max - min);
                const y = height - normalized * height;
                return `${idx === 0 ? "M" : "L"}${x},${y}`;
            })
            .join(" ");

        const area = `${path} L${width},${height} L0,${height} Z`;

        return { path, area, width, height };
    }, [capital, result.totalBets]);

    return (
        <section id="simulateur" className="relative overflow-hidden py-24">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,136,229,0.12),transparent_60%)] opacity-60" aria-hidden />
            <div className="container relative z-10 space-y-16">
                <SectionHeading
                    eyebrow="SIMULATEUR DE GAINS"
                    title="Et si vous aviez suivi nos signaux depuis le début ?"
                    subtitle="Ajustez le montant, la durée et le nombre de paris. L'IA calcule le potentiel réel."
                />
                <div className="grid gap-8 lg:grid-cols-2">
                    <motion.div
                        className="space-y-8 rounded-[32px] border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-8 backdrop-blur-sm"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex flex-wrap gap-2">
                            {presets.map((preset) => (
                                <button
                                    key={preset.label}
                                    onClick={() => {
                                        setCapitalInput(preset.capital);
                                        setDurationInput(preset.duration);
                                        setBetsInput(preset.bets);
                                    }}
                                    className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-wider text-white/60 transition hover:border-electric/50 hover:bg-electric/10 hover:text-white"
                                >
                                    {preset.label}
                                </button>
                            ))}
                        </div>
                        <div className="space-y-6">
                            <label className="flex flex-col gap-3" htmlFor="capital">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-white/60">Capital de départ</span>
                                    <span className="text-lg font-semibold text-white">{formatCurrency(capitalInput)}</span>
                                </div>
                                <input
                                    id="capital"
                                    type="range"
                                    min={100}
                                    max={10000}
                                    step={50}
                                    value={capitalInput}
                                    onChange={(event) => setCapitalInput(Number(event.target.value))}
                                    aria-label="Capital de départ"
                                    className="w-full"
                                />
                            </label>
                            <label className="flex flex-col gap-3" htmlFor="duration">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-white/60">Durée (mois)</span>
                                    <span className="text-lg font-semibold text-white">{durationInput} mois</span>
                                </div>
                                <input
                                    id="duration"
                                    type="range"
                                    min={1}
                                    max={12}
                                    step={1}
                                    value={durationInput}
                                    onChange={(event) => setDurationInput(Number(event.target.value))}
                                    aria-label="Durée en mois"
                                    className="w-full"
                                />
                            </label>
                            <label className="flex flex-col gap-3" htmlFor="bets">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-white/60">Paris par jour</span>
                                    <span className="text-lg font-semibold text-white">{betsInput.toFixed(1)}</span>
                                </div>
                                <input
                                    id="bets"
                                    type="range"
                                    min={0.5}
                                    max={5}
                                    step={0.5}
                                    value={betsInput}
                                    onChange={(event) => setBetsInput(Number(event.target.value))}
                                    aria-label="Nombre de paris par jour"
                                    className="w-full"
                                />
                            </label>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="space-y-1 rounded-2xl border border-white/10 bg-white/5 p-4">
                                <p className="text-xs uppercase text-white/50">Total de paris</p>
                                <p className="text-2xl font-bold text-white">{result.totalBets}</p>
                            </div>
                            <div className="space-y-1 rounded-2xl border border-white/10 bg-white/5 p-4">
                                <p className="text-xs uppercase text-white/50">ROI attendu</p>
                                <p className="text-2xl font-bold text-electric">
                                    +{result.gainPercent.toFixed(1)} %
                                </p>
                            </div>
                        </div>
                        <p ref={liveRegionRef} className="sr-only" aria-live="polite" />
                    </motion.div>
                    <motion.div
                        className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-8"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="absolute inset-0 bg-azure/5 blur-[100px]" aria-hidden />
                        <div className="relative space-y-6">
                            <div className="space-y-2">
                                <p className="text-xs uppercase tracking-wider text-white/40">Projection OddinAI</p>
                                <p className="text-4xl font-bold text-white">{formatCurrency(result.finalBalance)}</p>
                                <p className="text-sm text-white/60">
                                    Gain estimé <span className="font-semibold text-electric">{formatCurrency(result.gain)}</span>
                                </p>
                            </div>
                            <div className="relative rounded-2xl border border-white/10 bg-night/40 p-4">
                                <svg
                                    viewBox={`0 0 ${chart.width} ${chart.height}`}
                                    width="100%"
                                    height="200"
                                    aria-label="Projection de gains"
                                >
                                    <defs>
                                        <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="rgba(0,230,118,0.35)" />
                                            <stop offset="100%" stopColor="rgba(10,14,24,0)" />
                                        </linearGradient>
                                    </defs>
                                    <motion.path
                                        d={chart.area}
                                        fill="url(#area)"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.8 }}
                                    />
                                    <motion.path
                                        d={chart.path}
                                        fill="none"
                                        stroke="#00E676"
                                        strokeWidth={3}
                                        strokeLinecap="round"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 1.2, ease: "easeInOut" }}
                                    />
                                </svg>
                            </div>
                            <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                                <span className="text-xs uppercase text-white/50">Période</span>
                                <span className="text-sm font-semibold text-white">
                                    {result.totalBets} paris · {result.days} jours
                                </span>
                            </div>
                            <motion.div key={peakKey} className="pointer-events-none absolute inset-0 flex items-center justify-center">
                                {Array.from({ length: 5 }).map((_, idx) => (
                                    <motion.span
                                        key={idx}
                                        className="absolute h-2 w-2 rounded-full bg-electric"
                                        initial={{ opacity: 1, scale: 0 }}
                                        animate={{
                                            opacity: 0,
                                            scale: 5,
                                            x: (Math.random() - 0.5) * 100,
                                            y: (Math.random() - 0.5) * 60,
                                        }}
                                        transition={{ duration: 1, ease: "easeOut", delay: idx * 0.04 }}
                                    />
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
