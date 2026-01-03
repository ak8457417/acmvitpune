// "use client"

// import React from 'react'
// import { motion } from 'framer-motion'
// import { Calendar, User, ExternalLink } from 'lucide-react'

// const PlacementDiaries = () => {
//     const diaries = [
//         {
//             id: 1,
//             title: "Placement Diaries 2023",
//             alumni: "Shlok Zanwar",
//             date: "3 Feb 2023",
//             company: "Ansys Software",
//             description: "Get in touch with our fellow alumni ~ Shlok Zanwar, placed at Ansys Software. An interactive and insightful online event which will guide you on your road to placements!"
//         },
//         {
//             id: 2,
//             title: "Placement Diaries 2023",
//             alumni: "Rohan Gupta",
//             date: "3 Feb 2023",
//             company: "JP Morgan",
//             description: "Get in touch with our fellow alumni ~ Rohan Gupta, placed at JP Morgan. An interactive and insightful online event which will guide you on your road to placements!"
//         },
//         {
//             id: 3,
//             title: "Placement Diaries 2023",
//             alumni: "Aiman Shivani",
//             date: "3 Feb 2023",
//             company: "JP Morgan",
//             description: "Get in touch with our fellow alumni ~ Aiman Shivani, placed at JP Morgan. An interactive and insightful online event which will guide you on your road to placements!"
//         }
//     ];

//     const containerVariants = {
//         hidden: { opacity: 0 },
//         visible: {
//             opacity: 1,
//             transition: { staggerChildren: 0.2 }
//         }
//     };

//     const cardVariants = {
//         hidden: { opacity: 0, y: 20 },
//         visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
//     };

//     return (
//         <div className="min-h-screen bg-[#0a0f1d] text-white py-28 px-6 font-sans">

//             {/* --- Header --- */}
//             <div className="max-w-4xl mx-auto text-center mb-20">
//                 <motion.h1
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     className="text-5xl font-extrabold bg-linear-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent"
//                 >
//                     Placement Diaries
//                 </motion.h1>
//                 <p className="text-slate-400 mt-4 text-lg">Insights and experiences from our top-placed alumni</p>
//                 <div className="h-1 w-24 bg-green-500 mx-auto mt-6 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.5)]" />
//             </div>

//             {/* --- Diaries Grid --- */}
//             <motion.div
//                 className="max-w-5xl mx-auto space-y-10"
//                 variants={containerVariants}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//             >
//                 {diaries.map((diary) => (
//                     <motion.div
//                         key={diary.id}
//                         variants={cardVariants}
//                         className="group relative"
//                     >
//                         {/* Vertical Date Line Accent */}
//                         <div className="absolute -left-2 top-0 bottom-0 w-1 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

//                         <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-8 hover:border-green-500/40 transition-all duration-300 shadow-xl overflow-hidden">

//                             {/* Background Glow Overlay */}
//                             <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 blur-[60px] group-hover:bg-green-500/10 transition-colors" />

//                             <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">

//                                 <div className="flex-1">
//                                     <div className="flex items-center gap-3 text-green-400 text-sm font-semibold mb-2">
//                                         <Calendar size={16} />
//                                         <span>{diary.date}</span>
//                                     </div>

//                                     <h2 className="text-2xl font-bold text-white mb-1 group-hover:text-green-400 transition-colors">
//                                         {diary.title}
//                                     </h2>

//                                     <div className="flex items-center gap-2 text-slate-300 mb-4">
//                                         <User size={16} className="text-green-500" />
//                                         <span className="font-medium underline underline-offset-4 decoration-slate-700">
//                                             {diary.alumni}
//                                         </span>
//                                         <span className="text-slate-500 mx-2">|</span>
//                                         <span className="bg-green-500/10 text-green-400 px-3 py-0.5 rounded-full text-xs font-bold border border-green-500/20">
//                                             {diary.company}
//                                         </span>
//                                     </div>

//                                     <p className="text-slate-400 leading-relaxed text-sm md:text-base">
//                                         {diary.description}
//                                     </p>
//                                 </div>

//                                 {/* Interactive Button */}
//                                 <div className="flex items-center justify-end">
//                                     <button className="flex items-center gap-2 bg-white/5 hover:bg-green-500 hover:text-black transition-all duration-300 px-5 py-3 rounded-xl border border-white/10 font-bold text-sm">
//                                         Read Story <ExternalLink size={16} />
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </motion.div>
//                 ))}
//             </motion.div>

