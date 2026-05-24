// components/sections/TestimonialsSection.tsx

import Image from "next/image";
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";

const testimonials = [
  {
    id: 1,
    image: "/images/testimonials/testimonial1.jpg",
    title: "ຄວາມປະທັບໃຈໃນການຫຼຸດນ້ຳໜັກ ກັບອາຫານທີ່ດີ ແລະ ປັບພຶດຕິກຳ",
  },
  {
    id: 2,
    image: "/images/testimonials/testimonial2.jpg",
    title: "ດູແລຜິວໜ້າ ແລະ ຄວາມງາມ ດ້ວຍທີມງານມືອາຊີບ",
  },
  {
    id: 3,
    image: "/images/testimonials/testimonial3.jpg",
    title: "ຄວາມປະທັບໃຈຈາກການບໍລິການ ທີ່ເປັນກັນເອງ ແລະ ອົບອຸ່ນ",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-gray-50 py-10">
      <div className="mx-auto max-w-360 px-4 lg:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div
              className="w-0 h-0 border-l-[20px] border-l-transparent border-b-[20px] border-b-gold/60"
              aria-hidden="true"
            />

            <h2 className="text-2xl sm:text-3xl font-bold text-primary leading-tight">
              ຄວາມປະທັບໃຈຜູ້ຮັບບໍລິການ
            </h2>
          </div>

          <Link
            href="/articles"
            className="text-gold flex items-center text-sm font-semibold hover:opacity-80 transition-opacity hover:underline"
          >
            ເບິ່ງຂໍ້ມູນທັງໝົດ <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 800px"
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col p-6 gap-4">
                <h3 className="line-clamp-3 text-lg font-semibold leading-relaxed text-primary">
                  {item.title}
                </h3>

                <div className="flex justify-end mb-6 lg:mb-0">
                  <Link href="/" className="button">
                    ລາຍລະອຽດ
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        {/* <div className="mt-10 flex items-center justify-center gap-3">
          <div className="h-3 w-3 rounded-full bg-[#18452b]" />
          <div className="h-3 w-3 rounded-full bg-gray-300" />
          <div className="h-3 w-3 rounded-full bg-gray-300" />
        </div> */}
      </div>
    </section>
  );
}
