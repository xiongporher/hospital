"use client";

import { MapPin, PhoneCall, Phone } from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, viewportOnce } from "@/lib/animations";

export default function EmergencyCTA() {
  const [mapActive, setMapActive] = useState(false);

  return (
    <section className="w-full overflow-auto">
      <div className="relative w-full min-h-[300px] md:min-h-[480px]">
        {/* Map */}
        <iframe
          title="Phongsavanh International Hospital Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.6!2d102.6145!3d17.9633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x312469!2sPhongsavanh+International+Hospital!5e0!3m2!1sen!2sla!4v1"
          className="absolute inset-0 w-full h-full border-0"
          style={{ filter: "saturate(1.1) contrast(1.05)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* Click to enable map */}
        {!mapActive && (
          <button
            onClick={() => setMapActive(true)}
            className="absolute inset-0 z-20 bg-black/20 cursor-pointer"
          />
        )}

        {/* Info Card */}
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 left-1/2 md:left-16 lg:left-24 -translate-x-1/2 md:translate-x-0 z-30 w-[270px] md:w-[380px] rounded-2xl overflow-hidden"
          style={{ boxShadow: "var(--shadow-elevated)" }}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {/* Header */}
          <div className="bg-primary p-5 md:p-6">
            <h2 className="text-primary-foreground font-bold text-sm md:text-xl mb-1">
              Phongsavanh International Hospital
            </h2>
            <p className="text-primary-foreground/90 text-[10px] md:text-xs font-semibold uppercase tracking-widest">
              24/7 Emergency Care
            </p>
          </div>

          {/* Body */}
          <div className="bg-card p-5 md:p-6 flex flex-col gap-4">
            {/* Address */}
            <div className="flex items-start gap-3 text-xs md:text-sm">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-lighter shrink-0">
                <MapPin className="w-4 h-4 text-primary-dark" />
              </div>
              <p className="text-muted-foreground leading-relaxed pt-1">
                Kaysone Phomvihane Road, Sivilai Village, Xaythany District,
                Vientiane Capital
              </p>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3 text-xs md:text-sm">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-lighter shrink-0">
                <PhoneCall className="w-4 h-4 text-primary-dark" />
              </div>

              <div className="pt-1">
                <p className="font-semibold text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                  Hotline
                </p>

                <a
                  href="tel:02-531-2151"
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  02-531-2151
                </a>

                <p className="text-muted-foreground text-sm">
                  02-531-2151 to 60
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 mt-1">
              <a
                href="tel:02-531-2151"
                className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-xs md:text-sm py-2.5 px-4 rounded-xl transition-all hover:scale-105 active:scale-95 flex-1"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>

              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-secondary hover:bg-accent text-foreground font-semibold text-xs md:text-sm py-2.5 px-4 rounded-xl transition-all flex-1"
              >
                <MapPin className="w-4 h-4" />
                Open Maps
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
