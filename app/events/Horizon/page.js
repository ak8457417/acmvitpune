"use client"

import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Cloud, Link as LinkIcon, Cpu, GraduationCap, ArrowRight } from 'lucide-react';

const horizonEvents = [
    {
        title: "Cloud Computing",
        date: "14 Feb 2022",
        icon: <Cloud size={20} />,
        side: "left",
        desc: "Join Us To learn About the Basics and Few Tips and Suggestions Regarding the Above Mentioned Skills that Could Help Deliver Your Thoughts to an Audience."
    },
    {
        title: "Blockchain",
        date: "15 Feb 2022",
        icon: <LinkIcon size={20} />,
        side: "right",
        desc: "Join Us To learn About the Basics and Few Tips and Suggestions Regarding the Above Mentioned Skills that Could Help Deliver Your Thoughts to an Audience."
    },
    {
        title: "Machine Learning",
        date: "16 Feb 2022",
        icon: <Cpu size={20} />,
        side: "left",
        desc: "Join Us To learn About the Basics and Few Tips and Suggestions Regarding the Above Mentioned Skills that Could Help Deliver Your Thoughts to an Audience."
    },
    {
        title: "Way to Masters",
        date: "17 Feb 2022",
        icon: <GraduationCap size={20} />,
        side: "right",
        desc: "Join Us To learn About the Basics and Few Tips and Suggestions Regarding the Above Mentioned Skills that Could Help Deliver Your Thoughts to an Audience."
    }
];

const Horizon = () => {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className="min-h-screen bg-[#0a0f1d] py-28 px-6 text-white font-sans overflow-hidden">

            {/* --- Header Section --- */}
            <div className="max-w-4xl mx-auto text-center mb-28">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="inline-block px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold uppercase tracking-widest mb-4"
                >
                    Workshop Series
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="text-5xl md:text-6xl font-black tracking-tight"
                >
                    Horizon <span className="text-green-500">Event</span>
                </motion.h1>
                <p className="text-slate-400 mt-6 text-lg max-w-2xl mx-auto italic">
                    "Expanding your technical horizons, one day at a time."
                </p>
            </div>

            {/* --- Timeline Container --- */}
            <div ref={containerRef} className="relative max-w-6xl mx-auto">

                {/* Vertical Line Logic */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-slate-800/30" />
                <motion.div
                    style={{ scaleY, originY: 0 }}
                    className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-linear-to-b from-green-400 via-emerald-500 to-green-600 z-0 shadow-[0_0_15px_rgba(34,197,94,0.6)]"
                />

                <div className="space-y-32">
                    {horizonEvents.map((event, index) => (
                        <div
                            key={index}
                            className={`relative flex items-center justify-between w-full ${event.side === 'right' ? 'flex-row-reverse' : ''
                                }`}
                        >
                            {/* The Card */}
                            <motion.div
                                initial={{ opacity: 0, x: event.side === 'left' ? -60 : 60 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, ease: "easeOut" }}
                                className="w-[44%] relative group"
                            >
                                <div className="bg-white p-8 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative text-gray-900 group-hover:shadow-green-500/10 transition-all duration-500">

                                    {/* Triangle Pointer */}
                                    <div className={`absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-white rotate-45 
                                        ${event.side === 'left' ? '-right-2.5' : '-left-2.5'}`}
                                    />

                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-green-600 font-bold text-xs uppercase tracking-tighter bg-green-50 px-2 py-1 rounded">
                                            {event.date}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-black mb-3 group-hover:text-green-600 transition-colors">
                                        {event.title}
                                    </h3>

                                    <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                        {event.desc}
                                    </p>
                                </div>
                            </motion.div>

                            {/* Center Icon Circle */}
                            <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
                                <motion.div
                                    initial={{ scale: 0, rotate: -45 }}
                                    whileInView={{ scale: 1, rotate: 0 }}
                                    className="w-12 h-12 rounded-full bg-white border-4 border-slate-950 flex items-center justify-center text-green-600 z-10 shadow-xl"
                                >
                                    {event.icon}
                                </motion.div>
                            </div>

                            {/* Empty Side Spacer */}
                            <div className="w-[44%]" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Accent */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="mt-32 text-center text-slate-500 text-sm tracking-widest uppercase"
            >
                End of Series
            </motion.div>
        </div>
    );
};

export default Horizon;