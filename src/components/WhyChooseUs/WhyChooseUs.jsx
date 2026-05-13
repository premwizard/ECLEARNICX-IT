import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Zap, 
  Shield, 
  Activity, 
  Layers, 
  Globe 
} from 'lucide-react';

const features = [
  { 
    title: "Innovation", 
    desc: "Pushing boundaries with cutting-edge tech.",
    icon: Cpu,
    color: "text-primary"
  },
  { 
    title: "AI Solutions", 
    desc: "Smart automation for complex workflows.",
    icon: Zap,
    color: "text-secondary"
  },
  { 
    title: "Cloud Security", 
    desc: "Enterprise-grade protection by default.",
    icon: Shield,
    color: "text-primary"
  },
  { 
    title: "Fast Delivery", 
    desc: "Agile pipelines for rapid market entry.",
    icon: Activity,
    color: "text-secondary"
  },
  { 
    title: "Scalable Systems", 
    desc: "Architectures built for global growth.",
    icon: Layers,
    color: "text-white"
  },
  { 
    title: "Enterprise Ready", 
    desc: "Mission-critical reliability and support.",
    icon: Globe,
    color: "text-primary"
  }
];

const FeatureCard = ({ feature, index }) => {
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group relative p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primary/30 hover:bg-white/[0.05] transition-all duration-300"
    >
      <div className="flex flex-col gap-4">
        {/* Icon Header */}
        <div className={`p-3 rounded-xl bg-white/5 w-fit border border-white/5 group-hover:border-primary/20 group-hover:bg-primary/10 transition-all duration-300 ${feature.color}`}>
          <Icon className="w-6 h-6" />
        </div>
        
        {/* Text Content */}
        <div>
          <h3 className="text-white font-bold text-xl mb-2 group-hover:text-primary transition-colors">
            {feature.title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
            {feature.desc}
          </p>
        </div>
      </div>

      {/* Subtle Glow Background */}
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 blur-2xl rounded-2xl transition-opacity pointer-events-none" />
    </motion.div>
  );
};

export default function WhyChooseUs() {
  return (
    <section 
      className="relative py-24 bg-[#050505] overflow-hidden min-h-[50vh] flex flex-col justify-center"
      id="why-choose-us"
    >
      {/* Background Noise */}
      <div className="absolute inset-0 noise opacity-[0.015] pointer-events-none" />
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-[1px] bg-primary/50" />
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px]">Technical Edge</span>
            <div className="w-8 h-[1px] bg-primary/50" />
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tighter py-1">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">ECLearnix?</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto mt-4 font-medium">
            We deliver high-performance solutions engineered for the modern digital landscape.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
