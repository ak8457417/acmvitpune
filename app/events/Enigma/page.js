"use client"

import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Code, Users, Terminal, Lightbulb, MessageSquare, ArrowRight } from 'lucide-react';

const enigmaEvents = [
    {
        title: "Devcup (Hackathon)",
        date: "25 Sept - 27 Sept 2022",
        icon: <Code size={20} />,
        side: "left",
        desc: "A hack is a “novel creation or solution to a problem”, and the purpose of a hackathon is to generate solutions to a problem or situation."
    },
    {
        title: "Seminar",
        date: "28 Sept 2022",
        icon: <Users size={20} />,
        side: "right",
        desc: "Dheeraj Shah, Founder & Host of Web3 with Dhee. A seminar on Web 3.0"
    },
    {
        title: "Dexterity (Coding-Contest)",
        date: "28 Sept 2022",
        icon: <Terminal size={20} />,
        side: "left",
        desc: "A 2 hour Competitive Programming Competition hosted at VIIT Campus with a prize pool of ₹ 5000."
    },
    {
        title: "Workshop",
        date: "29 Sept 2022",
        icon: <Lightbulb size={20} />,
        side: "right",
        desc: "Come join us for an offline session with Niraj Lunavat, Founder & CEO of AI India Innovation Center in making a live ML Project."
    },
    {
        title: "Panel Discussion",
        date: "29 Sept 2022",
        icon: <MessageSquare size={20} />,
        side: "left",
        desc: "A look at the future: Industry 5.0 - people working alongside robots and smart machines."
    }
];

const Enigma = () => {
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

            {/* --- Header --- */}
            <div className="max-w-4xl mx-auto text-center mb-32">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-6xl font-black tracking-tighter italic"
                >
                    ENIGMA <span className="text-green-500 text-7xl">’22</span>
                </motion.h1>
                <p className="text-slate-400 mt-4 text-lg font-medium tracking-widest uppercase">
                    The Ultimate Technical Fest
                </p>
                <div className="h-1.5 w-32 bg-green-500 mx-auto mt-6 rounded-full shadow-[0_0_20px_#22c55e]" />
            </div>

            {/* --- Timeline --- */}
            <div ref={containerRef} className="relative max-w-6xl mx-auto">

                {/* Central Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-slate-800/30" />
                <motion.div
                    style={{ scaleY, originY: 0 }}
                    className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-linear-to-b from-green-400 via-emerald-500 to-green-600 z-0 shadow-[0_0_15px_#22c55e]"
                />

                <div className="space-y-32">
                    {enigmaEvents.map((event, index) => (
                        <div
                            key={index}
                            className={`relative flex items-center justify-between w-full ${event.side === 'right' ? 'flex-row-reverse' : ''
                                }`}
                        >
                            {/* Event Card */}
                            <motion.div
                                initial={{ opacity: 0, x: event.side === 'left' ? -60 : 60 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                                className="w-[44%] relative group"
                            >
                                <div className="bg-white p-8 rounded-2xl shadow-2xl relative text-gray-900 border-b-4 border-green-500 transition-transform hover:-translate-y-2 duration-300">

                                    {/* Triangle Pointer */}
                                    <div className={`absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-white rotate-45 
                                        ${event.side === 'left' ? '-right-2.5' : '-left-2.5'}`}
                                    />

                                    <span className="text-[10px] font-black bg-slate-900 text-white px-2 py-1 rounded mb-4 inline-block tracking-tighter">
                                        {event.date}
                                    </span>

                                    <h3 className="text-2xl font-black mb-3 leading-tight group-hover:text-green-600 transition-colors">
                                        {event.title}
                                    </h3>

                                    <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                        {event.desc}
                                    </p>
                                </div>
                            </motion.div>

                            {/* Center Icon */}
                            <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    className="w-12 h-12 rounded-full bg-white border-4 border-slate-950 flex items-center justify-center text-slate-900 z-10 shadow-xl"
                                >
                                    {event.icon}
                                </motion.div>
                            </div>

                            <div className="w-[44%]" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Enigma;