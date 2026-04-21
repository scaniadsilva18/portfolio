import React from "react";
import { motion } from "framer-motion";
import { FiArrowDown, FiDatabase, FiLayers, FiActivity, FiLinkedin, FiExternalLink, FiDownload } from "react-icons/fi";

const projects = [
  {
    title: "FMCG Sales & Dynamics",
    image: "photos/fmcg.jpeg",
    tag: "Market Intelligence",
    stack: ["SQL", "Power BI", "Excel"],
    challenge: "Fragmented sales data across multiple regions made identifying churn impossible.",
    insight: "By unifying the SQLite backend with Power BI, we identified a 12% drop-off in repeat customers in the Q3 sector, allowing for immediate targeted marketing."
  },
  {
    title: "Retail Demand Forecasting",
    image: "photos/forecast.jpeg",
    tag: "Predictive Systems",
    stack: ["Azure", "Databricks", "Python"],
    challenge: "Overstocking during off-seasons led to significant inventory holding costs.",
    insight: "Built a ForecastFlow model using Python that reduced inventory waste by 18% through seasonal trend analysis and predictive stock replenishment."
  },
  {
    title: "Airline Analytics Dashboard",
    image: "photos/project1.jpeg",
    tag: "Operational Efficiency",
    stack: ["Tableau", "SQL", "Python"],
    challenge: "Airlines struggled to pinpoint the exact operational bottlenecks causing widespread delays and long-term cancellation trends.",
    insight: "Visualized over 15 years of flight data to isolate specific carrier delays and weather impacts, providing actionable intelligence for route optimization and resource allocation."
  },
  {
    title: "HR Attrition Analytics",
    image: "photos/project2.jpeg",
    tag: "Workforce Intelligence",
    stack: ["Power BI", "DAX", "Excel"],
    challenge: "Rising employee turnover was increasing hiring costs, but leadership lacked visibility into the specific demographics and departments driving the attrition.",
    insight: "Uncovered that R&D Laboratory Technicians and Sales Representatives had the highest attrition rates, directly correlating with specific age brackets, enabling HR to build targeted retention strategies."
  }
];

const achievements = [
  { img: "photos/achievment1.jpeg", title: "Certification", detail: "Advanced Data Visualization Mastery" },
  { img: "photos/achievment2.jpeg", title: "Recognition", detail: "Technical Excellence Award" },
  { img: "photos/achievment3.jpeg", title: "Academic", detail: "Specialized SQL Optimization" },
  { img: "photos/achievment4.jpeg", title: "Achievement", detail: "Business Intelligence Leadership" },
];

