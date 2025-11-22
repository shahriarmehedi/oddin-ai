"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Enhanced keyframe styles with better aesthetics
const enhancedStyles = `
  @keyframes float {
    0% {
      opacity: 0;
      transform: translateY(0) translateX(0) scale(1);
    }
    10% {
      opacity: 0.8;
    }
    90% {
      opacity: 0.8;
    }
    100% {
      opacity: 0;
      transform: translateY(-220px) translateX(15px) scale(1.2);
    }
  }

  @keyframes glowPulse {
    0%, 100% {
      box-shadow: 0 0 25px rgba(0, 255, 157, 0.4), 0 0 50px rgba(0, 255, 157, 0.15), inset 0 0 20px rgba(0, 255, 157, 0.1);
    }
    50% {
      box-shadow: 0 0 50px rgba(0, 255, 157, 0.9), 0 0 100px rgba(0, 255, 157, 0.4), inset 0 0 30px rgba(0, 255, 157, 0.2);
    }
  }

  @keyframes gradientShift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes borderGlow {
    0%, 100% {
      border-color: rgba(0, 255, 157, 0.3);
      box-shadow: 0 0 15px rgba(0, 255, 157, 0.25), inset 0 0 10px rgba(0, 255, 157, 0.1);
    }
    50% {
      border-color: rgba(0, 255, 157, 0.7);
      box-shadow: 0 0 30px rgba(0, 255, 157, 0.5), inset 0 0 20px rgba(0, 255, 157, 0.2);
    }
  }

  @keyframes shimmer {
    0% {
      background-position: -200% center;
    }
    100% {
      background-position: 200% center;
    }
  }

  .particle {
    position: absolute;
    width: 4px;
    height: 4px;
    background: radial-gradient(circle, rgba(0, 255, 157, 0.9) 0%, rgba(0, 255, 157, 0.4) 50%, transparent 100%);
    border-radius: 50%;
    animation: float 8s infinite ease-in-out;
    filter: blur(0.8px);
    box-shadow: 0 0 6px rgba(0, 255, 157, 0.6);
  }

  .particle:nth-child(1) { left: 10%; top: 20%; animation-delay: 0s; animation-duration: 7s; }
  .particle:nth-child(2) { left: 20%; top: 80%; animation-delay: 0.5s; animation-duration: 8.5s; }
  .particle:nth-child(3) { left: 30%; top: 40%; animation-delay: 1s; animation-duration: 7.5s; }
  .particle:nth-child(4) { left: 40%; top: 60%; animation-delay: 1.5s; animation-duration: 8s; }
  .particle:nth-child(5) { left: 50%; top: 30%; animation-delay: 2s; animation-duration: 7.8s; }
  .particle:nth-child(6) { left: 60%; top: 70%; animation-delay: 2.5s; animation-duration: 8.2s; }
  .particle:nth-child(7) { left: 70%; top: 50%; animation-delay: 3s; animation-duration: 7.3s; }
  .particle:nth-child(8) { left: 80%; top: 20%; animation-delay: 3.5s; animation-duration: 8.7s; }
  .particle:nth-child(9) { left: 90%; top: 60%; animation-delay: 4s; animation-duration: 7.6s; }
  .particle:nth-child(10) { left: 15%; top: 90%; animation-delay: 4.5s; animation-duration: 8.4s; }
  .particle:nth-child(11) { left: 25%; top: 10%; animation-delay: 5s; animation-duration: 7.9s; }
  .particle:nth-child(12) { left: 35%; top: 75%; animation-delay: 5.5s; animation-duration: 8.1s; }
  .particle:nth-child(13) { left: 45%; top: 45%; animation-delay: 6s; animation-duration: 7.7s; }
  .particle:nth-child(14) { left: 55%; top: 85%; animation-delay: 6.5s; animation-duration: 8.3s; }
  .particle:nth-child(15) { left: 65%; top: 15%; animation-delay: 7s; animation-duration: 7.4s; }
  .particle:nth-child(16) { left: 75%; top: 65%; animation-delay: 0.3s; animation-duration: 8.6s; }
  .particle:nth-child(17) { left: 85%; top: 35%; animation-delay: 0.8s; animation-duration: 7.2s; }
  .particle:nth-child(18) { left: 12%; top: 55%; animation-delay: 1.3s; animation-duration: 8.8s; }
  .particle:nth-child(19) { left: 68%; top: 25%; animation-delay: 1.8s; animation-duration: 7.1s; }
  .particle:nth-child(20) { left: 42%; top: 95%; animation-delay: 2.3s; animation-duration: 8.9s; }
`;

