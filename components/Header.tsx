"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
    { label: "Temps réel", href: "#temps-reel" },
    { label: "Simulateur", href: "#simulateur" },
    { label: "Chiffres", href: "#chiffres" },
    { label: "Plans", href: "#pricing" },
    { label: "Avis", href: "#temoignages" },
];

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    const NavItems = ({ className }: { className?: string }) => (
        <div className={className}>
            {navLinks.map((link) => (
                <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm font-medium text-white/70 transition hover:text-white"
                    onClick={closeMenu}
                >
                    {link.label}
                </Link>
            ))}
        </div>
    );

    return (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-night/70 backdrop-blur-2xl">
            <div className="container flex h-20 items-center justify-between gap-4">
                <Link href="#hero" className="flex items-center gap-3 text-lg font-semibold">
                    <Image
                        src="/logo.png"
                        alt="OddinAI"
                        width={140}
                        height={40}
                        className="h-8 w-auto"
                        priority
                    />
                </Link>
                <NavItems className="hidden items-center gap-8 md:flex" />
                <div className="hidden items-center gap-4 md:flex">
                    <a className="btn-ghost text-sm" href="#faq">
                        FAQ
                    </a>
                    <a
                        className="btn-primary"
                        href="https://t.me/oddinai"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        Accéder au canal
                    </a>
                </div>
                <button
                    className="md:hidden"
                    onClick={() => setMenuOpen((state) => !state)}
                    aria-label="Ouvrir la navigation"
                >
                    {menuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
                </button>
            </div>
            <AnimatePresence>
                {menuOpen && (
                    <motion.nav
                        className="border-t border-white/10 bg-night/95 px-6 py-6 md:hidden"
                        initial={{ opacity: 0, y: -12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                    >
                        <NavItems className="flex flex-col gap-4" />
                        <div className="mt-6 flex flex-col gap-3">
                            <a className="btn-ghost text-sm" href="#faq" onClick={closeMenu}>
                                FAQ
                            </a>
                            <a
                                className="btn-primary"
                                href="https://t.me/oddinai"
                                target="_blank"
                                rel="noreferrer noopener"
                                onClick={closeMenu}
                            >
                                Accéder au canal
                            </a>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}
