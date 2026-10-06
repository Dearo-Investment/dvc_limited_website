'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ChevronRight, GraduationCap, Briefcase, Award } from 'lucide-react';

const directors = [
  {
    name: 'Mr. K.M.M.Jabir',
    role: ['Chairman', 'Independent / Non - Executive Director'],
    image: '/coparate/jabeer_new.jpg',
    description:
      'Mr. K.M.M. Jabir is an experienced financial services professional with extensive expertise in banking, finance, operations, and corporate leadership.',
    qualifications: [
      'Bachelor of Commerce Fellow Member - IBSL',
      'Finalist - Chartered Institute of Management Accountants (CIMA) - UK',
      'Member of SLIM',
    ],
    experience: [
      'Independent Non-Executive Director - SMIB (currently)',
      'Former Executive Director/ CEO - Janashakthi Finance PLC',
      'Former Executive Director/ CEO - Richard Pieris Finance Ltd',
      'DGM - Operations - People Leasing PLC',
    ],
  },
  {
    name: 'Mr. Prasanna Sanjeewa',
    role: ['Non Independent / Executive Director'],
    image: '/coparate/prasanna_new.jpg',
    description:
      'Mr. Prasanna Sanjeewa Ranasinghe is a senior business leader with experience in investment, finance, marketing, and strategic management. He currently serves as the Managing Director and Chief Executive Officer of Dearo Venture Capital Ltd.',
    qualifications: [
      'MBA',
      'BBA in Marketing - Uni. of Peradeniya',
      'Diploma in Credit Management - IBSL',
      'Diploma in Banking and Finance - CFI',
    ],
    experience: ['MD , CEO - Dearo Venture Capital Ltd'],
  },
  {
    name: 'Mr. Muditha Welihinda',
    role: ['Independent / Non Executive Director'],
    image: '/coparate/muditha_new.jpg',
    description:
      'Mr. Muditha Welihinda is an information technology professional with extensive experience in IT management, information systems auditing, and technology leadership.',
    qualifications: [
      'MBA',
      'Certified Information Systems Auditor - USA',
      'Member of the British Computer Society',
      'Member of the Australian Computer Society',
      'Member of the Institute of Data Processing Management, UK',
    ],
    experience: [
      'Former Director - Highbrow College & Institute',
      'Director/ Head of IT - Richard Ariepis Finance Ltd',
      'Manager - IT, Radwa Food Productions Ltd',
      'IT Manager - Food & Fine pastries Ltd',
    ],
  },
  {
    name: 'Mr. Lalith J. Fernando',
    role: ['Independent / Non-Executive Director'],
    image: '/coparate/lalith_new.jpg',
    description:
      'Mr. Lalith J. Fernando is a financial risk management professional with extensive experience in banking, risk management, compliance, and financial services.',
    qualifications: [
      'BSc in Statistic - Uni. Of Peradeniya',
      'MSc in Management - Uni. Of J\'pura',
      'Fellow - IBSL',
      'Financial Risk Manager (FRM) - GARP, USA',
      'First Sri Lankan to obtain the FRM Designation in 2012',
    ],
    experience: [
      'Consultant - Risk Management',
      'Consultant/Resource Person - IBSL',
      'Chief Risk Officer/DGM - PABC Bank',
      'Chief Risk Officer/DGM - BOC',
    ],
  },
  {
    name: 'Dr. Neil Bogahalanda',
    role: ['Independent / Non Executive Director'],
    image: '/coparate/neil bogahalanda.jpg',
    description:
      'Dr. Neil Bogahalanda is an accomplished human resources and corporate management professional with extensive experience in strategic HR leadership, organizational development, and professional education.',
    qualifications: [
      'PHD - MSU, Malaysia',
      'MBA',
      'Member - ICMA',
      'Member - CIPM',
      'Member - SLID',
      'Winner of the Lifetime Gold Award offered by the CIPM',
    ],
    experience: [
      'President - CIPM',
      'Head of Group HR - Royal Ceramics Lanka PLC',
      'GM - HR, Browens Group',
      'AGM - HR, Sampath Bank',
    ],
  },
  {
    name: 'Ms. Shaheena Mohamed',
    role: ['Independent / Non Executive Director'],
    image: '/coparate/saheena_new.jpg',
    description:
      'Ms. Shaheena Mohamed is a legal and compliance professional with extensive experience in corporate governance, legal practice, regulatory compliance, and company secretarial functions.',
    qualifications: [
      'Attorney at Law',
      'Professional Diploma in Anti-Money Laundering',
      'MBA',
      'Post Graduate Diploma in Economic Development - Uni. of Colombo',
    ],
    experience: [
      'Independent Legal Practitioner',
      'Visiting Lecturer - Institute of Charted Corporate Secretaries of Sri Lanka',
      'DGM-Compliance & Company Secretary - Sri Lanka Insurance Corporation',
      'Group company Secretary - Janashakthi Group',
    ],
  },
];