const traditionalProblems = [
    {
        text: "Tu te fies à ton instinct",
        subtitle: "Émotions > Données",
    },
    {
        text: "Tu regardes 3-4 stats de base",
        subtitle: "Vision limitée",
    },
    {
        text: "Tu ne vois pas les patterns cachés",
        subtitle: "Opportunités manquées",
    },
    {
        text: "Tu paries sur tes équipes préférées",
        subtitle: "Biais confirmé",
    },
];

const oddinAdvantages = [
    {
        text: "52 déclencheurs analysent chaque match",
        subtitle: "Météo · Arbitres · Momentum · Blessures · Stats avancées",
    },
    {
        text: "IA entraînée sur 50K+ matchs",
        subtitle: "Machine learning en temps réel",
    },
    {
        text: "Détection des patterns invisibles",
        subtitle: "Corrélations complexes identifiées",
    },
    {
        text: "Zéro émotion, 100% logique",
        subtitle: "Décisions basées sur la probabilité",
    },
];

const bottomFeatures = [
    {
        icon: "📊",
        title: "Données en temps réel",
        description: "Pull automatique des APIs : météo, stats, injuries",
    },
    {
        icon: "🎯",
        title: "Prédictions actionnables",
        description: "Pas de jargon. Juste : QUI · QUOI · POURQUOI · QUELLE COTE",
    },
    {
        icon: "🔄",
        title: "Amélioration continue",
        description: "L'IA apprend de chaque match pour s'affiner",
    },
];

