import {
  FaYoutube,
  FaInstagram,
  FaTiktok,
  FaLine,
  FaFacebook,
  FaPhone,
  FaPhoneVolume,
  FaEnvelope,
  FaLocationDot,
  FaWhatsapp,
} from "react-icons/fa6";

const contactItems = [
  {
    icon: FaPhoneVolume,
    label: "1888",
    href: "tel:1888",
  },
  {
    icon: FaPhone,
    label: "+856 20 999 99999",
    href: "tel:+85620999999",
  },
  {
    icon: FaEnvelope,
    label: "Phonsavanh@gmail.com",
    href: "mailto:Phonsavanh@gmail.com",
  },
  {
    icon: FaLocationDot,
    label: "dongdok, xaithani, vientiane",
    href: "https://maps.google.com",
  },
];

const socialLinks = [
  { icon: FaFacebook, href: "https://facebook.com", label: "Facebook" },
  { icon: FaWhatsapp, href: "https://whatsapp.com", label: "WhatsApp" },
  { icon: FaLine, href: "https://line.me", label: "Line" },
  // { icon: FaTiktok, href: "https://tiktok.com", label: "TikTok" },
  // { icon: FaYoutube, href: "https://youtube.com", label: "YouTube" },
  // { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
];

export function ContactBar() {
  return (
    <div>
      {/* Gold Contact Bar - 6 columns total, 1st and 6th empty */}
      <div className="w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
          {[null, ...contactItems, null].map((item, index) => {
            if (!item) {
              return (
                <div
                  key={`empty-${index}`}
                  className={`hidden lg:block bg-[#bcdcd5] border-white ${index === 0 ? "border-r-2" : ""}`}
                />
              );
            }

            const { icon: Icon, label, href } = item;
            return (
              <a
                key={label}
                href={href}
                target={
                  href.includes("maps") || href.includes("http")
                    ? "_blank"
                    : undefined
                }
                rel="noopener noreferrer"
                className={`flex flex-col items-center justify-center gap-1.5 py-3 lg:py-6 bg-[#bcdcd5] text-primary  hover:bg-[#d5ede8] transition-colors border-white
                  ${index % 2 === 1 ? "border-r-2" : ""} 
                  ${index < 3 ? "border-b-2 md:border-b-0" : ""}
                  md:border-r-2
                  ${index === 3 ? "md:border-r-0 lg:border-r-2" : ""}
                  lg:border-b-0 lg:border-r-2 
              `}
              >
                <div className="flex items-center justify-center shrink-0">
                  <Icon size={20} className="text-primary lg:text-[28px]" />
                </div>
                <span className="text-xs lg:text-sm font-medium text-center leading-tight px-1 lg:px-2">
                  {label}
                </span>
              </a>
            );
          })}
        </div>
      </div>
      {/* Social Icons Row */}
      <section className="bg-white py-3 lg:py-6">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-3 lg:gap-6 flex-wrap">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 lg:w-11 lg:h-11 rounded-full border-2 border-gold flex items-center justify-center text-gold hover:bg-gold hover:text-white transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
