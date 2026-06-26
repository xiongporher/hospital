// components/sections/NewsUpdateSection.tsx

import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const news = [
  {
    id: 1,
    title: "ກິດຈະກຳ Family Fair ເພື່ອສ້າງຄວາມໂປ່ງໃສ ແລະ ຄວາມສຳພັນທີ່ດີໃນອົງກອນ",
    description:
      "ກິດຈະກຳ Family Fair ຈັດຂຶ້ນເພື່ອສ້າງຄວາມສາມັກຄີ ແລະ ຄວາມສຳພັນທີ່ດີພາຍໃນອົງກອນ",
    image: "/images/news/news1.jpg",
    category: "ຂ່າວສານ",
  },
  {
    id: 2,
    title: "ໂຮງໝໍອຸດອນ ມອບເງິນສະໜັບສະໜູນກິດຈະກຳເພື່ອສັງຄົມ",
    description:
      "ໂຮງໝໍອຸດອນ ສືບຕໍ່ສົ່ງເສີມກິດຈະກຳດ້ານສັງຄົມ ແລະ ຊ່ວຍເຫຼືອຊຸມຊົນ",
    image: "/images/news/news2.webp",
    category: "ກິດຈະກຳ",
  },
  {
    id: 3,
    title: "ໂຄງການຝຶກອົບຮົມພະນັກງານ ເພີ່ມທັກສະການໃຫ້ບໍລິການປະຊາຊົນ",
    description:
      "ພະນັກງານໄດ້ເຂົ້າຮ່ວມການອົບຮົມເພື່ອພັດທະນາທັກສະ ແລະ ການໃຫ້ບໍລິການ",
    image: "/images/news/news3.jpg",
    category: "ປະຊາສຳພັນ",
  },
  {
    id: 4,
    title: "ປະຊຸມພັດທະນາລະບົບດິຈິຕອນພາຍໃນອົງກອນ ປະຈຳປີ 2026",
    description: "ການປະຊຸມເນັ້ນການພັດທະນາລະບົບ digital ເພື່ອຍົກລະດັບການບໍລິການ",
    image: "/images/news/news4.jpg",
    category: "ອັບເດດ",
  },
  {
    id: 5,
    title: "ໂຄງການກວດສຸຂະພາບຟຣີ ເພື່ອປະຊາຊົນໃນຊຸມຊົນ",
    description:
      "ໂຮງໝໍໄດ້ຈັດກິດຈະກຳກວດສຸຂະພາບຟຣີ ເພື່ອສົ່ງເສີມການດູແລສຸຂະພາບໃຫ້ປະຊາຊົນ",
    image: "/images/news/news1.jpg",
    category: "ກິດຈະກຳ",
  },
];

export default function NewsUpdateSection() {
  const featuredNews = news[0];
  const sideNews = news.slice(1);

  return (
    <section className="w-full py-10">
      <div className="mx-auto max-w-360 px-4 lg:px-6">
        {/* Header */}
        <div className="mb-10 flex items-end justify-between">
          <div className="flex items-center gap-3">
            <div
              className="h-0 w-0 border-b-[20px] border-b-gold/60 border-l-[20px] border-l-transparent"
              aria-hidden="true"
            />

            <h2 className="text-xl font-bold text-primary md:text-3xl">
              ຂ່າວສານ
            </h2>
          </div>

          <Link
            href="/news"
            className="flex items-center text-sm font-semibold text-gold transition-opacity hover:opacity-80 hover:underline"
          >
            ເບິ່ງຂໍ້ມູນທັງໝົດ
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        {/* Content */}
        <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          {/* Left Featured */}
          <div className="group flex h-full flex-col overflow-hidden bg-white">
            {/* Image */}
            <div className="relative flex-1 min-h-[280px] overflow-hidden">
              <Image
                src={featuredNews.image}
                alt={featuredNews.title}
                fill
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            {/* <div className="p-5">
              <span className="inline-block rounded bg-gold/10 px-3 py-1 text-xs font-medium text-gold">
                {featuredNews.category}
              </span>

              <h3 className="mt-4 line-clamp-2 text-xl font-semibold leading-8 text-gray-800">
                {featuredNews.title}
              </h3>

              <p className="mt-3 line-clamp-3 text-sm leading-7 text-gray-500">
                {featuredNews.description}
              </p>

              <div className="mt-5 flex justify-end">
                <Link href="/articles" className="button">
                  ລາຍລະອຽດ
                </Link>
              </div>
            </div> */}
          </div>

          {/* Right Side */}
          <div className="grid h-full grid-cols-2 gap-6">
            {sideNews.map((item) => (
              <div
                key={item.id}
                className="group flex flex-col overflow-hidden bg-white transition duration-300 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative h-32 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 400px"
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-between p-3">
                  <div>
                    {/* Category */}
                    <span className="inline-block rounded bg-gold/10 px-2 py-0.5 text-[9px] font-medium text-gold">
                      {item.category}
                    </span>

                    {/* Title */}
                    <h4 className="mt-2 line-clamp-2 text-xs font-semibold leading-5 text-gray-800">
                      {item.title}
                    </h4>

                    {/* Description */}
                    <p className="mt-1 line-clamp-2 text-[11px] leading-4 text-gray-400">
                      {item.description}
                    </p>
                  </div>

                  {/* Button */}
                  <div className="mt-3 flex justify-end">
                    <Link
                      href="/articles"
                      className="inline-flex items-center justify-center rounded bg-[#cbb9a6] px-2.5 py-1 text-[10px] font-medium text-white transition hover:bg-[#b8a28b]"
                    >
                      ລາຍລະອຽດ
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
