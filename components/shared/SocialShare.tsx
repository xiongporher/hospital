"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp, FaFacebookF } from "react-icons/fa";
import { SiLine } from "react-icons/si";

interface SocialShareProps {
  title?: string;
  description?: string;
  className?: string;
  iconSize?: "sm" | "md" | "lg";
}

/**
 * Social Share Component - Next.js 16 Production Ready
 *
 * Features:
 * ✓ Uses react-icons for cleaner, maintainable icons
 * ✓ Works with SSR and prevents hydration mismatches
 * ✓ Supports IP-based deployments (e.g., 192.168.1.100)
 * ✓ Fully responsive for mobile and desktop
 * ✓ Secure with rel="noopener noreferrer"
 * ✓ Supports Facebook, WhatsApp, and LINE
 */
export default function SocialShare({
  title = "",
  description = "",
  className = "flex items-center gap-3",
  iconSize = "md",
}: SocialShareProps) {
  const [shareUrl, setShareUrl] = useState("");
  const [isClient, setIsClient] = useState(false);

  // Set state only after hydration to prevent mismatch
  // This pattern is intentional and necessary for hydration safety
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setShareUrl(window.location.href);
    setIsClient(true);
  }, []);

  // Build share text
  const shareText = [title, description].filter(Boolean).join("\n\n");

  // Sharing URLs
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    shareUrl,
  )}`;

  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(
    `${shareText}${shareText ? "\n\n" : ""}${shareUrl}`,
  )}`;

  const lineUrl = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(
    shareUrl,
  )}`;

  // Size configurations
  const sizeConfig = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12",
  };

  const iconSizeClass = sizeConfig[iconSize];

  // Return empty during SSR and before hydration (prevents hydration mismatch)
  if (!isClient || !shareUrl) {
    return <div className={className} />;
  }

  return (
    <div className={className}>
      {/* Facebook Share */}
      <a
        href={facebookUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Facebook"
        title="Share on Facebook"
        className={`${iconSizeClass} flex items-center justify-center rounded-full bg-slate-100 text-blue-600 hover:bg-blue-100 hover:text-blue-700 transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2`}
      >
        <FaFacebookF className="w-5 h-5" />
      </a>

      {/* WhatsApp Share */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on WhatsApp"
        title="Share on WhatsApp"
        className={`${iconSizeClass} flex items-center justify-center rounded-full bg-slate-100 text-green-500 hover:bg-green-100 hover:text-green-600 transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2`}
      >
        <FaWhatsapp className="w-5 h-5" />
      </a>

      {/* LINE Share */}
      <a
        href={lineUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LINE"
        title="Share on LINE"
        className={`${iconSizeClass} flex items-center justify-center rounded-full bg-slate-100 text-[#06C755] hover:bg-[#E8F7F0] hover:text-[#06C755] transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#06C755] focus:ring-offset-2`}
      >
        <SiLine className="w-5 h-5" />
      </a>
    </div>
  );
}
