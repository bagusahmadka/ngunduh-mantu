"use strict";

import { motion } from "framer-motion";
import { MapPin, Calendar, Clock, Navigation } from "lucide-react";

export default function EventDetail() {
  return (
    <section className="py-24 px-6 relative bg-ivory bg-paper-texture">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-batik-pattern opacity-10 rotate-180 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-batik-pattern opacity-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif-primary text-gold mb-4 pb-2 leading-normal">Adicara Ngunduh Mantu</h2>
          <div className="w-24 h-[1px] bg-gold-metallic mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-1 gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative bg-white/40 backdrop-blur-sm p-10 md:p-16 border border-gold-metallic/20 shadow-xl text-center"
          >
            {/* Elegant Border */}
            <div className="absolute inset-2 border border-gold-metallic/10 pointer-events-none" />
            
            <div className="flex flex-col items-center gap-8">
              <div className="space-y-4">
                <Calendar className="w-8 h-8 text-gold mx-auto mb-4" />
                <h3 className="text-3xl font-serif-primary text-dark-brown">Minggu, 2 Agustus 2026</h3>
                <div className="flex items-center justify-center gap-4 text-gold-metallic">
                  <div className="w-12 h-[1px] bg-gold-metallic/30" />
                  <Clock className="w-5 h-5" />
                  <div className="w-12 h-[1px] bg-gold-metallic/30" />
                </div>
                <p className="text-2xl font-serif-secondary italic text-dark-brown/80">Pukul 10.00 WIB - Selesai</p>
              </div>

              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gold-metallic/20 to-transparent" />

              <div className="space-y-6">
                <MapPin className="w-8 h-8 text-gold mx-auto mb-4" />
                <div className="space-y-2">
                  <h4 className="text-2xl font-serif-primary text-dark-brown uppercase tracking-widest">Kediaman Mempelai Pria</h4>
                  <p className="text-lg font-serif-secondary text-dark-brown/70 max-w-md mx-auto italic">
                    Gg. Prenjak 01 RT 05/01, <br />
                    Kuncen Lama, Ungaran
                  </p>
                </div>

                <motion.a
                  href="https://www.google.com/maps/search/?api=1&query=-7.124538,110.411316"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, backgroundColor: "#3E2723", color: "#FFFFF0" }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 px-8 py-4 border border-dark-brown text-dark-brown font-serif-secondary text-lg tracking-widest transition-all duration-300"
                >
                  <Navigation className="w-5 h-5" />
                  BUKA GOOGLE MAPS
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Embedded Map */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-12 h-80 w-full border border-gold-metallic/20 grayscale hover:grayscale-0 transition-all duration-1000 shadow-lg overflow-hidden"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3959.0125829099784!2d110.41131607499841!3d-7.124537992879278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMDcnMjguMyJTIDExMMKwMjQnNTAuMCJF!5e0!3m2!1sen!2sid!4v1778373892777!5m2!1sen!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