// Animation Variants for staggered revealing
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Portfolio() {
  const baseUrl = import.meta.env.BASE_URL;
  const resumePath = `${baseUrl}photos/scan_resume`; 

  return (
    <div className="bg-black text-white font-sans selection:bg-white selection:text-black antialiased overflow-x-hidden">
      
      {/* 1. PROGRESSIVE NAV */}
      <nav className="fixed top-0 w-full z-50 mix-blend-difference py-8 px-10 flex justify-between items-center text-white">
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-black text-xl tracking-tighter uppercase"
        >
          Scania Dsilva
        </motion.span>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.3em]"
        >
          <a href="#work" className="hover:text-zinc-400 transition-colors">Work</a>
          <a href="#about" className="hover:text-zinc-400 transition-colors">Process</a>
          <a href="#contact" className="hover:text-zinc-400 transition-colors">Contact</a>
          <a 
            href={resumePath} 
            download
            className="hidden md:flex items-center gap-2 border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all"
          >
            Resume <FiDownload />
          </a>
        </motion.div>
      </nav>

      {/* 2. CINEMATIC HERO */}
      <section className="h-screen flex flex-col items-center justify-center relative overflow-hidden bg-black text-white">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black z-10" />
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.6 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            src={`${baseUrl}photos/project3.jpeg`} 
            className="w-full h-full object-contain p-4 md:p-12 grayscale"
          />
        </div>

        <div className="z-20 text-center px-6 mt-12 flex flex-col items-center">
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-[10px] font-bold uppercase tracking-[0.6em] text-zinc-400 mb-8"
          >
            Senior Data Analyst Portfolio — 2026
          </motion.p>
          <motion.h1 
            initial={{ y: 40, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="text-[12vw] md:text-[10rem] font-black leading-none tracking-tighter"
          >
            DATA <br /> <span className="italic font-light text-zinc-500">DEFINED.</span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 flex gap-6 items-center"
          >
            <a 
              href={resumePath} 
              download
              className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-black uppercase text-xs tracking-widest hover:scale-105 transition-transform"
            >
              Download Resume <FiDownload className="text-lg" />
            </a>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-10 flex justify-center"
          >
            <FiArrowDown className="text-3xl text-zinc-600" />
          </motion.div>
        </div>
      </section>

      {/* 3. THE "PROCESS" SECTION */}
      <section id="about" className="py-32 md:py-40 px-6 bg-[#0a0a0a]">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center"
        >
          <motion.div variants={fadeUp}>
            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-zinc-500 mb-10">The Methodology</h2>
            <p className="text-4xl md:text-5xl font-medium leading-[1.1] tracking-tight text-white">
              I transform raw business noise into <span className="text-zinc-400 underline decoration-zinc-700 underline-offset-8">measurable clarity</span>.
            </p>
          </motion.div>
          <div className="space-y-12">
            {[
              { icon: <FiDatabase />, title: "Extraction", text: "Harvesting multi-source data via optimized SQL pipelines." },
              { icon: <FiActivity />, title: "Analysis", text: "Applying Python-driven statistical models to identify churn." },
              { icon: <FiLayers />, title: "Synthesis", text: "Building Power BI dashboards that simplify executive decisions." }
            ].map((step, i) => (
              <motion.div variants={fadeUp} key={i} className="flex gap-6 group hover:translate-x-2 transition-transform duration-300 cursor-default">
                <div className="text-2xl text-zinc-500 group-hover:text-white transition-colors pt-1">{step.icon}</div>
                <div>
                  <h4 className="font-black text-white uppercase text-xs tracking-widest mb-2">{step.title}</h4>
                  <p className="text-zinc-500 font-light max-w-sm group-hover:text-zinc-300 transition-colors">{step.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 4. FULL-LENGTH CASE STUDIES */}
      <section id="work" className="bg-black">
        {projects.map((p, i) => (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-200px" }}
            transition={{ duration: 1 }}
            key={i} 
            className="min-h-screen flex flex-col md:flex-row border-b border-zinc-900"
          >
            <div className="w-full md:w-3/5 h-[50vh] md:h-screen sticky top-0 overflow-hidden bg-[#050505] flex items-center justify-center p-8 md:p-16">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                src={`${baseUrl}${p.image}`} 
                className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            
            <div className="w-full md:w-2/5 p-10 md:p-20 flex flex-col justify-center bg-black">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-500 mb-6">{p.tag}</span>
              <h3 className="text-5xl font-black tracking-tighter mb-8 leading-none text-white">{p.title}</h3>
              
              <div className="space-y-8 mb-12">
                <div>
                  <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest mb-2">Challenge</p>
                  <p className="text-zinc-400 font-light">{p.challenge}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest mb-2">Technical Insight</p>
                  <p className="text-zinc-200 font-medium italic">"{p.insight}"</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mb-10">
                {p.stack.map(s => (
                  <motion.span 
                    whileHover={{ scale: 1.1, backgroundColor: "#ffffff", color: "#000000" }}
                    key={s} 
                    className="px-4 py-1.5 border border-zinc-800 text-zinc-300 text-[10px] font-black uppercase tracking-widest rounded-full cursor-default transition-colors"
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* 5. GALLERY OF RECOGNITION */}
      <section className="py-32 md:py-40 px-6 bg-[#0a0a0a] text-white">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={fadeUp} className="text-center mb-24">
            <h2 className="text-[10px] font-bold uppercase tracking-[1em] text-zinc-600 mb-6">Recognition</h2>
            <p className="text-5xl md:text-6xl font-black tracking-tighter">The Gallery of Proof.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((item, i) => (
              <motion.div 
                variants={fadeUp}
                whileHover={{ y: -10, borderColor: "rgba(255,255,255,0.2)" }}
                key={i} 
                className="group relative h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden bg-[#111] border border-zinc-800/50 p-6 flex items-center justify-center cursor-pointer"
              >
                <img 
                  src={`${baseUrl}${item.img}`} 
                  className="w-full h-full object-contain opacity-40 group-hover:opacity-100 transition-all duration-700 scale-95 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex flex-col justify-end p-8 pointer-events-none opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2">{item.title}</span>
                  <p className="text-xl font-bold italic text-white drop-shadow-md">{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 6. FINAL CONTACT */}
      <section id="contact" className="py-32 md:py-40 px-6 text-center bg-black text-white border-t border-zinc-900 flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full max-w-4xl flex flex-col items-center"
        >
          <h2 className="text-7xl md:text-[10rem] font-black tracking-tighter leading-none mb-12">
            LETS <br /> <span className="text-zinc-800">CONNECT.</span>
          </h2>
          
          <div className="flex flex-col gap-8 items-center mb-16">
            <a 
              href="mailto:scaniadsilva@gmail.com" 
              className="text-2xl md:text-4xl font-light hover:text-zinc-400 transition-all underline underline-offset-8 decoration-zinc-800 hover:decoration-zinc-400"
            >
              scaniadsilva@gmail.com
            </a>
            
            <a 
              href="https://www.linkedin.com/in/scania-dsilva-053a48288/" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-3 text-xl md:text-2xl font-bold text-zinc-500 hover:text-white transition-colors group"
            >
              <FiLinkedin className="text-3xl group-hover:scale-110 transition-transform" />
              LinkedIn Profile
            </a>
          </div>

          <a 
            href={resumePath} 
            download
            className="group relative px-10 py-5 bg-zinc-900 border border-zinc-800 rounded-full overflow-hidden hover:border-zinc-500 transition-colors"
          >
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="relative flex items-center gap-3 font-black uppercase tracking-widest text-sm group-hover:text-black transition-colors duration-300">
              Download Full Resume <FiDownload className="text-lg" />
            </span>
          </a>

        </motion.div>
      </section>

      <footer className="py-12 bg-black text-zinc-800 text-[10px] font-bold uppercase tracking-[2em] text-center border-t border-zinc-900">
        © 2026 SCANIA DSILVA
      </footer>
    </div>
  );
}