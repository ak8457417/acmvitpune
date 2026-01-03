import React from 'react'
import Image from 'next/image'
import { Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
    return (
        <footer id="contact" className="bg-[#0a0f1d] text-white px-6 md:px-20 py-12 font-sans">
            <div className="max-w-7xl mx-auto flex gap-43">

                {/* Left Section: About */}
                <div className="flex flex-col gap-4">
                    <h2 className="text-2xl font-bold">About</h2>
                    <p className="text-slate-300 leading-relaxed text-sm md:text-base max-w-sm">
                        VIIT ACM Student Chapter aims , to provide students unique opportunities for networking, mentoring and bonding over common interests by offering a range of resources and benefits for students to help them shape the future of computing.
                    </p>
                </div>

                {/* Center Section: Address */}
                <div className="flex flex-col gap-4">
                    <div className="mb-2">
                        <Image
                            src={'/assets/footerLogo.png'}
                            alt={"ACM VIIT Logo"}
                            width={180}
                            height={60}
                            className="object-contain"
                        />
                    </div>
                    <div className="text-slate-300 w-full text-sm md:text-base space-y-2">
                        <p>VIIT B Building</p>
                        <p>Kondhwa Budruk, Pune</p>
                        <p className="hover:text-white cursor-pointer transition-colors">acmchapter@viit.ac.in</p>
                    </div>
                </div>

                {/* Right Section: Social Links */}
                <div className="flex flex-col gap-4">
                    <h2 className="text-2xl font-bold">Get in touch</h2>
                    <div className="flex flex-col gap-4">
                        <a href="https://www.instagram.com/viitacm/?hl=en" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
                            <Instagram size={20} />
                            <span className='w-53'>VIIT ACM Student Chapter</span>
                        </a>
                        <a href="https://www.linkedin.com/company/viit-acm-student-chapter/" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
                            <Linkedin size={20} />
                            <span>viitacm</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Section: Copyright */}
            <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-800 text-center">
                <p className="text-slate-400 text-sm">
                    Copyright © 2026 All Rights Reserved by VIIT ACM.
                </p>
            </div>
        </footer>
    )
}

export default Footer