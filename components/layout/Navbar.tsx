"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaBars } from "react-icons/fa";
import { menuConfig } from "@/constants";
import { Globe, Search, X } from "lucide-react";
import Link from "next/link";
import { BiSolidPhoneCall } from "react-icons/bi";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  const [openSearch, setOpenSearch] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b-3 border-gold bg-white">
        <div className="h-5 w-full bg-linear-to-b from-gold/50 to-transparent" />

        <div className="mx-auto max-w-400 flex items-center justify-between px-6 py-4 lg:px-10">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.jpeg"
              alt="Hospital logo"
              width={160}
              height={160}
              className="object-contain"
              style={{ height: "auto" }}
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-6 lg:flex">
            <nav className="flex items-center gap-6">
              {menuConfig.map((section) =>
                section.items.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href || "#"}
                    className="text-md flex items-center font-semibold text-primary transition hover:text-primary/80"
                  >
                    {item.title}
                    {item.icon && <item.icon className="ml-1 h-5 w-5" />}
                  </Link>
                )),
              )}
            </nav>

            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                className="rounded-full py-2 text-md text-primary hover:text-gold"
              >
                <Globe className="mr-1 h-5 w-5" />
                EN
              </Button>
              <div className="h-6 w-[1px] bg-slate-300" />
              <Link
                href="tel:1888"
                className="flex items-center text-md font-semibold text-primary transition hover:opacity-80"
              >
                <BiSolidPhoneCall className="mr-1 h-5 w-5 text-gold" />
                1888
              </Link>
              <button
                className="text-slate-400 transition hover:text-primary"
                onClick={() => setOpenSearch(true)}
              >
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Mobile Menu Trigger */}
          <Sheet open={openMobileMenu} onOpenChange={setOpenMobileMenu}>
            <SheetTrigger asChild>
              <button
                type="button"
                className="inline-flex items-center justify-center text-primary lg:hidden"
              >
                <FaBars className="h-5 w-5" />
              </button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[85%] max-w-[400px] p-0">
              {/* Accessibility Title (Hidden) */}
              <SheetHeader className="px-6 pt-6 text-left">
                <SheetTitle className="text-xl font-bold text-primary">
                  Menu
                </SheetTitle>

                {/* Search Bar inside Header Area */}
                <div className="relative mt-4">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full rounded-full border border-slate-200 bg-slate-50 py-2 pl-9 pr-4 text-sm outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                  />
                </div>
              </SheetHeader>

              <nav className="flex flex-col px-6">
                {menuConfig.map((section) =>
                  section.items.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href || "#"}
                      className="flex items-center justify-between py-4 text-md font-semibold text-primary active:text-gold"
                      onClick={() => setOpenMobileMenu(false)}
                    >
                      {item.title}
                      {item.icon && (
                        <item.icon className="h-5 w-5 text-primary" />
                      )}
                    </Link>
                  )),
                )}

                <div className="mt-4 flex flex-col border-t border-slate-200 pt-4">
                  <button className="w-fit flex items-center gap-2 rounded-full py-4 text-md font-semibold text-primary">
                    <Globe className="h-5 w-5" />
                    EN
                  </button>

                  <Link
                    href="tel:1888"
                    className="flex items-center gap-2"
                    onClick={() => setOpenMobileMenu(false)}
                  >
                    <div className="flex items-center justify-center">
                      <BiSolidPhoneCall className="h-5 w-5 text-gold" />
                    </div>
                    <span className="text-md font-bold text-primary">1888</span>
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Desktop Search Overlay */}
      {openSearch && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center bg-black/60 pt-24">
          <div className="relative w-full max-w-2xl px-4">
            <button
              onClick={() => setOpenSearch(false)}
              className="absolute -top-12 right-4 text-white"
            >
              <X size={32} />
            </button>
            <div className="relative">
              <Search className="absolute left-5 top-1/2 h-6 w-6 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search for doctors, services..."
                className="w-full rounded-2xl bg-white py-6 pl-14 pr-6 text-xl shadow-2xl outline-none"
                autoFocus
              />
            </div>
          </div>
          <div
            className="absolute inset-0 -z-10"
            onClick={() => setOpenSearch(false)}
          />
        </div>
      )}
    </>
  );
}