export function DifferenceSection() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: enhancedStyles }} />
            <section className="relative overflow-hidden bg-gradient-to-b from-night via-night/95 to-night py-16 sm:py-20 lg:py-24" id="difference">
                {/* Header */}
                <div className="container relative z-10 mb-12 sm:mb-16 text-center space-y-4 sm:space-y-6">
                    <motion.div
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-electric/25 to-azure/25 border-2 border-electric/40 backdrop-blur-sm"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        style={{
                            animation: "borderGlow 2s ease-in-out infinite",
                        }}
                    >
                        <span className="text-electric text-xl drop-shadow-[0_0_8px_rgba(0,255,157,0.8)]">⚡</span>
                        <span className="text-xs sm:text-sm uppercase tracking-[0.2em] text-white font-bold">
                            L'AVANTAGE TECHNOLOGIQUE
                        </span>
                    </motion.div>

                    <motion.h2
                        className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight px-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        67% de précision, c'est pas de la chance.
                        <br />
                        <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                            C'est de la science.
                        </span>
                    </motion.h2>

                    <motion.p
                        className="text-base sm:text-lg text-white/60 max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        Découvre ce qui se passe réellement sous le capot
                    </motion.p>
                </div>

                {/* Split Screen Comparison */}
                <div className="container relative z-10">
                    <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 relative">
                        {/* LEFT SIDE - Traditional */}
                        <motion.div
                            className="traditional-side relative rounded-3xl border-2 border-red-900/30 bg-gradient-to-br from-red-950/50 via-red-900/30 to-red-950/20 p-6 sm:p-8 lg:p-10 overflow-hidden backdrop-blur-sm"
                            initial={{ opacity: 0, x: -100 }}
                            animate={isVisible ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                            style={{
                                boxShadow: "0 0 60px rgba(255, 0, 0, 0.2), inset 0 0 60px rgba(255, 0, 0, 0.03)",
                            }}
                        >
                            {/* Center Icon */}
                            <div className="flex justify-center mb-8">
                                <motion.div
                                    className="text-6xl sm:text-7xl lg:text-8xl"
                                    animate={{ opacity: [0.6, 1, 0.6] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                >
                                    🎲
                                </motion.div>
                            </div>

                            <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8">
                                Pari Traditionnel
                            </h3>

                            {/* Problems List */}
                            <div className="space-y-4 mb-8">
                                {traditionalProblems.map((problem, idx) => (
                                    <motion.div
                                        key={idx}
                                        className="flex items-start gap-3 bg-red-950/20 rounded-xl p-3 border border-red-900/20 hover:border-red-800/40 transition-colors"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                                        transition={{ duration: 0.6, delay: idx * 0.15 }}
                                    >
                                        <span className="text-red-500 text-xl flex-shrink-0 mt-1 drop-shadow-[0_0_4px_rgba(255,0,0,0.5)]">❌</span>
                                        <div>
                                            <p className="text-white font-medium text-sm sm:text-base">{problem.text}</p>
                                            <p className="text-red-300/60 text-xs sm:text-sm">{problem.subtitle}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Bottom Badge */}
                            <div className="bg-red-900/40 border border-red-700/30 rounded-xl px-4 py-3 text-center">
                                <p className="text-red-200 font-bold text-sm sm:text-base">
                                    Taux de réussite moyen : 48%
                                </p>
                            </div>
                        </motion.div>

                        {/* VS Badge - Center */}
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:flex">
                            <motion.div
                                className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-black text-white"
                                style={{
                                    background: "radial-gradient(circle, rgba(0,255,157,0.3) 0%, rgba(255,0,0,0.3) 100%)",
                                    border: "3px solid rgba(255,255,255,0.2)",
                                    boxShadow: "0 0 30px rgba(0,255,157,0.4), 0 0 30px rgba(255,0,0,0.4)",
                                }}
                                animate={{ rotate: 360 }}
                                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                            >
                                VS
                            </motion.div>
                        </div>

                        {/* Mobile VS Badge */}
                        <div className="flex justify-center lg:hidden -my-3">
                            <div
                                className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-black text-white"
                                style={{
                                    background: "radial-gradient(circle, rgba(0,255,157,0.3) 0%, rgba(255,0,0,0.3) 100%)",
                                    border: "3px solid rgba(255,255,255,0.2)",
                                }}
                            >
                                VS
                            </div>
                        </div>

                        {/* RIGHT SIDE - OddinAI */}
                        <motion.div
                            className="oddin-side relative rounded-3xl border-2 border-electric/50 bg-gradient-to-br from-emerald-950/60 via-emerald-900/40 to-emerald-950/30 p-6 sm:p-8 lg:p-10 overflow-hidden backdrop-blur-sm"
                            initial={{ opacity: 0, x: 100 }}
                            animate={isVisible ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
                            style={{
                                boxShadow: "0 0 80px rgba(0, 255, 157, 0.3), inset 0 0 80px rgba(0, 255, 157, 0.05)",
                            }}
                        >
                            {/* Floating Particles */}
                            <div className="particles-container hidden lg:block">
                                {Array.from({ length: 20 }).map((_, i) => (
                                    <div
                                        key={i}
                                        className="particle absolute w-[3px] h-[3px] bg-electric/60 rounded-full"
                                        style={{
                                            left: `${(i * 5 + 10) % 90}%`,
                                            animationDelay: `${i * 0.4}s`,
                                            animation: "float 8s infinite",
                                        }}
                                    />
                                ))}
                            </div>

                            {/* Center Icon */}
                            <div className="flex justify-center mb-8">
                                <motion.div
                                    className="text-6xl sm:text-7xl lg:text-8xl relative"
                                    animate={{ rotate: [0, 360] }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    style={{
                                        filter: "drop-shadow(0 0 20px rgba(0, 255, 157, 0.6))",
                                    }}
                                >
                                    <span>🧠</span>
                                    <span className="absolute -top-2 -right-2 text-3xl sm:text-4xl">⚡</span>
                                </motion.div>
                            </div>

                            <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8">
                                OddinAI Power
                            </h3>

                            {/* Advantages List */}
                            <div className="space-y-4 mb-8">
                                {oddinAdvantages.map((advantage, idx) => (
                                    <motion.div
                                        key={idx}
                                        className="flex items-start gap-3 bg-emerald-950/30 rounded-xl p-3 border border-electric/20 hover:border-electric/50 transition-all hover:shadow-[0_0_20px_rgba(0,255,157,0.2)]"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                                        transition={{ duration: 0.6, delay: 0.8 + idx * 0.15 }}
                                    >
                                        <span className="text-electric text-xl flex-shrink-0 mt-1 drop-shadow-[0_0_6px_rgba(0,255,157,0.8)]">✓</span>
                                        <div>
                                            <p className="text-white font-medium text-sm sm:text-base">{advantage.text}</p>
                                            <p className="text-electric/60 text-xs sm:text-sm">{advantage.subtitle}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Bottom Badge */}
                            <motion.div
                                className="bg-electric/20 border border-electric/40 rounded-xl px-4 py-3 text-center"
                                animate={{
                                    boxShadow: [
                                        "0 0 20px rgba(0, 255, 157, 0.3)",
                                        "0 0 40px rgba(0, 255, 157, 0.6)",
                                        "0 0 20px rgba(0, 255, 157, 0.3)",
                                    ],
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <p className="text-electric font-bold text-sm sm:text-base lg:text-lg">
                                    Taux de précision : 67%
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Bottom Features Section */}
                <div className="container relative z-10 mt-16 sm:mt-20 lg:mt-24">
                    <div className="rounded-3xl bg-gradient-to-r from-night via-emerald-950/10 to-night p-8 sm:p-12 lg:p-16">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                            {bottomFeatures.map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    className="text-center space-y-3 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-electric/40 hover:bg-white/10 transition-all duration-300"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.6, delay: 0.8 + idx * 0.2 }}
                                    whileHover={{ y: -8, boxShadow: "0 10px 40px rgba(0, 255, 157, 0.2)" }}
                                >
                                    <div className="text-5xl sm:text-6xl">{feature.icon}</div>
                                    <h4 className="text-lg sm:text-xl font-bold text-white">{feature.title}</h4>
                                    <p className="text-sm sm:text-base text-white/60">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="container relative z-10 mt-12 sm:mt-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.8, delay: 1.4 }}
                    >
                        <motion.a
                            href="https://t.me/+9P4yVW6WvQQyMDI0"
                            target="_blank"
                            rel="noreferrer noopener"
                            className="cta-button inline-block px-8 sm:px-12 lg:px-16 py-4 sm:py-5 rounded-full text-base sm:text-lg font-bold text-white relative overflow-hidden"
                            style={{
                                background: "linear-gradient(135deg, #00ff9d, #00d4aa, #00ffcc, #00ff9d)",
                                backgroundSize: "200% 200%",
                                animation: "gradientShift 3s ease infinite",
                                boxShadow: "0 20px 60px rgba(0, 255, 157, 0.4)",
                            }}
                            whileHover={{ scale: 1.05, rotate: 2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            ACCÈDE À L'IA MAINTENANT
                        </motion.a>
                    </motion.div>

                    <motion.p
                        className="mt-4 sm:mt-6 text-xs sm:text-sm text-white/60 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
                        initial={{ opacity: 0 }}
                        animate={isVisible ? { opacity: 1 } : {}}
                        transition={{ duration: 0.8, delay: 1.6 }}
                    >
                        <span className="flex items-center gap-1">
                            <span className="text-electric">✓</span> Essai gratuit 7 jours
                        </span>
                        <span className="flex items-center gap-1">
                            <span className="text-electric">✓</span> Sans CB
                        </span>
                        <span className="flex items-center gap-1">
                            <span className="text-electric">✓</span> 847 matchs analysés ce mois
                        </span>
                    </motion.p>
                </div>

                <style jsx>{`
                @keyframes float {
                    0% {
                        opacity: 0;
                        transform: translateY(0);
                    }
                    10% {
                        opacity: 0.5;
                    }
                    90% {
                        opacity: 0.5;
                    }
                    100% {
                        opacity: 0;
                        transform: translateY(-200px);
                    }
                }

                @keyframes glowPulse {
                    0%, 100% {
                        box-shadow: 0 0 20px rgba(0, 255, 157, 0.3);
                    }
                    50% {
                        box-shadow: 0 0 40px rgba(0, 255, 157, 0.8);
                    }
                }

                @keyframes gradientShift {
                    0% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                    100% {
                        background-position: 0% 50%;
                    }
                }
            `}</style>
            </section>
        </>
    );
}