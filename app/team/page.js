"use client"

import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail , Github , Linkedin } from "lucide-react";

import man from "@/public/assets/team/man.jpg";
import faculty1 from '@/public/assets/team/disha_mam.png';
import faculty2 from '@/public/assets/team/prashant_sir.png';


const FacultyCard = ({ name, position, image }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center w-full max-w-87.5 py-4"
        >
            <div className="group relative flex flex-col items-center w-full p-6 rounded-xl bg-black/60 backdrop-blur-xl border border-green-500/30 shadow-[0_0_80px_rgba(34,197,94,0.15)] hover:border-white/50 hover:shadow-xl transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:rotate-[0.5deg]">
                <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 bg-linear-to-t from-emerald-500/20 via-transparent to-transparent blur-xl transition-opacity duration-500" />
                <div className="relative w-full aspect-3/4 mb-4 overflow-hidden rounded-lg border border-white/10">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        sizes="(max-width: 350px) 100vw, 300px"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:translate-y-1"
                    />
                </div>
                <h3 className="text-[20px] font-semibold mb-1 text-balance text-white transition-all duration-500 group-hover:text-emerald-300 group-hover:tracking-wide">
                    {name}
                </h3>
                <p className="text-[16px] font-medium text-white/60 transition-all duration-500 group-hover:text-white/80 group-hover:translate-y-0.5">
                    {position}
                </p>
                <span className="mt-3 h-0.5 w-10 rounded-full bg-emerald-400/60 origin-center transition-all duration-500 group-hover:w-20 group-hover:bg-emerald-300" />
            </div>
        </motion.div>
    );
};

