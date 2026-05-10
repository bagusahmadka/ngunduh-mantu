"use strict";

import { motion } from "framer-motion";
import { Copy, Check, CreditCard, Gift as GiftIcon } from "lucide-react";
import { useState } from "react";

export default function Gift() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 px-6 bg-ivory bg-paper-texture">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <GiftIcon className="w-12 h-12 text-gold mx-auto mb-6 opacity-50" />
          <h2 className="text-4xl md:text-5xl font-serif-primary text-gold mb-6 pb-2 leading-normal">Wedding Gift</h2>
          <p className="text-lg font-serif-secondary italic text-dark-brown/70 max-w-2xl mx-auto">
            Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Namun jika Anda ingin memberikan tanda kasih, Anda dapat mengirimkannya melalui:
          </p>
        </motion.div>

        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-panel p-10 rounded-2xl border border-gold/30 hover:border-gold/60 transition-colors shadow-[0_0_50px_rgba(212,175,55,0.1)]"
          >
            <h3 className="font-playfair text-2xl text-black-elegant mb-2 uppercase tracking-widest">Bank Jateng</h3>
            <p className="font-poppins text-gold text-2xl tracking-widest font-semibold mb-4">3022446397</p>
            <p className="font-cormorant text-xl text-black-elegant/80 mb-8 italic">a.n. Arlina</p>
            
            <div className="flex flex-col gap-4">
              <button
                onClick={() => copyToClipboard("3022446397")}
                className="inline-flex items-center justify-center w-full px-6 py-3 border border-gold/50 text-gold hover:bg-gold hover:text-black-elegant transition-all duration-300 rounded-full font-poppins text-xs tracking-widest uppercase"
              >
                {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                {copied ? "Berhasil Disalin" : "Salin Nomor Rekening"}
              </button>

              <a
                href="https://wa.me/6281229245807?text=Halo%20Arlina,%20saya%20ingin%20konfirmasi%20pengiriman%20kado%20pernikahan."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-gold text-black-elegant hover:bg-ivory transition-all duration-300 rounded-full font-poppins text-xs tracking-widest uppercase font-bold"
              >
                Konfirmasi WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