const corporateManagement = [
  {
    name: 'Mr. Roshan Jansen',
    role: 'Deputy Chief Executive Officer',
    image: '/coparate/roshan.png',
    description:
      "Mr. Roshan Jansen serves as the Deputy Chief Executive Officer of Dearo Venture Capital Limited. He plays an important role in supporting the company's strategic direction, business operations, and sustainable growth. With his leadership and management expertise, he contributes to strengthening the company's performance and advancing its long-term business objectives.",
  },
  {
    name: 'Mrs. Hiranya Samarasinghe',
    role: 'Head of Operations',
    image: '/coparate/WhatsApp Image 2026-09-15 at 11.55.15.jpeg',
    description:
      'Mrs. Hiranya Samarasinghe is an experienced operations and marketing professional with an MBA from West Texas A&M University. She specializes in strategic leadership, digital marketing, business development, data analytics, and AI-driven solutions. Her expertise in operational excellence, team leadership, and performance optimization supports sustainable growth, efficiency, and measurable organizational success.',
  },
  {
    name: 'Mr. Minol Hewage',
    role: 'Head of Marketing, Communication & Branding',
    image: '/coparate/WhatsApp Image 2026-09-15 at 1.03.52 PM.jpeg',
    description:
      'As Head of Marketing, Communication & Branding at Dearo Venture Capital, he brings extensive experience in brand development, strategic communication, digital marketing, media, and creative strategy. His expertise focuses on strengthening brand presence, engaging target audiences, creating impactful communication, and developing innovative marketing strategies that support business growth, reputation, and long-term success.',
  },
  {
    name: 'Mr. Hemal Manuweera',
    role: 'Head of Human Resources',
    image: '/coparate/ChatGPT Image Sep 15, 2026, 02_51_54 PM.png',
    description:
      'As Head of HR at Dearo Venture Capital, he brings over 14 years of experience in human resource management, talent development, employee engagement, and organizational transformation. His expertise includes HR strategy, performance management, recruitment, HR technology, and regulatory compliance, supporting a productive, people-focused workplace and sustainable organizational growth.',
  },
  {
    name: 'Mrs. Lasanthi Gunawardana',
    role: 'Head of Finance',
    image: '/coparate/ChatGPT Image Sep 15, 2026, 12_14_57 PM.png',
    description:
      "Ms. Lasanthi Maheshika Gunawardhana serves as the Head of Finance at Dearo Venture Capital Limited. She is responsible for overseeing financial operations, planning, reporting, budgeting, and financial controls. Her role supports sound financial management, regulatory compliance, accurate reporting, and effective decision-making while contributing to the company's sustainable growth and long-term financial objectives.",
  },
  {
    name: 'Mr. Rajitha Bandara',
    role: 'Head of Adminstration',
    image: '/coparate/rajitha.jpg',
    description:
      "Mr. Rajitha Bandara serves as the Head of Administration at Dearo Venture Capital, providing effective leadership across administrative operations and organizational support. He focuses on maintaining efficient processes, coordinating internal functions, strengthening operational standards, and supporting a productive workplace environment, contributing to the company's overall efficiency, growth, and professional excellence.",
  },
  {
    name: 'Mr. Mahesh Gunawardana',
    role: 'Head of Audit',
    image: '/coparate/Mahesh Gunarathna Manager Audit.jpeg',
    description:
      'Mr. Mahesh Gunawardana serves as the Head of Audit at Dearo Venture Capital, overseeing internal audit functions and supporting strong governance, compliance, and risk management practices. He focuses on maintaining effective internal controls, reviewing operational processes, identifying potential risks, and promoting transparency and accountability across the organization to support sustainable business performance.',
  },
];

