"use client";

import { useState, useEffect } from "react";
import {
  FacebookShareButton,
  LineShareButton,
  WhatsappShareButton,
} from "react-share";
import { FaFacebookF, FaWhatsapp, FaLink, FaCheck } from "react-icons/fa";
import { SiLine } from "react-icons/si";

interface SocialShareProps {
  title?: string;
  description?: string;
}

export default function SocialShare({ title, description }: SocialShareProps) {
  const [shareUrl, setShareUrl] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setShareUrl(window.location.href);
    }
  }, []);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy link: ", err);
    }
  };

  // For WhatsApp and LINE, create a formatted message
  const textParts: string[] = [];
  if (title) textParts.push(title);
  if (description) textParts.push(description);
  const shareMessage = textParts.join("\n\n");

  return (
    <div className="flex flex-wrap items-center gap-3 py-4 my-6">
      <span className="text-sm font-semibold text-slate-500 mr-2">ແຊຣ໌</span>

      {/* Facebook - Uses Open Graph meta tags from the page */}
      <FacebookShareButton
        url={shareUrl}
        hashtag="#PhongsavanhHospital"
        className="flex h-10 w-10 items-center justify-center rounded-full! bg-slate-100! text-white hover:bg-slate-200! hover:scale-105 active:scale-95 transition-all duration-200 shadow-sm"
        aria-label="Share on Facebook"
      >
        <FaFacebookF className="w-4 h-4 text-blue-600" />
      </FacebookShareButton>

      {/* WhatsApp - Uses page meta tags + custom message */}
      <WhatsappShareButton
        url={shareUrl}
        title={shareMessage}
        separator="\n\n"
        className="flex h-10 w-10 items-center justify-center rounded-full! bg-slate-100! text-white hover:bg-slate-200! hover:scale-105 active:scale-95 transition-all duration-200 shadow-sm"
        aria-label="Share on WhatsApp"
      >
        <FaWhatsapp className="w-5 h-5 text-green-500" />
      </WhatsappShareButton>

      {/* LINE - Uses custom message */}
      <LineShareButton
        url={shareUrl}
        title={shareMessage}
        className="flex h-10 w-10 items-center justify-center rounded-full! bg-slate-100! text-white hover:bg-slate-200! hover:scale-105 active:scale-95 transition-all duration-200 shadow-sm"
        aria-label="Share on LINE"
      >
        <SiLine className="w-5 h-5 text-[#06C755]" />
      </LineShareButton>

      <button
        onClick={handleCopyLink}
        className={`flex h-10 px-4 items-center justify-center gap-2 rounded-full text-sm font-bold transition-all duration-200 shadow-sm hover:scale-105 active:scale-95 ${
          copied
            ? "bg-primary/70 text-white"
            : "bg-slate-100 text-slate-700 hover:bg-slate-200"
        }`}
        title="Copy Link"
      >
        {copied ? (
          <>
            <FaCheck className="w-3.5 h-3.5 animate-scale-up" />
            <span>ຄັດລອກແລ້ວ!</span>
          </>
        ) : (
          <>
            <FaLink className="w-3.5 h-3.5" />
            <span>ຄັດລອກລິ້ງ</span>
          </>
        )}
      </button>
    </div>
  );
}
