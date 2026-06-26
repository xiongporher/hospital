import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";

const thumbnails = [
  {
    title: "Critical care complex",
    image: "/images/facilities/critical-care.jpg",
  },
  {
    title: "Children's center",
    image: "/images/facilities/childrens-center.jpg",
  },
  {
    title: "Colonoscopy at Samitivej",
    image: "/images/facilities/colonoscopy.jpg",
  },
];

// ສ້າງເປັນ Component ຍ່ອຍເພື່ອບໍ່ໃຫ້ Code ຊ້ຳຊ້ອນ
const HeaderContent = () => (
  <div className="mb-8">
    <div className="flex flex-col gap-2 mb-4">
      <div className="flex items-center gap-3">
        <div
          className="w-0 h-0 border-l-20 border-l-transparent border-b-20 border-b-gold/60"
          aria-hidden="true"
        />
        <h2 className="text-xl md:text-3xl font-bold text-primary">
          ສິ່ງອຳນວຍຄວາມສະດວກ
        </h2>
      </div>
      <p className="text-primary font-semibold text-lg ml-8">
        ພ້ອມເຕັກໂນໂລຊີລະດັບສາກົນ
      </p>
    </div>

    <Link
      href="/facilities"
      className="text-gold flex items-center text-sm font-semibold hover:opacity-80 transition-opacity ml-8 hover:underline"
    >
      ເບິ່ງຂໍ້ມູນທັງໝົດ <ChevronRight className="h-4 w-4 ml-1" />
    </Link>
  </div>
);

export default function FacilitiesSection() {
  return (
    <section className="bg-[#bcdcd5] py-10 w-full">
      <div className="max-w-360 mx-auto px-4 lg:px-6">
        {/* 1. Header ສໍາລັບໜ້າຈໍນ້ອຍ (Mobile/Tablet) - ຈະສະແດງເມື່ອຕ່ຳກວ່າ lg */}
        <div className="block lg:hidden">
          <HeaderContent />
        </div>

        <div className="flex flex-col lg:flex-row gap-3 md:gap-4 lg:gap-12 items-stretch">
          {/* Left Column: Featured Image */}
          <div className="lg:w-3/5 relative group cursor-pointer overflow-hidden min-h-87.5 lg:min-h-112.5">
            <Image
              src="/images/facilities/critical-care.jpg"
              alt="Samitivej Pregnancy Care"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/30 to-transparent pointer-events-none" />

            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-start w-full md:w-4/5">
              <div className="flex items-center justify-between w-full mb-4">
                <h3 className="text-white text-2xl md:text-3xl font-light tracking-wide uppercase">
                  Samitivej Pregnancy Care
                </h3>
                <ArrowRight className="text-white/70 w-6 h-6 transition-transform group-hover:translate-x-2" />
              </div>
              <p className="text-white/80 text-xs md:text-sm font-light leading-relaxed max-w-md">
                Narrow Band Imaging (NBI) International Colorectal Endoscopic
                classification (NICE) with magnification, the most validated
                classification.
              </p>
            </div>
          </div>

          {/* Right Column: Text Header & Thumbnails */}
          <div className="lg:w-2/5 flex flex-col justify-between">
            {/* 2. Header ສໍາລັບໜ້າຈໍໃຫຍ່ - ຈະສະແດງເມື່ອ lg ຂຶ້ນໄປ */}
            <div className="hidden lg:block">
              <HeaderContent />
            </div>

            {/* Thumbnail Grid */}
            <div className="grid grid-cols-3 gap-3 md:gap-4 mt-auto">
              {thumbnails.map((item, index) => (
                <div
                  key={index}
                  className="relative lg:right-35 lg:bottom-3 aspect-3/4 group cursor-pointer overflow-hidden"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 1024px) 33vw, 15vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#0e3b8b]/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

                  <p className="absolute bottom-3 left-0 w-full text-center px-2 text-white text-[10px] md:text-xs font-semibold leading-tight z-10">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