//             {/* Background Decorative Elements */}
//             <div className="fixed top-0 inset-0 pointer-events-none -z-10">
//                 <div className="absolute top-[20%] right-[10%] w-64 h-64 bg-green-500/5 rounded-full blur-[100px]" />
//                 <div className="absolute bottom-[20%] left-[10%] w-64 h-64 bg-emerald-500/5 rounded-full blur-[100px]" />
//             </div>
//         </div>
//     )
// }

// export default PlacementDiaries

"use client"

import React, { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Calendar, User, ExternalLink } from 'lucide-react'

const PlacementDiaries = () => {
    const containerRef = useRef(null);

    const diaries = [
        {
            id: 1,
            title: "Placement Diaries 2023",
            alumni: "Shlok Zanwar",
            date: "3 Feb 2023",
            company: "Ansys Software",
            side: "left",
            description: "Get in touch with our fellow alumni ~ Shlok Zanwar, placed at Ansys Software. An interactive and insightful online event which will guide you on your road to placements!"
        },
        {
            id: 2,
            title: "Placement Diaries 2023",
            alumni: "Rohan Gupta",
            date: "3 Feb 2023",
            company: "JP Morgan",
            side: "right",
            description: "Get in touch with our fellow alumni ~ Rohan Gupta, placed at JP Morgan. An interactive and insightful online event which will guide you on your road to placements!"
        },
        {
            id: 3,
            title: "Placement Diaries 2023",
            alumni: "Aiman Shivani",
            date: "3 Feb 2023",
            company: "JP Morgan",
            side: "left",
            description: "Get in touch with our fellow alumni ~ Aiman Shivani, placed at JP Morgan. An interactive and insightful online event which will guide you on your road to placements!"
        }
    ];

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
        <div className="min-h-screen bg-[#0a0f1d] text-white py-28 px-6 font-sans overflow-hidden">

            {/* --- Header --- */}
            <div className="max-w-4xl mx-auto text-center mb-24">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-5xl font-extrabold bg-linear-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent"
                >
                    Placement Diaries
                </motion.h1>
                <p className="text-slate-400 mt-4 text-lg">Insights and experiences from our top-placed alumni</p>
                <div className="h-1 w-24 bg-green-500 mx-auto mt-6 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.5)]" />
            </div>

            {/* --- Timeline Grid --- */}
            <div ref={containerRef} className="relative max-w-6xl mx-auto">

                {/* Vertical Growing Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-slate-800/30" />
                <motion.div
                    style={{ scaleY, originY: 0 }}
                    className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-linear-to-b from-green-400 to-emerald-500 z-0 shadow-[0_0_10px_#22c55e]"
                />

                <div className="space-y-24">
                    {diaries.map((diary) => (
                        <div
                            key={diary.id}
                            className={`relative flex items-center justify-between w-full ${diary.side === 'right' ? 'flex-row-reverse' : ''
                                }`}
                        >
                            {/* Card Container */}
                            <motion.div
                                initial={{ opacity: 0, x: diary.side === 'left' ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="w-[45%] relative group"
                            >
                                <div className="bg-white p-6 rounded-2xl shadow-2xl relative text-gray-900 transition-all duration-300">
                                    {/* Triangle Pointer */}
                                    <div className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rotate-45 
                                        ${diary.side === 'left' ? '-right-2' : '-left-2'}`}
                                    />

                                    <div className="flex items-center gap-2 text-green-600 text-xs font-bold mb-2 uppercase tracking-wider">
                                        <Calendar size={14} />
                                        <span>{diary.date}</span>
                                    </div>

                                    <h2 className="text-xl font-bold mb-1">{diary.title}</h2>

                                    <div className="flex items-center gap-2 text-gray-600 mb-4">
                                        <User size={14} className="text-green-600" />
                                        <span className="font-semibold text-sm">{diary.alumni}</span>
                                        <span className="text-gray-300">|</span>
                                        <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-[10px] font-bold uppercase">
                                            {diary.company}
                                        </span>
                                    </div>

                                    <p className="text-gray-500 leading-relaxed text-sm mb-6">
                                        {diary.description}
                                    </p>
                                </div>
                            </motion.div>

                            {/* Center Logo Circle */}
                            <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    className="w-10 h-10 rounded-full bg-white border-2 border-slate-900 flex items-center justify-center text-black font-black z-10 shadow-lg"
                                >
                                    {diary.id}
                                </motion.div>
                            </div>

                            {/* Spacer */}
                            <div className="w-[45%]" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Background Decoration */}
            <div className="fixed top-0 inset-0 pointer-events-none -z-10">
                <div className="absolute top-[20%] right-[10%] w-64 h-64 bg-green-500/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[20%] left-[10%] w-64 h-64 bg-emerald-500/5 rounded-full blur-[100px]" />
            </div>
        </div>
    )
}

export default PlacementDiaries