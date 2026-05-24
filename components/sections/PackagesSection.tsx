import { ChevronRight, Clock, Minus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { packages } from "@/data/packages";

export default function PackagesSection() {
  const homePackages = packages.slice(0, 5);
  return (
    <div className="max-w-360 mx-auto px-4 py-10 lg:px-6">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl md:text-3xl font-bold text-primary">
          ເເພັກເກັດ ແລະ ໂປຣໂມຊັ່ນ
        </h2>
        <Link
          href="/packages"
          className="text-gold flex items-center text-sm font-medium hover:opacity-80 transition-opacity hover:underline"
        >
          ເບິ່ງຂໍ້ມູນທັງໝົດ <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      </div>

      {/* Grid Layout: 5 Columns on LG */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 lg:gap-1">
        {homePackages.map((pkg, index) => (
          <div
            key={pkg.id}
            className="flex flex-col group bg-white overflow-hidden"
          >
            {/* Card Image */}
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={pkg.image}
                alt={pkg.title}
                fill
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Card Details */}
            <div className="p-3 flex flex-col flex-grow gap-4">
              <h3 className="text-md font-bold text-primary leading-snug h-[2.5rem] line-clamp-2 group-hover:text-gold transition-colors">
                {pkg.title}
              </h3>

              <div className="flex flex-col">
                <div className="flex items-center lg:justify-between flex-wrap gap-1">
                  {/* ລາຄາປັດຈຸບັນ */}
                  <span className="text-xl font-black text-red-600">
                    {pkg.price}
                  </span>

                  {/* ເຄື່ອງໝາຍຂີດລົບ ແລະ ລາຄາເກົ່າ */}
                  <span className="text-gray-400">
                    <Minus className="w-4 h-4" />
                  </span>
                  <div className="flex items-center gap-1 text-gray-400">
                    <span className="text-xl line-through whitespace-nowrap">
                      {pkg.oldPrice} LAK
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1 text-gray-400 text-sm mb-4">
                <Clock className="w-3 h-3" />
                <span>ໝົດກຳນົດ {pkg.expiry}</span>
              </div>

              {/* Action Button */}
              <div
                className={`flex justify-end lg:mb-0 ${
                  index !== homePackages.length - 1 ? "mb-6" : ""
                }`}
              >
                <Link href={`/packages/${pkg.id}`} className="button">
                  ລາຍລະອຽດ
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
