import Navbar from "@/components/layout/Navbar";
import { articles } from "@/data/articles";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ChevronRight, Calendar, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "ບົດຄວາມທາງການແພດ | Phongsavanh International Hospital",
  description:
    "ຄັງຄວາມຮູ້ ແລະ ບົດຄວາມທາງການແພດ ໃຫ້ຄຳແນະນຳໃນການເບິ່ງແຍງສຸຂະພາບຈາກແພດຜູ້ຊ່ຽວຊານ.",
};

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950 antialiased flex flex-col">
      {/* Hero Section */}
      <div className="relative py-16 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--color-gold-light),_transparent)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <h1
              id="page-title"
              className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-white"
            >
              ບົດຄວາມທາງການແພດ
            </h1>
            <p className="text-lg text-emerald-100/90 leading-relaxed">
              ອ່ານບົດຄວາມ ແລະ ຄວາມຮູ້ດ້ານສຸຂະພາບທີ່ເປັນປະໂຫຍດ
              ໂດຍທີມແພດຜູ້ຊ່ຽວຊານຈາກ ໂຮງໝໍ ຟອງສະຫວັນ ອິນເຕີເນຊັນແນລ.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-6 py-12">
        {/* Grid of Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col border border-slate-100"
            >
              {/* Card Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-200">
                <Link
                  id={`view-article-${article.id}`}
                  href={`/articles/${article.id}`}
                >
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent pointer-events-none" />
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Meta info */}
                <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{article.date}</span>
                  </div>
                </div>

                {/* Title & Desc */}
                <h2 className="text-xl font-bold text-primary group-hover:text-gold transition-colors duration-300 line-clamp-2 mb-3 leading-snug">
                  {article.title}
                </h2>
                <p className="text-sm text-slate-500 leading-relaxed line-clamp-3 mb-6">
                  {article.description}
                </p>

                {/* Read Button (aligned to bottom) */}
                <div className="mt-auto pt-4 flex items-center justify-end">
                  <Link
                    id={`view-article-${article.id}`}
                    href={`/articles/${article.id}`}
                    className="inline-flex items-center text-sm font-bold text-gold hover:text-primary transition-colors duration-300"
                  >
                    ອ່ານເພີ່ມເຕີມ{" "}
                    <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
