import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, ExternalLink, Code2, Database, Network, Cpu, ShieldAlert, BookOpen, Github, Linkedin, Award } from 'lucide-react';
import { ParticleBackground } from '@/components/ParticleBackground';
import { NavBar } from '@/components/NavBar';
import logoPath from '../../../attached_assets/image_1777893313870.png';

// --- Card Component with hover effect ---
const CosmicCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`cosmic-card p-6 md:p-8 ${className}`}
    >
      <div className="cosmic-content h-full">
        {children}
      </div>
    </div>
  );
};

// --- Animations ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const SectionHeading = ({ children, align = "left" }: { children: React.ReactNode, align?: "left" | "center" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div 
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
      className={`mb-12 ${align === "center" ? "text-center" : ""}`}
    >
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground inline-block relative">
        {children}
        <div className={`h-1 bg-gradient-to-r from-primary to-transparent mt-2 rounded-full ${align === "center" ? "mx-auto w-24" : "w-1/2"}`}></div>
      </h2>
    </motion.div>
  );
};

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden selection:bg-primary/30">
      <div className="noise-overlay" />
      <ParticleBackground />
      <NavBar />

      <main className="relative z-10 flex flex-col items-center w-full">
        {/* HERO SECTION */}
        <section id="hero" className="w-full min-h-screen flex items-center justify-center pt-20 px-6 relative">
          {/* Decorative glowing orbs */}
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
          
          <div className="container max-w-5xl mx-auto z-10 text-center">
            {/* Profile logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="flex justify-center mb-8"
              data-testid="hero-logo"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary via-secondary to-[hsl(45_90%_60%)] blur-md opacity-70 animate-pulse scale-110" />
                <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-primary/40 shadow-[0_0_40px_rgba(139,92,246,0.5)]">
                  <img
                    src={logoPath}
                    alt="Hajar EL HALLAGUE"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
              className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium tracking-wide backdrop-blur-sm"
              data-testid="hero-badge"
            >
              Élève Ingénieure ENSIAS • AI & MLOps
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 leading-tight"
              data-testid="hero-title"
            >
              Hajar <span className="text-gradient">EL HALLAGUE</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 font-light leading-relaxed"
              data-testid="hero-subtitle"
            >
              Créatrice de systèmes intelligents. De l'IA embarquée (TinyML) aux pipelines MLOps robustes, je transforme la donnée en impact réel.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a href="#projects" className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-all hover:scale-105 shadow-[0_0_30px_rgba(139,92,246,0.3)]">
                Découvrir mon univers
              </a>
              <a href="https://github.com/HLG-1" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-card border border-border text-foreground font-medium rounded-full hover:border-primary/50 hover:bg-card/80 transition-all flex items-center gap-2 group">
                <Github className="w-5 h-5 group-hover:text-primary transition-colors" />
                GitHub
              </a>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground"
          >
            <div className="w-8 h-12 border-2 border-muted-foreground/30 rounded-full flex justify-center p-2">
              <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
            </div>
          </motion.div>
        </section>

        {/* EDUCATION & EXPERIENCE SECTION */}
        <section id="experience" className="w-full py-24 px-6 relative">
          <div className="container max-w-5xl mx-auto">
            <SectionHeading>Parcours & Expérience</SectionHeading>
            
            <div className="grid md:grid-cols-2 gap-12 relative">
              {/* Timeline center line for desktop */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border/50 -translate-x-1/2" />
              
              {/* Experience Column */}
              <div className="space-y-8">
                <div className="flex items-center gap-3 mb-8 text-primary">
                  <Code2 className="w-6 h-6" />
                  <h3 className="text-2xl font-bold font-display">Expérience</h3>
                </div>
                
                <CosmicCard className="relative z-10 md:mr-8 md:after:content-[''] md:after:absolute md:after:w-4 md:after:h-4 md:after:bg-primary md:after:rounded-full md:after:top-8 md:after:-right-[26px] md:after:shadow-[0_0_10px_rgba(139,92,246,0.8)]">
                  <span className="text-sm font-mono text-secondary mb-2 block">Été 2024</span>
                  <h4 className="text-xl font-bold text-foreground mb-1">Stagiaire – Analyse Données Recensement</h4>
                  <p className="text-primary font-medium mb-4">HCP Direction Régionale Guelmim</p>
                  <p className="text-muted-foreground text-sm">
                    Développement d'une application web de visualisation interactive des données du Recensement Général de la Population et de l'Habitat (RGPH).
                  </p>
                  <div className="mt-4 flex gap-2">
                    <span className="px-2 py-1 text-xs rounded bg-secondary/10 text-secondary border border-secondary/20">Django</span>
                    <span className="px-2 py-1 text-xs rounded bg-secondary/10 text-secondary border border-secondary/20">Data Viz</span>
                  </div>
                </CosmicCard>
                
                <CosmicCard className="relative z-10 md:mr-8 opacity-70">
                  <span className="text-sm font-mono text-accent mb-2 block">Engagement</span>
                  <h4 className="text-xl font-bold text-foreground mb-1">Membre Dév. & Respo. Com.</h4>
                  <p className="text-accent font-medium mb-4">Darlkhir</p>
                  <p className="text-muted-foreground text-sm">
                    Première plateforme marocaine de mise en relation donateurs/bénévoles.
                  </p>
                </CosmicCard>
              </div>
              
              {/* Education Column */}
              <div className="space-y-8 md:pt-24">
                <div className="flex items-center gap-3 mb-8 text-accent">
                  <BookOpen className="w-6 h-6" />
                  <h3 className="text-2xl font-bold font-display">Formation</h3>
                </div>
                
                <CosmicCard className="relative z-10 md:ml-8 md:before:content-[''] md:before:absolute md:before:w-4 md:before:h-4 md:before:bg-accent md:before:rounded-full md:before:top-8 md:before:-left-[26px] md:before:shadow-[0_0_10px_rgba(250,204,21,0.8)]">
                  <span className="text-sm font-mono text-accent mb-2 block">Sep 2024 – 2027</span>
                  <h4 className="text-xl font-bold text-foreground mb-1">Élève Ingénieure en IA</h4>
                  <p className="text-foreground/80 mb-2">ENSIAS (Université Mohammed V)</p>
                  <p className="text-muted-foreground text-sm">Rabat, Maroc</p>
                </CosmicCard>
                
                <CosmicCard className="relative z-10 md:ml-8">
                  <span className="text-sm font-mono text-muted-foreground mb-2 block">Sep 2022 – Jun 2024</span>
                  <h4 className="text-xl font-bold text-foreground mb-1">CPGE (MP)</h4>
                  <p className="text-foreground/80">Centre Bab Essahra</p>
                  <p className="text-muted-foreground text-sm">Mathématiques et Physique</p>
                </CosmicCard>
                
                <CosmicCard className="relative z-10 md:ml-8">
                  <span className="text-sm font-mono text-muted-foreground mb-2 block">2022</span>
                  <h4 className="text-xl font-bold text-foreground mb-1">Baccalauréat Sc. Mathématiques A</h4>
                  <p className="text-primary font-medium">Mention Très Bien</p>
                </CosmicCard>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="w-full py-24 px-6 relative bg-card/30">
          <div className="container max-w-6xl mx-auto">
            <SectionHeading align="center">Constellations de Projets</SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
              {/* Project 1 */}
              <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
                <CosmicCard className="h-full flex flex-col group border-primary/30">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <ShieldAlert className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-primary px-2 py-1 rounded-full bg-primary/10 border border-primary/20">En cours</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Prédiction de Résistance aux Antibiotiques</h3>
                  <p className="text-sm text-muted-foreground mb-6 flex-grow">
                    PFA 2ème année. Pipeline MLOps complet pour la prédiction AMR (R/S/I). Orchestration Airflow, jeu de données OMS (5910 lignes).
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {['Python', 'XGBoost', 'FastAPI', 'MLflow', 'Docker'].map(t => (
                      <span key={t} className="text-xs px-2 py-1 rounded bg-card-border text-foreground/80">{t}</span>
                    ))}
                  </div>
                </CosmicCard>
              </motion.div>

              {/* Project 2 */}
              <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} transition={{ delay: 0.1 }}>
                <CosmicCard className="h-full flex flex-col group border-secondary/30">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                      <Cpu className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-muted-foreground px-2 py-1 rounded-full border border-border">2026</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">SMART HEALTH WATCH</h3>
                  <p className="text-sm text-muted-foreground mb-6 flex-grow">
                    Montre connectée pédiatrique avec TinyML embarqué (CNN-LSTM) sur ESP32-S3 pour détecter épilepsie, asthme, arythmie.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {['C/C++', 'TF Lite', 'Flutter', 'MQTT', 'ESP32'].map(t => (
                      <span key={t} className="text-xs px-2 py-1 rounded bg-card-border text-foreground/80">{t}</span>
                    ))}
                  </div>
                </CosmicCard>
              </motion.div>

              {/* Project 3 */}
              <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} transition={{ delay: 0.2 }}>
                <CosmicCard className="h-full flex flex-col group border-accent/30">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                      <Network className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-muted-foreground px-2 py-1 rounded-full border border-border">Mars 2026</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Distillation de Connaissances</h3>
                  <p className="text-sm text-muted-foreground mb-6 flex-grow">
                    VGG-19 → SqueezeNet pour détection maladies des plantes. Export ONNX, quantification INT8 (0.7 Mo), inférence Android offline.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {['PyTorch', 'ONNX', 'Knowledge Dist.', 'Android'].map(t => (
                      <span key={t} className="text-xs px-2 py-1 rounded bg-card-border text-foreground/80">{t}</span>
                    ))}
                  </div>
                </CosmicCard>
              </motion.div>

              {/* Project 4 */}
              <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} transition={{ delay: 0.3 }}>
                <CosmicCard className="h-full flex flex-col group">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-foreground group-hover:scale-110 transition-transform">
                      <Database className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-muted-foreground px-2 py-1 rounded-full border border-border">2025</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">MedML Pipeline</h3>
                  <p className="text-sm text-muted-foreground mb-6 flex-grow">
                    Pipeline MLOps complet pour la prédiction du diabète: préprocessing, MLflow, FastAPI, DVC, avec 14 tests automatisés.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {['FastAPI', 'MLflow', 'DVC', 'pytest'].map(t => (
                      <span key={t} className="text-xs px-2 py-1 rounded bg-card-border text-foreground/80">{t}</span>
                    ))}
                  </div>
                </CosmicCard>
              </motion.div>
              
              {/* Project 5 */}
              <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} transition={{ delay: 0.4 }}>
                <CosmicCard className="h-full flex flex-col group">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-muted-foreground px-2 py-1 rounded-full border border-border">2025</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">VegiTrack</h3>
                  <p className="text-sm text-muted-foreground mb-6 flex-grow">
                    Plateforme agricole intelligente avec web scraping météo et fiches techniques. Application web complète.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {['Django REST', 'React', 'BeautifulSoup'].map(t => (
                      <span key={t} className="text-xs px-2 py-1 rounded bg-card-border text-foreground/80">{t}</span>
                    ))}
                  </div>
                </CosmicCard>
              </motion.div>

              {/* Project 6 */}
              <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} transition={{ delay: 0.5 }}>
                <CosmicCard className="h-full flex flex-col group">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform">
                      <BookOpen className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-muted-foreground px-2 py-1 rounded-full border border-border">2025</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Book Analyzer</h3>
                  <p className="text-sm text-muted-foreground mb-6 flex-grow">
                    Analyse intelligente de livres via Open Library API et LLMs. Génération audio MP3 et automatisation via n8n.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {['Python', 'LLM', 'n8n', 'API REST'].map(t => (
                      <span key={t} className="text-xs px-2 py-1 rounded bg-card-border text-foreground/80">{t}</span>
                    ))}
                  </div>
                </CosmicCard>
              </motion.div>

            </div>
          </div>
        </section>

        {/* SKILLS & CERTIFICATIONS SECTION */}
        <section id="skills" className="w-full py-24 px-6 relative">
          <div className="container max-w-5xl mx-auto">
            <SectionHeading>Arsenal Technique</SectionHeading>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <h4 className="text-lg font-semibold mb-4 text-primary border-b border-border pb-2">Langages</h4>
                  <div className="flex flex-wrap gap-3">
                    {['Python', 'R', 'C/C++', 'SQL', 'Java'].map(skill => (
                      <span key={skill} className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium hover:border-primary/50 transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
                
                <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.1 }}>
                  <h4 className="text-lg font-semibold mb-4 text-secondary border-b border-border pb-2">ML / Intelligence Artificielle</h4>
                  <div className="flex flex-wrap gap-3">
                    {['TensorFlow', 'PyTorch', 'Scikit-learn', 'TF Lite', 'ONNX', 'HuggingFace'].map(skill => (
                      <span key={skill} className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium hover:border-secondary/50 transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
                
                <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }}>
                  <h4 className="text-lg font-semibold mb-4 text-accent border-b border-border pb-2">MLOps & Outils</h4>
                  <div className="flex flex-wrap gap-3">
                    {['MLflow', 'DVC', 'Airflow', 'Docker', 'FastAPI', 'Evidently', 'Grafana', 'Git'].map(skill => (
                      <span key={skill} className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium hover:border-accent/50 transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
              
              <div className="space-y-8">
                <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.3 }}>
                  <h3 className="text-2xl font-bold font-display mb-6 flex items-center gap-3">
                    <Award className="text-accent" /> Certifications NVIDIA
                  </h3>
                  <div className="space-y-4">
                    <CosmicCard className="!p-5 bg-card/50 hover:bg-card">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-bold text-foreground">Rapid App Development with LLMs</h4>
                          <p className="text-sm text-muted-foreground mt-1">NVIDIA • Nov 2025</p>
                        </div>
                        <ExternalLink className="w-4 h-4 text-muted-foreground" />
                      </div>
                      <p className="text-xs font-mono mt-3 text-white/30 break-all">ID: Tntqjwr8R0SU0AaqQHXf7g</p>
                    </CosmicCard>
                    
                    <CosmicCard className="!p-5 bg-card/50 hover:bg-card">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-bold text-foreground">Building RAG Agents with LLMs</h4>
                          <p className="text-sm text-muted-foreground mt-1">NVIDIA • Nov 2025</p>
                        </div>
                        <ExternalLink className="w-4 h-4 text-muted-foreground" />
                      </div>
                      <p className="text-xs font-mono mt-3 text-white/30 break-all">ID: 09K2a-uhSTW2WIcWsZyP9Q</p>
                    </CosmicCard>
                  </div>
                </motion.div>
                
                <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.4 }}>
                  <h4 className="text-lg font-semibold mb-4 border-b border-border pb-2">Langues & Soft Skills</h4>
                  <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                    <li><span className="text-foreground">Français, Anglais</span> (Courant)</li>
                    <li><span className="text-foreground">Espagnol</span> (Débutant)</li>
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {['Leadership', 'Travail en équipe', 'Communication', 'Résolution de problèmes'].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-white/5 rounded-full text-xs text-foreground/80">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="w-full py-24 px-6 relative bg-gradient-to-b from-transparent to-background/90">
          <div className="container max-w-4xl mx-auto text-center">
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Initialiser le Contact</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
                Je suis actuellement à la recherche de nouvelles opportunités pour appliquer mes compétences en IA et MLOps sur des projets à fort impact.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <a href="mailto:hajarelhallague@gmail.com" className="flex flex-col items-center p-6 bg-card border border-border rounded-2xl hover:border-primary/50 transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                    <Mail />
                  </div>
                  <span className="text-sm font-medium">hajarelhallague@gmail.com</span>
                </a>
                <a href="tel:+212618159817" className="flex flex-col items-center p-6 bg-card border border-border rounded-2xl hover:border-secondary/50 transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mb-4 group-hover:scale-110 transition-transform">
                    <Phone />
                  </div>
                  <span className="text-sm font-medium">+212 6 18 15 98 17</span>
                </a>
                <a href="https://github.com/HLG-1" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-6 bg-card border border-border rounded-2xl hover:border-foreground/50 transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-foreground mb-4 group-hover:scale-110 transition-transform">
                    <Github />
                  </div>
                  <span className="text-sm font-medium">github.com/HLG-1</span>
                </a>
              </div>
              
            </motion.div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="w-full py-8 border-t border-border text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} Hajar EL HALLAGUE. Conçu dans l'univers numérique.</p>
        </footer>
      </main>
    </div>
  );
}
