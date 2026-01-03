"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();

    return (
        <nav className="fixed top-0 left-0 w-full z-50">
            {/* Glass Background */}
            <div className="bg-black/60 backdrop-blur-xl border-b border-blue-500/20 shadow-lg">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-between h-20">

                        {/* ===== LEFT LOGOS ===== */}
                        <div className="flex items-center gap-6">
                            <Image
                                src="/assets/viitlogo.png"
                                alt="VIIT Logo"
                                width={53}
                                height={53}
                                priority
                                className="object-contain rounded-full"
                            />
                            <Image
                                src="/assets/acmlogo.png"
                                alt="ACM Logo"
                                width={93}
                                height={93}
                                priority
                                className="object-contain"
                            />
                        </div>

                        {/* ===== CENTER NAV LINKS (Manual Links) ===== */}
                        <div className="hidden md:flex items-center gap-10">

                            {/* Home Link */}
                            <Link
                                href="/"
                                className={`relative text-sm font-medium tracking-wide transition-colors ${pathname === "/" ? "text-blue-400" : "text-slate-300 hover:text-blue-400"
                                    }`}
                            >
                                Home
                                {pathname === "/" && (
                                    <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-blue-500 rounded-full" />
                                )}
                            </Link>

                            <Link
                                href="/#about"
                                className={`relative text-sm font-medium tracking-wide transition-colors ${pathname === "/#about" ? "text-blue-400" : "text-slate-300 hover:text-blue-400"
                                    }`}
                            >
                                About
                                {pathname === "/#about" && (
                                    <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-blue-500 rounded-full" />
                                )}
                            </Link>

                            <Link
                                href="/#event"
                                className={`relative text-sm font-medium tracking-wide transition-colors ${pathname === "/#event" ? "text-blue-400" : "text-slate-300 hover:text-blue-400"
                                    }`}
                            >
                                Events
                                {pathname === "/#event" && (
                                    <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-blue-500 rounded-full" />
                                )}
                            </Link>

                            {/* Gallery Link */}
                            <Link
                                href="/gallery"
                                className={`relative text-sm font-medium tracking-wide transition-colors ${pathname === "/gallery" ? "text-blue-400" : "text-slate-300 hover:text-blue-400"
                                    }`}
                            >
                                Gallery
                                {pathname === "/gallery" && (
                                    <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-blue-500 rounded-full" />
                                )}
                            </Link>

                            {/* Team Link */}
                            <Link
                                href="/team"
                                className={`relative text-sm font-medium tracking-wide transition-colors ${pathname === "/team" ? "text-blue-400" : "text-slate-300 hover:text-blue-400"
                                    }`}
                            >
                                Team
                                {pathname === "/team" && (
                                    <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-blue-500 rounded-full" />
                                )}
                            </Link>
                        </div>

                        {/* ===== RIGHT BUTTON ===== */}
                        <div className="flex items-center">
                            <a
                                href="/#contact"
                                className="px-6 py-2.5 rounded-full bg-blue-600 text-white font-semibold
                                hover:bg-blue-700 transition shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                            >
                                Contact us
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;