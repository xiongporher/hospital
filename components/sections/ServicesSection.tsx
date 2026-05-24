import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const services = [
  { name: "ໜ່ວຍເຄມີບຳບັດ", icon: "/images/services/chemotherapy-15.webp" },
  { name: "ກຸມານເວດກຳ", icon: "/images/services/12.svg" },
  { name: "ຈັກສຸ", icon: "/images/services/13.svg" },
  { name: "ຈິດຕະເວດ", icon: "/images/services/9.svg" },
  {
    name: "ສູນເສັ້ນເລືອດສະໝອງ 24 ຊມ",
    icon: "/images/services/icon-new-19.webp",
  },
  { name: "ຄັດກອງມະເຮັງສະຕີ", icon: "/images/services/icon-new-20.webp" },
  { name: "ທັນຕະກຳເດັກ", icon: "/images/services/12.9.svg" },
  { name: "ໂລກຕ່ອມບໍ່ມີທໍ່", icon: "/images/services/endocrine-01.webp" },
  { name: "ພັດທະນາການເດັກ", icon: "/images/services/abc-v2.svg" },
  { name: "ລະບົບທາງເດີນອາຫານ", icon: "/images/services/12.4.svg" },
];

export default function ServicesSection() {
  return (
    <section className="max-w-360 mx-auto px-4 lg:px-6">
      {/* Header Section */}
      <div className="flex justify-between items-end mb-10">
        <div className="flex items-center gap-3">
          {/* Custom Triangle - Matches image_8565d9.png */}
          <div
            className="w-0 h-0 border-l-[20px] border-l-transparent border-b-[20px] border-b-gold/60"
            aria-hidden="true"
          />
          <h2 className="text-xl md:text-3xl font-bold text-primary">
            ບໍລິການຂອງພວກເຮົາ
          </h2>
        </div>
        <Link
          href="/services"
          className="text-gold flex items-center text-sm font-semibold hover:opacity-80 transition-opacity hover:underline"
        >
          ເບິ່ງຂໍ້ມູນທັງໝົດ <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Banner Image */}
        <div className="lg:w-1/2">
          <div className="relative h-[320px] w-full overflow-hidden">
            <Image
              src="/images/services/orencia-psoriatic-arthritis.webp"
              alt="Medical Service Examination"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
          </div>
        </div>

        {/* Right Icon Grid */}
        <div className="lg:w-2/3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-10 gap-x-4 mb-10 lg:mb-0">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              {/* Icon Container */}
              <div className="w-20 h-20 rounded-full border border-gold/40 flex items-center justify-center mb-4 transition-all duration-300 group-hover:border-gold group-hover:bg-[#fdfcf8] group-hover:-translate-y-1 shadow-sm group-hover:shadow-md">
                <div className="relative w-16 h-16">
                  <Image
                    src={service.icon}
                    alt={service.name}
                    fill
                    sizes="64px"
                    className="object-contain p-1"
                  />
                </div>
              </div>
              {/* Label */}
              <p className="text-xs md:text-[14px] font-semibold text-gray-800 leading-snug max-w-[110px] transition-colors group-hover:text-primary">
                {service.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
