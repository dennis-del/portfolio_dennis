import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowLeft, ArrowRight, Globe, Code, Calendar, CheckCircle } from 'lucide-react';

function Contribution() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  const projects = [
    {
      id: 2,
      title: "WAPO LLC",
      description: "Professional business website for WAPO LLC with modern design, responsive layout, and optimized user experience.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      link: "https://www.wapollc.com/",
      category: "Business Website",
      year: "2024",
      status: "Live",
      gradient: "from-emerald-400 to-cyan-400"
    },
    {
      id: 3,
      title: "ABCD FX",
      description: "Trading platform website with real-time data visualization, user dashboard, and comprehensive financial tools.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop",
      link: "http://abcdfx.com/",
      category: "Trading Platform",
      year: "2024",
      status: "Live",
      gradient: "from-purple-400 to-pink-400"
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      checkScrollButtons();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const checkScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = windowWidth < 768 ? 300 : 400;
      const newScrollLeft = direction === 'left' 
        ? scrollRef.current.scrollLeft - scrollAmount
        : scrollRef.current.scrollLeft + scrollAmount;
      
      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => checkScrollButtons();
    const scrollElement = scrollRef.current;
    
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll);
      checkScrollButtons();
    }
    
    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen py-10 md:py-20 overflow-hidden">
      {/* Animated Background Elements - Responsive Sizing */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-pink-500/10 to-emerald-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10">
        {/* Header Section - Responsive Text Size */}
        <motion.h2 
          whileInView={{ opacity: 1, y: 0 }} 
          initial={{ opacity: 0, y: -100 }} 
          transition={{ duration: 0.5 }} 
          className='my-10 md:my-20 text-center text-3xl md:text-4xl'
        >
          My Contributions
        </motion.h2>

        {/* Projects Section */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          {/* Navigation Buttons - Responsive Visibility */}
          <AnimatePresence>
            {canScrollLeft && windowWidth >= 768 && (
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(168, 85, 247, 0.2)" }}
                whileTap={{ scale: 0.9 }}
                onClick={() => scroll('left')}
                className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 text-white shadow-2xl transition-all duration-300 hover:border-purple-400/50 group"
              >
                <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 mx-auto group-hover:text-purple-300 transition-colors" />
              </motion.button>
            )}
            
            {canScrollRight && windowWidth >= 768 && (
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(34, 197, 94, 0.2)" }}
                whileTap={{ scale: 0.9 }}
                onClick={() => scroll('right')}
                className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 text-white shadow-2xl transition-all duration-300 hover:border-cyan-400/50 group"
              >
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 mx-auto group-hover:text-cyan-300 transition-colors" />
              </motion.button>
            )}
          </AnimatePresence>

          {/* Projects Container - Responsive Layout */}
          <div
            ref={scrollRef}
            className="flex gap-4 md:gap-8 overflow-x-auto scrollbar-hide py-6 md:py-12 scroll-smooth px-4 sm:px-0"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              // Responsive padding calculation
              paddingLeft: windowWidth < 768 ? '0' : `calc(50% - ${windowWidth < 1024 ? '18rem' : '22rem'})`,
              paddingRight: windowWidth < 768 ? '0' : `calc(50% - ${windowWidth < 1024 ? '18rem' : '22rem'})`
            }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100 
                }}
                whileHover={{ 
                  y: windowWidth >= 768 ? -15 : 0,
                  transition: { duration: 0.3 }
                }}
                onHoverStart={() => windowWidth >= 768 && setHoveredProject(project.id)}
                onHoverEnd={() => windowWidth >= 768 && setHoveredProject(null)}
                className="flex-shrink-0 w-72 sm:w-80 md:w-96 group cursor-pointer"
              >
                {/* Glass Card - Responsive Styling */}
                <div className="relative bg-white/5 backdrop-blur-2xl rounded-2xl md:rounded-3xl border border-white/10 shadow-xl md:shadow-2xl overflow-hidden transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:shadow-purple-500/20">
                  
                  {/* Image Container - Responsive Height */}
                  <div className="relative h-48 sm:h-52 md:h-56 overflow-hidden">
                    <motion.img
                      whileHover={{ scale: windowWidth >= 768 ? 1.1 : 1 }}
                      transition={{ duration: 0.6 }}
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                    
                    {/* Status Badge - Responsive Size */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="absolute top-3 right-3 md:top-4 md:right-4 flex items-center gap-1 md:gap-2 px-2 py-1 md:px-3 md:py-2 bg-emerald-500/90 backdrop-blur-sm rounded-lg md:rounded-xl text-white text-xs md:text-sm font-semibold shadow-lg"
                    >
                      <CheckCircle className="w-3 h-3 md:w-4 md:h-4" />
                      {project.status}
                    </motion.div>
                    
                    {/* Category Badge - Responsive Size */}
                    <div className="absolute top-3 left-3 md:top-4 md:left-4 px-3 py-1 md:px-4 md:py-2 bg-black/30 backdrop-blur-md rounded-lg md:rounded-xl text-white text-xs md:text-sm font-medium border border-white/20">
                      {project.category}
                    </div>
                    
                    {/* Hover Overlay - Desktop Only */}
                    <AnimatePresence>
                      {hoveredProject === project.id && windowWidth >= 768 && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center"
                        >
                          <motion.a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`flex items-center gap-2 md:gap-3 px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r ${project.gradient} text-white rounded-xl md:rounded-2xl font-bold shadow-xl md:shadow-2xl hover:shadow-lg transition-all duration-300 text-sm md:text-base`}
                          >
                            <Globe className="w-4 h-4 md:w-5 md:h-5" />
                            View Live
                            <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
                          </motion.a>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Mobile Touch Link */}
                    {windowWidth < 768 && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="absolute inset-0 z-10"
                        aria-label={`View ${project.title} project`}
                      />
                    )}
                  </div>

                  {/* Content - Responsive Padding */}
                  <div className="p-5 md:p-8">
                    <div className="flex items-center justify-between mb-3 md:mb-4">
                      <motion.h3
                        className={`text-xl md:text-2xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}
                      >
                        {project.title}
                      </motion.h3>
                      <div className="flex items-center gap-1 md:gap-2 text-white/60">
                        <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                        <span className="text-xs md:text-sm font-medium">{project.year}</span>
                      </div>
                    </div>
                    
                    <p className="text-white/70 text-xs md:text-sm leading-relaxed mb-4 md:mb-6">
                      {project.description}
                    </p>

                    {/* Mobile View Button */}
                    {windowWidth < 768 && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center gap-2 w-full py-2 md:py-3 bg-gradient-to-r ${project.gradient} text-white rounded-lg font-semibold text-sm transition-all duration-300`}
                      >
                        <Globe className="w-4 h-4" />
                        View Project
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Navigation Dots - Mobile Only */}
        {windowWidth < 768 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex justify-center mt-6 gap-2"
          >
            {projects.map((_, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2 }}
                className="w-2 h-2 rounded-full bg-white/20 hover:bg-gradient-to-r hover:from-purple-400 hover:to-cyan-400 transition-all duration-300 cursor-pointer"
              />
            ))}
          </motion.div>
        )}

        {/* Navigation Buttons - Mobile */}
        {windowWidth < 768 && (
          <div className="flex justify-center gap-4 mt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`w-12 h-12 rounded-xl bg-white/10 backdrop-blur-lg border ${canScrollLeft ? 'border-white/20 text-white' : 'border-white/5 text-white/30'} shadow-lg flex items-center justify-center`}
            >
              <ArrowLeft className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`w-12 h-12 rounded-xl bg-white/10 backdrop-blur-lg border ${canScrollRight ? 'border-white/20 text-white' : 'border-white/5 text-white/30'} shadow-lg flex items-center justify-center`}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        )}
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}

export default Contribution;