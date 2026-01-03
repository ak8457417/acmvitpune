"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const LandingPage = () => {
    return (
        <div className="relative min-h-screen bg-[#0a0f1d] overflow-hidden flex flex-col items-center justify-center px-6">

            <div className="absolute top-[-10%] left-[-10%] w-125 h-125 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-125 h-125 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl w-full flex justify-around items-center z-10">

                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col gap-6"
                >
                    <div className="space-y-2">
                        <span className="text-emerald-400 text-sm font-bold uppercase tracking-widest">
                            ACM Student Chapter
                        </span>
                        <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter">
                            VIIT <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-cyan-400">ACM</span>
                        </h1>
                    </div>

                    <p className="text-2xl md:text-3xl font-medium text-slate-300 italic border-l-4 border-emerald-500 pl-6 py-2">
                        “We rise by lifting others”
                    </p>
                </motion.div>

                <div className="flex justify-center lg:justify-end">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 25,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="relative w-64 h-64 md:w-96 md:h-96"
                    >
                        <Image
                            src="/assets/acmlogo.png"
                            alt="VIIT ACM Logo"
                            fill
                            className="object-contain drop-shadow-[0_0_20px_rgba(16,185,129,0.15)]"
                        />
                    </motion.div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 flex flex-col items-center gap-2"
            >
                <div className="w-px h-12 bg-linear-to-b from-emerald-500 to-transparent" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500">Scroll Journey</span>
            </motion.div>
        </div>
    )
}

export default LandingPage