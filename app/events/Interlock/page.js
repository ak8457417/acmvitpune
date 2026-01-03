"use client"

import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const interlockData = [
    {
        round: "Round 1",
        date: "21 Feb 2023",
        side: "left",
        icon: "1",
        desc: "Consisted a set 12 questions with more than 25+ teams (more than 100 participants) out of which only fastest 8 teams move to next round."
    },
    {
        round: "Round 2",
        date: "21 Feb 2023",
        side: "right",
        icon: "2",
        desc: "Qualified teams compete for 1 hour to solve 10 questions, only 2 teams with all answers correct win the game."
    },
];

const Interlock = () => {
    const ref = useRef(null);

    // Track scroll progress for the line animation
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start center", "end center"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className="min-h-screen bg-[#0a0f1d] py-28 px-6 text-white font-sans">

            {/* --- Event Title --- */}
            <div className="text-center mb-24">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-5xl font-bold text-white tracking-tight"
                >
                    Interlock <span className="text-green-400">Competition</span>
                </motion.h1>
                <div className="h-1 w-24 bg-green-500 mx-auto mt-4 rounded-full shadow-[0_0_15px_#22c55e]" />
            </div>

            <div ref={ref} className="relative max-w-5xl mx-auto">

                {/* 1. Static Background Path (Dim) */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-slate-800/40" />

                {/* 2. Animated Growing Line (Bright Green/White) */}
                <motion.div
                    style={{ scaleY, originY: 0 }}
                    className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-linear-to-b from-green-400 to-emerald-600 z-0 shadow-[0_0_10px_#22c55e]"
                />

                {/* --- Timeline Items --- */}
                <div className="space-y-32">
                    {interlockData.map((item, index) => (
                        <div
                            key={index}
                            className={`relative flex items-center justify-between w-full ${item.side === 'right' ? 'flex-row-reverse' : ''
                                }`}
                        >
                            {/* Card Content */}
                            <motion.div
                                initial={{ opacity: 0, x: item.side === 'left' ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="w-[44%] relative"
                            >
                                <div className="bg-white p-6 rounded-2xl shadow-2xl relative">
                                    {/* Triangle Pointer */}
                                    <div className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rotate-45 
                                        ${item.side === 'left' ? '-right-2' : '-left-2'}`}
                                    />

                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-2xl font-bold text-gray-900">{item.round}</h3>
                                        <span className="text-xs font-bold bg-green-100 text-green-700 px-2 py-1 rounded-md">
                                            {item.date}
                                        </span>
                                    </div>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.div>

                            {/* Center Circle Indicator */}
                            <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    className="w-12 h-12 rounded-full bg-white border-4 border-slate-900 flex items-center justify-center text-black font-black z-10 shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                                >
                                    {item.icon}
                                </motion.div>
                            </div>

                            {/* Spacer */}
                            <div className="w-[44%]" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Interlock;