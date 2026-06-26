import { articles } from "@/data/articles";
import { generateArticleMetadata } from "@/lib/metadata";
import Navbar from "@/components/layout/Navbar";
import SocialShare from "@/components/shared/SocialShare";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, ArrowLeft } from "lucide-react";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    id: article.id.toString(),
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const article = articles.find((a) => a.id === parseInt(id));

  if (!article) {
    return {
      title: "ບົດຄວາມບໍ່ພົບ",
    };
  }

  return generateArticleMetadata({
    title: article.title,
    description: article.description,
    image: article.image,
    id: id,
  });
}

export default async function ArticleDetailPage({ params }: PageProps) {
  const { id } = await params;
  const article = articles.find((a) => a.id === parseInt(id));

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen text-slate-950 antialiased flex flex-col">
      <main className="flex-grow py-8 sm:py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Back Button */}
          <Link
            href="/articles"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-primary transition-colors mb-6 group"
          >
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            ກັບໄປໜ້າບົດຄວາມ
          </Link>

          {/* Article Card Wrapper */}
          {/* Header Block */}
          <div className="pb-6 mb-6">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-primary leading-snug mb-4">
              {article.title}
            </h1>

            {/* Author & Meta */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-500">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-gold" />
                <span>{article.date}</span>
              </div>
            </div>
          </div>

          {/* Feature Image */}
          <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden shadow-inner bg-white">
            <Image
              src={article.image}
              alt={article.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 800px"
            />
          </div>

          {/* Sharing Bar (Top) */}
          <div className="py-5 flex justify-end">
            <SocialShare
              title={article.title}
              description={article.description}
            />
          </div>

          {/* Article Content */}
          <div
            className="
                prose prose-slate max-w-none
                
                /* ປັບສີ ແລະ ຂະໜາດໂຕໜັງສືໃຫ້ໃຫຍ່ຂຶ້ນ ແລະ ເຂັ້ມຂຶ້ນ */
                text-lg
                text-slate-900

                prose-headings:text-primary
                prose-headings:font-bold

                [&_h2]:text-2xl 
                [&_h2]:mt-8
                [&_h2]:mb-2

                [&_h3]:text-xl  /* ເພີ່ມຂະໜາດຫົວຂໍ້ຍ່ອຍ */
                [&_h3]:mt-1
                [&_h3]:mb-2

                [&_p]:text-slate-800 /* ປັບສີຕົວໜັງສືປົກກະຕິໃຫ້ເຂັ້ມຂຶ້ນ (ຈາກ slate-600) */
                [&_p]:leading-8
                [&_p]:mb-1

                [&_ul]:pl-5
                [&_ul]:mb-1

                [&_li]:text-slate-800 /* ປັບສີຂອງ List ໃຫ້ເຂັ້ມຂຶ້ນ */
                [&_li]:mb-1
                [&_li]:leading-7
              "
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </main>
    </div>
  );
}