type Profile = {
  name: string;
  role: string | string[];
  image: string;
  description: string;
  qualifications?: string[];
  experience?: string[];
};

export default function LeadershipTeam() {
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProfile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProfile]);

  const renderRoles = (role: string | string[]) => {
    if (Array.isArray(role)) {
      return role.map((r, i) => (
        <span key={i} className="block text-[13px] md:text-sm text-accent-gold font-medium tracking-wide">
          {r}
        </span>
      ));
    }
    return <span className="block text-[13px] md:text-sm text-accent-gold font-medium tracking-wide">{role}</span>;
  };

  return (
    <>
      {/* Board of Directors */}
      <section className="py-24 relative z-10">
        <div className="container-content">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white tracking-tight">
              Board of Directors
            </h2>
            <p className="text-neutral-muted max-w-2xl mx-auto text-lg">
              Strategic leadership guiding Dearo Venture Capital Limited
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {directors.map((person, i) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                onClick={() => setSelectedProfile(person)}
                className="group cursor-pointer flex flex-col h-full bg-[#130B24] rounded-[2rem] border border-white/5 overflow-hidden hover:border-accent-gold/40 hover:bg-[#1A0E30] hover:shadow-[0_0_40px_rgba(198,161,91,0.1)] transition-all duration-500"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover object-top filter grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Luxury gradient fading perfectly into the background color */}
                  <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#130B24] group-hover:from-[#1A0E30] to-transparent transition-colors duration-500" />
                </div>
                
                <div className="flex flex-col flex-grow px-8 pb-8 -mt-8 relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                     <span className="h-px w-8 bg-accent-gold" />
                     <h3 className="font-heading text-2xl md:text-[26px] font-bold text-white group-hover:text-accent-gold transition-colors duration-300">
                       {person.name}
                     </h3>
                  </div>
                  
                  <div className="space-y-1 mb-5 pl-11">
                    {renderRoles(person.role)}
                  </div>
                  
                  <p className="text-[14px] text-neutral-muted/80 line-clamp-3 mb-8 flex-grow leading-relaxed pl-11">
                    {person.description}
                  </p>
                  
                  <div className="mt-auto pl-11">
                    <div className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.03] text-[11px] font-bold uppercase tracking-[0.2em] text-white group-hover:bg-accent-gold group-hover:text-primary-deep group-hover:border-accent-gold transition-all duration-300">
                      <span>View Profile</span>
                      <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container-content">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>

      {/* Corporate Management */}
      <section className="py-24 relative z-10">
        <div className="container-content">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white tracking-tight">
              Corporate Management
            </h2>
            <p className="text-neutral-muted max-w-2xl mx-auto text-lg">
              Driving operational excellence across Dearo Venture Capital Limited
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {corporateManagement.map((person, i) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                onClick={() => setSelectedProfile(person as Profile)}
                className="group cursor-pointer flex flex-col h-full bg-[#130B24] rounded-[2rem] border border-white/5 overflow-hidden hover:border-accent-gold/40 hover:bg-[#1A0E30] hover:shadow-[0_0_40px_rgba(198,161,91,0.1)] transition-all duration-500"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover object-top filter grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#130B24] group-hover:from-[#1A0E30] to-transparent transition-colors duration-500" />
                </div>
                
                <div className="flex flex-col flex-grow px-8 pb-8 -mt-8 relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                     <span className="h-px w-8 bg-accent-gold" />
                     <h3 className="font-heading text-2xl md:text-[26px] font-bold text-white group-hover:text-accent-gold transition-colors duration-300">
                       {person.name}
                     </h3>
                  </div>
                  
                  <div className="space-y-1 mb-5 pl-11">
                    {renderRoles(person.role)}
                  </div>
                  
                  <p className="text-[14px] text-neutral-muted/80 line-clamp-3 mb-8 flex-grow leading-relaxed pl-11">
                    {person.description}
                  </p>
                  
                  <div className="mt-auto pl-11">
                    <div className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.03] text-[11px] font-bold uppercase tracking-[0.2em] text-white group-hover:bg-accent-gold group-hover:text-primary-deep group-hover:border-accent-gold transition-all duration-300">
                      <span>View Profile</span>
                      <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Full-Screen Modal */}
      <AnimatePresence>
        {selectedProfile && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedProfile(null)}
              className="absolute inset-0 bg-primary-deep/90 backdrop-blur-2xl"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="relative w-full max-w-6xl max-h-[90vh] bg-[#140a24] rounded-3xl overflow-hidden border border-white/10 shadow-2xl flex flex-col md:flex-row"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProfile(null)}
                className="absolute top-4 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md hover:bg-accent-gold hover:text-primary-deep transition-colors duration-300"
              >
                <X size={20} />
              </button>

              {/* Left Column - Image */}
              <div className="relative w-full md:w-2/5 lg:w-[45%] h-64 md:h-auto shrink-0 bg-primary-deep">
                <Image
                  src={selectedProfile.image}
                  alt={selectedProfile.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#140a24] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-[#140a24] opacity-90" />
              </div>

              {/* Right Column - Content */}
              <div className="relative w-full md:w-3/5 lg:w-[55%] p-8 md:p-12 lg:p-16 overflow-y-auto custom-scrollbar flex flex-col justify-center">
                
                <div className="mb-8">
                  <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                    {selectedProfile.name}
                  </h2>
                  <div className="space-y-2">
                    {Array.isArray(selectedProfile.role) ? (
                      selectedProfile.role.map((r, i) => (
                        <div key={i} className="inline-block mr-3 mb-2 px-4 py-1.5 rounded-full border border-accent-gold/30 bg-accent-gold/10 text-accent-gold text-sm font-semibold tracking-wide">
                          {r}
                        </div>
                      ))
                    ) : (
                      <div className="inline-block px-4 py-1.5 rounded-full border border-accent-gold/30 bg-accent-gold/10 text-accent-gold text-sm font-semibold tracking-wide">
                        {selectedProfile.role}
                      </div>
                    )}
                  </div>
                </div>

                <div className="w-16 h-1 bg-accent-gold/50 mb-8 rounded-full" />

                <p className="text-base md:text-lg text-neutral-muted leading-relaxed mb-10">
                  {selectedProfile.description}
                </p>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
                  {selectedProfile.qualifications && selectedProfile.qualifications.length > 0 && (
                    <div>
                      <h4 className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-white mb-5">
                        <GraduationCap size={20} className="text-accent-gold" />
                        Qualifications
                      </h4>
                      <ul className="space-y-4">
                        {selectedProfile.qualifications.map((q, i) => (
                          <li key={i} className="flex items-start gap-4 text-sm text-neutral-muted/90 leading-relaxed">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-gold" />
                            <span>{q}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {selectedProfile.experience && selectedProfile.experience.length > 0 && (
                    <div>
                      <h4 className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-white mb-5">
                        <Briefcase size={20} className="text-accent-gold" />
                        Experience
                      </h4>
                      <ul className="space-y-4">
                        {selectedProfile.experience.map((e, i) => (
                          <li key={i} className="flex items-start gap-4 text-sm text-neutral-muted/90 leading-relaxed">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-gold" />
                            <span>{e}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(198, 161, 91, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(198, 161, 91, 0.6);
        }
      `}</style>
    </>
  );
}
