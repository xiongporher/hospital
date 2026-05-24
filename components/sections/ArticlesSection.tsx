import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { articles } from "@/data/articles";

export default function ArticlesSection() {
  const homeArticles = articles.slice(0, 4);
  return (
    <section className="max-w-360 mx-auto px-4 lg:px-6 py-10">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-3">
          <div
            className="w-0 h-0 border-l-[20px] border-l-transparent border-b-[20px] border-b-gold/60"
            aria-hidden="true"
          />

          <h2 className="text-2xl sm:text-3xl font-bold text-primary leading-tight">
            ບົດຄວາມທາງການແພດ
          </h2>
        </div>

        <Link
          href="/articles"
          className="text-gold flex items-center text-sm font-semibold hover:opacity-80 transition-opacity hover:underline"
        >
          ເບິ່ງຂໍ້ມູນທັງໝົດ <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {homeArticles.map((item, index) => (
          <article
            key={item.id}
            className="group overflow-hidden bg-white flex flex-col"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-3 flex flex-col gap-4">
              <div>
                <h3 className="line-clamp-2 text-lg font-bold text-primary leading-snug mb-1">
                  {item.title}
                </h3>
                <p className="line-clamp-4 text-md text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div
                className={`flex justify-end lg:mb-0 ${
                  index !== homeArticles.length - 1 ? "mb-6" : ""
                }`}
              >
                <Link href={`/articles/${item.id}`} className="button">
                  ລາຍລະອຽດ
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
