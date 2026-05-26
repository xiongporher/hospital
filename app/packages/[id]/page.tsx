import { packages } from "@/data/packages";
import { generatePackageMetadata } from "@/lib/metadata";
import Navbar from "@/components/layout/Navbar";
import SocialShare from "@/components/shared/SocialShare";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return packages.map((pkg) => ({
    id: pkg.id.toString(),
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const pkg = packages.find((p) => p.id === parseInt(id));

  if (!pkg) {
    return {
      title: "ແພັກເກັດບໍ່ພົບ",
    };
  }

  return generatePackageMetadata({
    title: pkg.title,
    description: pkg.description,
    image: pkg.image,
    id: id,
  });
}

// Discount
function calculateDiscount(priceStr: string, oldPriceStr: string) {
  const price = parseFloat(priceStr.replace(/,/g, ""));
  const oldPrice = parseFloat(oldPriceStr.replace(/,/g, ""));
  if (isNaN(price) || isNaN(oldPrice) || oldPrice <= price) return null;
  return Math.round(((oldPrice - price) / oldPrice) * 100);
}

export default async function PackageDetailPage({ params }: PageProps) {
  const { id } = await params;
  const pkg = packages.find((p) => p.id === parseInt(id));

  if (!pkg) notFound();

  const discount = calculateDiscount(pkg.price, pkg.oldPrice);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />

      <main className="flex-1 py-8">
        <div className="max-w-7xl mx-auto px-4">
          {/* BACK */}
          <Link
            href="/packages"
            className="inline-flex items-center gap-2 text-sm text-slate-500 mb-6 hover:text-primary transition"
          >
            <ArrowLeft className="w-5 h-5" />
            ກັບໄປ
          </Link>

          {/* TITLE */}
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-primary mb-5 leading-snug">
            {pkg.title}
          </h1>

          {/* IMAGE CARD */}
          <div className="bg-white rounded-2xl overflow-hidden border shadow-sm">
            {/* IMAGE */}
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={pkg.image}
                alt={pkg.title}
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="p-5 border-t border-slate-100">
              {/* TOP SECTION */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                {/* DISCOUNT */}
                {discount && (
                  <div className="flex justify-center sm:justify-start">
                    <div className="inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-4 py-2 text-sm font-semibold text-red-600">
                      <span className="text-base">🔥</span>
                      <span>ປະຢັດ {discount}%</span>
                    </div>
                  </div>
                )}

                {/* PRICE */}
                <div className="text-center sm:text-right">
                  <p className="text-xs font-medium tracking-wide text-slate-400 uppercase mb-1">
                    ລາຄາພິເສດ
                  </p>

                  {/* CURRENT PRICE */}
                  <div className="flex items-end justify-center sm:justify-end gap-2">
                    {/* NEW PRICE */}
                    <div className="text-3xl sm:text-4xl font-black text-red-600 leading-none">
                      {pkg.price}
                    </div>

                    <span className="text-sm font-semibold text-slate-500 mb-1">
                      LAK
                    </span>
                  </div>

                  {/* OLD PRICE */}
                  <div className="mt-1 text-sm text-slate-400 line-through">
                    {pkg.oldPrice} LAK
                  </div>
                </div>
              </div>

              {/* SHARE */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex justify-center sm:justify-end">
                <SocialShare title={pkg.title} description={pkg.description} />
              </div>
            </div>
          </div>

          {/* DESCRIPTION */}
          <div className="mt-6">
            <p className="text-2xl text-slate-600 leading-relaxed">
              {pkg.description}
            </p>
          </div>

          {/* DETAILS */}
          <div className="mt-6">
            <h3 className="text-2xl font-bold text-primary mb-4">ລາຍການກວດ</h3>

            <ul className="space-y-3">
              {pkg.details.map((d, i) => (
                <li key={i} className="flex gap-2 text-slate-600 text-lg">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  {d}
                </li>
              ))}
            </ul>
          </div>

          {/* TERMS */}
          <div className="mt-6">
            <h3 className="text-2xl font-bold text-primary mb-4">ເງື່ອນໄຂ</h3>

            <ul className="list-disc pl-5 space-y-2 text-lg text-slate-600">
              {pkg.terms.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
