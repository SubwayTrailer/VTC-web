"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      url: "https://images.unsplash.com/photo-1548149674-554178463920?auto=format&fit=crop&q=80&w=2000",
      alt: "Luoyang Longmen Grottoes - Vegan Travel China Heritage",
      title: "Luoyang Longmen Grottoes",
    },
    {
      url: "https://images.unsplash.com/photo-1524396309943-e03f5ec026a0?auto=format&fit=crop&q=80&w=2000",
      alt: "Hangzhou West Lake - Plant-Based Discovery Nature",
      title: "Hangzhou West Lake",
    },
    {
      url: "https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?auto=format&fit=crop&q=80&w=2000",
      alt: "Temple of Heaven Beijing - Conscious Journeys Culture",
      title: "Temple of Heaven, Beijing",
    },
    {
      url: "https://images.unsplash.com/photo-1527685238271-210368afec17?auto=format&fit=crop&q=80&w=2000",
      alt: "Sichuan Natural Scenery - Mindful Travel China Nature",
      title: "Sichuan Mountains",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen">
      {/* 1. Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-nav">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tighter text-[#4F772D]">
            VTC
          </div>
          <div className="hidden md:flex space-x-10 text-sm font-medium tracking-wide">
            <a href="#" className="hover:text-[#4F772D]">Home</a>
            <a href="#journeys" className="hover:text-[#4F772D]">Our Journeys</a>
            <a href="#story" className="hover:text-[#4F772D]">Story</a>
            <a href="#insights" className="hover:text-[#4F772D]">Insights</a>
            <a href="#subscribe" className="hover:text-[#4F772D]">Subscribe</a>
          </div>
          <button className="bg-[#4F772D] text-white px-5 py-2 rounded-full text-sm font-medium">
            Book Now
          </button>
        </div>
      </nav>

      {/* 2. Hero Component */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-black/30 z-10" />
            <img
              src={slide.url}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl md:text-6xl text-white mb-6 max-w-4xl leading-tight">
            Conscious Journeys, <br />
            <span className="italic">Plant-Based Discovery.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-10 font-light leading-relaxed">
            Experience the Soul of China through Slow and Mindful Travel.
          </p>
          <a href="#journeys" className="btn-primary">
            Start Your Journey
          </a>
        </div>
      </section>

      {/* 3. Founder's Story Section */}
      <section id="story" className="py-24 bg-[#F5EBE0]/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl mb-12 text-[#4F772D]">
            The Journey Behind the Vision <br />
            <span className="text-lg font-sans text-gray-500 block mt-2 font-light">品牌背后的初心</span>
          </h2>
          <div className="text-lg text-gray-700 leading-relaxed font-light space-y-6 text-justify">
            <p>
              [Founder's story placeholder - ready for your content]
            </p>
            <p className="italic">
              Creating a bridge between conscious travelers and the hidden gems of China, 
              one plant-based discovery at a time.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Offerings Component */}
      <section id="journeys" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl mb-4">Our Curated Experiences</h2>
              <p className="text-gray-500 font-light">Vegan travel China simplified for the modern explorer.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Nature & Heritage Journeys",
                desc: "Beijing, Luoyang, Jiangnan, Sichuan",
                img: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?auto=format&fit=crop&q=80&w=800",
              },
              {
                title: "Cultural Immersive Activities",
                desc: "Cuisine, Tea Arts, Agriculture",
                img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800",
              },
              {
                title: "Plant-Based Culinary Tours",
                desc: "Premium Vegan Food Discovery",
                img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
              },
              {
                title: "Tailored Travel Consultation",
                desc: "Bespoke Itinerary Design",
                img: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=800",
              },
            ].map((item, i) => (
              <div key={i} className="group card-hover border border-[#D5BDAF]/30 rounded-2xl overflow-hidden bg-white">
                <div className="h-48 overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-500 font-light leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Blog & SEO Section */}
      <section id="insights" className="py-24 bg-[#F5EBE0]/20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl mb-16 text-center">Conscious Travel Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              "Navigating China's Plant-Based Food Scene",
              "The Best Vegan-Friendly Heritage Sites in 2026",
              "Slow Travel: A New Way to Experience Ancient Cities",
            ].map((post, i) => (
              <div key={i} className="space-y-4">
                <div className="aspect-video bg-[#D5BDAF]/20 rounded-xl overflow-hidden" />
                <p className="text-xs uppercase tracking-widest text-[#4F772D] font-medium">Insight</p>
                <h3 className="text-xl leading-snug hover:text-[#4F772D] cursor-pointer transition-colors">{post}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Newsletter Component */}
      <section id="subscribe" className="py-32 bg-white">
        <div className="max-w-2xl mx-auto px-6 text-center border-t border-[#D5BDAF]/20 pt-24">
          <h2 className="text-3xl md:text-4xl mb-6">Be the First to Know</h2>
          <p className="text-gray-500 font-light mb-12">Join our community for mindful travel updates and exclusive plant-based guides in China.</p>
          
          {/* Loops Form Placeholder - Paste your embed code here */}
          <div className="flex flex-col md:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Your Email Address" 
              className="flex-1 px-6 py-4 rounded-full border border-[#D5BDAF]/40 focus:outline-none focus:border-[#4F772D] font-light"
            />
            <button className="btn-primary">
              Subscribe
            </button>
          </div>
          
          <p className="text-[10px] text-gray-400 mt-8 uppercase tracking-widest">
            Powered by Loops (Integration Placeholder)
          </p>
        </div>
      </section>

      <footer className="py-12 bg-white border-t border-[#D5BDAF]/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-xs tracking-widest uppercase">
          <p>© 2026 Vegan Travel China. All Rights Reserved.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-[#4F772D]">Instagram</a>
            <a href="#" className="hover:text-[#4F772D]">LinkedIn</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
