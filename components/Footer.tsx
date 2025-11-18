"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Footer() {
    const links = [
        { label: "Jeu responsable", href: "#" },
        { label: "Mentions légales", href: "#" },
        { label: "Conditions générales", href: "#" },
    ];

    return (
        <footer className="border-t border-white/10 bg-night py-16" id="footer">
            <div className="container space-y-8 text-center">
                <motion.div
                    className="mx-auto w-36"
                    animate={{ scale: [1, 1.03, 1] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                >
                    <Image
                        src="/logo.png"
                        alt="OddinAI"
                        width={180}
                        height={60}
                        className="h-auto w-full"
                    />
                </motion.div>
                <p className="text-sm text-white/70">© 2025 OddinAI. Tous droits réservés.</p>
                <div className="flex flex-wrap justify-center gap-6 text-sm text-white/70">
                    {links.map((link) => (
                        <a key={link.label} href={link.href} className="relative glow-line transition hover:text-white">
                            {link.label}
                        </a>
                    ))}
                </div>
                <div className="flex items-center justify-center gap-3 text-xs text-white/50">
                    <span>Changer de langue</span>
                    <span className="text-white/30">|</span>
                    <span>€</span>
                </div>
                <div className="text-xs text-white/60">
                    <p>OddinAI n'est pas un site de pari. Les analyses fournies ne garantissent aucun gain.</p>
                    <p>Jouez de manière responsable. Aide au jeu responsable.</p>
                </div>
            </div>
        </footer>
    );
}