const TeamMemberCard = ({ name, position, linkedin = "", github = "", email = "", imageSrc, priority = false }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative w-full max-w-sm overflow-hidden rounded-2xl border border-emerald-400/25 bg-linear-to-br from-emerald-900/30 via-black/70 to-black p-6 shadow-[0_0_40px_rgba(16,185,129,0.25)] transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:border-emerald-300/70 hover:shadow-[0_20px_60px_rgba(16,185,129,0.45)]"
        >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(45,212,191,0.25),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.22),transparent_55%)] opacity-0 blur-xl transition-opacity duration-700 group-hover:opacity-100" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-emerald-300/70 to-transparent opacity-60" />
            <div className="relative flex flex-row items-center gap-6">
                <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-xl border border-emerald-200/40 bg-emerald-400/5 shadow-[0_0_30px_rgba(16,185,129,0.45)] transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_0_45px_rgba(16,185,129,0.7)]">
                    <div className="pointer-events-none absolute -inset-px rounded-[0.9rem] border border-emerald-400/40 opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:animate-[spin_12s_linear_infinite]" />
                    <Image src={imageSrc} alt={name} fill sizes="128px" priority={priority} className="object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="relative flex flex-1 flex-col items-start justify-center ml-3">
                    <div className="mb-3">
                        <h3 className="text-xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-emerald-200">{name}</h3>
                        <p className="text-sm font-medium text-emerald-100/70 transition-colors duration-300 group-hover:text-emerald-100">{position}</p>
                    </div>
                    <div className="mt-1 flex gap-3 opacity-60 transition-all duration-500 group-hover:opacity-100">
                        {linkedin && <a href={linkedin} target="_blank" rel="noopener noreferrer" className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-400/10 text-lg text-emerald-100 shadow-[0_0_20px_rgba(16,185,129,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:scale-110 hover:border-emerald-200 hover:bg-emerald-400/25 hover:text-white"><Linkedin className="transition-transform duration-500 hover:rotate-360" /></a>}
                        {github && <a href={github} target="_blank" rel="noopener noreferrer" className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-emerald-400/35 bg-black/60 text-lg text-emerald-100 transition-all duration-300 hover:-translate-y-0.5 hover:scale-110 hover:border-emerald-200 hover:bg-emerald-400/15 hover:text-white"><Github className="transition-transform duration-500 hover:rotate-360" /></a>}
                        {email && <a href={`mailto:${email}`} className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-500/15 text-lg text-emerald-100 transition-all duration-300 hover:-translate-y-0.5 hover:scale-110 hover:border-emerald-200 hover:bg-emerald-400/30 hover:text-white"><Mail className="transition-transform duration-500 hover:rotate-360" /><span className="pointer-events-none absolute inset-0 rounded-full border border-emerald-300/40 opacity-0 group-hover:opacity-100 animate-[ping_1.8s_ease-out_infinite]" /></a>}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

// --- Main Page ---

const page = () => {
    const members = [
        { name: "Anvay Kulkarni", position: "President", email: "anvay.k@example.com", linkedin: "https://www.linkedin.com/in/anvay-k", github: "https://github.com/swanandi-kamat", imageSrc: man },
        { name: "Swanandi Kamat", position: "Secretary", email: "swanandi.kamat@example.com", linkedin: "https://www.linkedin.com/in/swanandi-kamat", github: "https://github.com/swanandi-kamat", imageSrc: man },
        { name: "Tejas Dherange", position: "Treasurer", email: "tejas.dherange@example.com", linkedin: "https://www.linkedin.com/in/tejas-dherange", github: "https://github.com/tejas-dherange", imageSrc: man },
        { name: "Shatavali Bahadure", position: "Event Coordinator", email: "shatavali.bahadure@example.com", linkedin: "https://www.linkedin.com/in/shatavali-bahadure", github: "https://github.com/shatavali-bahadure", imageSrc: man },
        { name: "Palak Gudgila", position: "Public Relations Officer", email: "palak.gudgila@example.com", linkedin: "https://www.linkedin.com/in/palak-gudgila", github: "https://github.com/palak-gudgila", imageSrc: man },
        { name: "Vedant Shendge", position: "Co-Tech Head", email: "vedant.22310585@viit.ac.in", imageSrc: man },
        { name: "Vedant Shingote", position: "Co-Tech Head", email: "vedant.22310590@viit.ac.in", imageSrc: man },
        { name: "Abhishek Kadu", position: "Web Master", email: "abhishek.22311167@viit.ac.in", imageSrc: man },
        { name: "Atharva Belavanki", position: "Jt-Web Master", email: "atharva.22311353@viit.ac.in", linkedin: "https://www.linkedin.com/in/abhishek", github: "https://github.com/ak", imageSrc: man },
        { name: "Akshay Nazare", position: "Design Head", email: "akshay.1252030015@vit.edu", imageSrc: man },
        { name: "Soham Zinjurke", position: "Content Head", email: "soham.22311620@viit.ac.in", imageSrc: man },
        { name: "Vedant Mulmule", position: "Documentation Head", email: "vedant.mulmule23@vit.edu", imageSrc: man },
        { name: "Sudiksha Pardeshi", position: "Co-Event Head", email: "sudiksha.22310260@viit.ac.in", imageSrc: man },
        { name: "Achala Patil", position: "Co-Event Head", email: "achala.patil24@vit.edu", imageSrc: man },
        { name: "Namrata Devare", position: "Publicity Head", email: "namratadevare5@gmail.com", imageSrc: man },
    ];

    return (
        <div className="min-h-screen py-16 bg-[#0a0f1d] text-white font-sans selection:bg-emerald-500/30">
            {/* Background Decorations */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-600/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-600/10 blur-[120px] rounded-full" />
            </div>

            <div className="relative z-10 flex flex-col gap-20 px-4 py-20 max-w-7xl mx-auto">

                {/* Faculty Section */}
                <section className="text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[38px] md:text-5xl font-bold mb-12 text-white tracking-tight"
                    >
                        Our Faculty <span className="text-emerald-400">Coordinators</span>
                    </motion.h1>

                    <div className="flex flex-wrap justify-center gap-10">
                        <FacultyCard name="Disha Wankhede" position="Faculty Coordinator" image={faculty1} />
                        <FacultyCard name="Prashant Mahale" position="Faculty Coordinator" image={faculty2} />
                    </div>
                </section>

                {/* Main Team Section */}
                <section className="text-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h1 className="text-[38px] md:text-5xl font-bold mb-4 text-white tracking-tight">
                            Meet Our <span className="text-emerald-400">Team</span>
                        </h1>
                        <p className="text-emerald-100/60 max-w-2xl mx-auto">
                            The brilliant minds behind VIIT ACM working together to shape the future of computing.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                        {members.map((member, index) => (
                            <TeamMemberCard
                                key={member.name}
                                {...member}
                                priority={index < 3}
                            />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default page;