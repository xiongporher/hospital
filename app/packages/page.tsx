import Navbar from "@/components/layout/Navbar";
import { packages } from "@/data/packages";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ChevronRight, Clock, Percent } from "lucide-react";

export const metadata: Metadata = {
  title: "ແພັກເກັດ ແລະ ໂປຣໂມຊັ່ນ | Phongsavanh International Hospital",
  description:
    "ລວມແພັກເກັດກວດສຸຂະພາບ ແລະ ໂປຣໂມຊັ່ນສຸດຄຸ້ມຈາກໂຮງໝໍ ຟອງສະຫວັນ ອິນເຕີເນຊັນແນລ.",
};

// Helper function to calculate percentage discount
function calculateDiscount(priceStr: string, oldPriceStr: string) {
  const price = parseFloat(priceStr.replace(/,/g, ""));
  const oldPrice = parseFloat(oldPriceStr.replace(/,/g, ""));
  if (isNaN(price) || isNaN(oldPrice) || oldPrice <= price) return null;
  return Math.round(((oldPrice - price) / oldPrice) * 100);
}

export default function PackagesPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950 antialiased flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <div className="relative py-16 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--color-gold-light),_transparent)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <h1
              id="page-title"
              className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-white"
            >
              ແພັກເກັດ ແລະ ໂປຣໂມຊັ່ນ
            </h1>
            <p className="text-lg text-emerald-100/90 leading-relaxed">
              ເລືອກແພັກເກັດກວດສຸຂະພາບ ແລະ ໂປຣໂມຊັ່ນທີ່ເໝາະສົມກັບຕົວທ່ານ ແລະ
              ຄົນທີ່ທ່ານຮັກ ໃນລາຄາສຸດພິເສດ ແລະ ຄຸ້ມຄ່າທີ່ສຸດ.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-6 py-12">
        {/* Grid of Packages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => {
            const discount = calculateDiscount(pkg.price, pkg.oldPrice);
            return (
              <div
                key={pkg.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col border border-slate-100 relative"
              >
                {/* Discount Badge */}
                {discount && (
                  <span className="absolute top-4 left-4 z-10 inline-flex items-center gap-1 bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                    <Percent className="w-3 h-3" />
                    ປະຢັດ {discount}%
                  </span>
                )}

                {/* Card Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-200">
                  <Link
                    id={`view-package-${pkg.id}`}
                    href={`/packages/${pkg.id}`}
                  >
                    <Image
                      src={pkg.image}
                      alt={pkg.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </Link>
                  <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent pointer-events-none" />
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Expiration date */}
                  <div className="flex items-center gap-1.5 text-xs text-amber-600 font-semibold mb-3 bg-amber-50 w-fit py-1 rounded-md">
                    <Clock className="w-3.5 h-3.5" />
                    <span>ໝົດກຳນົດ {pkg.expiry}</span>
                  </div>

                  {/* Title & Desc */}
                  <h2 className="text-lg font-bold text-primary group-hover:text-gold transition-colors duration-300 line-clamp-2 mb-3 leading-snug">
                    {pkg.title}
                  </h2>
                  <p className="text-sm text-slate-500 leading-relaxed line-clamp-3 mb-6">
                    {pkg.description}
                  </p>

                  {/* Pricing (aligned to bottom) */}
                  <div className="mt-auto flex items-end justify-between">
                    <div>
                      <div className="text-sm text-slate-400 line-through">
                        {pkg.oldPrice} LAK
                      </div>
                      <div className="text-2xl font-black text-red-600 flex items-baseline gap-1">
                        {pkg.price}
                        <span className="text-xs font-bold text-slate-500">
                          LAK
                        </span>
                      </div>
                    </div>

                    <Link
                      id={`view-package-${pkg.id}`}
                      href={`/packages/${pkg.id}`}
                      className="inline-flex items-center justify-center rounded bg-[#cbb9a6] hover:bg-[#b8a28b] px-4 py-2.5 text-sm font-bold text-white transition duration-300 shadow-sm"
                    >
                      ລາຍລະອຽດ
                      <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
