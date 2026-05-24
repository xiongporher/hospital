import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Stethoscope, Calendar, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function BannerSection() {
  return (
    <Carousel className="relative w-full" opts={{ loop: true }}>
      <CarouselContent>
        {/* Slide 1 */}
        <CarouselItem>
          <div className="relative flex h-[520px] overflow-hidden">
            <Image
              src="/images/hospital.jpg"
              alt="Doctor"
              fill
              sizes="(max-width: 1024px) 100vw, 1200px"
              className="object-cover"
              priority // Good practice for banner images
            />
          </div>
        </CarouselItem>
        {/* Slide 2 */}
        <CarouselItem>
          <div className="relative flex h-[520px] overflow-hidden">
            <Image
              src="/images/banner.jpeg"
              alt="Doctor"
              fill
              sizes="(max-width: 1024px) 100vw, 1200px"
              className="object-cover"
            />
          </div>
        </CarouselItem>
        {/* Slide 3 */}
        <CarouselItem>
          <div className="relative flex h-[520px] overflow-hidden">
            <Image
              src="/images/hospital.jpg"
              alt="Doctor"
              fill
              sizes="(max-width: 1024px) 100vw, 1200px"
              className="object-cover"
            />
          </div>
        </CarouselItem>
      </CarouselContent>

      <CarouselDots className="absolute bottom-40 xl:bottom-6 left-1/2 z-20 -translate-x-1/2" />

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 md:left-auto md:right-[10%] md:translate-x-0 z-10 flex items-center gap-6 sm:gap-8 bg-white p-6 w-[90%] sm:w-auto justify-center">
        <div className="absolute top-0 left-0 w-full h-12 bg-linear-to-b from-gold/50 to-transparent" />
        {/* Decorative Top Border/Gradient */}

        {/* Doctor Search */}
        <Link
          href="/doctors"
          className="flex flex-col items-center group cursor-pointer min-w-[80px]"
        >
          <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#C8A45D] text-[#C8A45D] transition-all duration-300 group-hover:bg-[#C8A45D] group-hover:text-white group-hover:shadow-md">
            <Stethoscope size={24} />
          </div>
          <p className="text-xs sm:text-sm font-bold text-primary whitespace-nowrap">
            ຄົ້ນຫາແພດ
          </p>
        </Link>

        {/* Divider */}
        <div className="h-16 w-[2px] md:w-[1px] lg:w-[3px] bg-gold" />

        {/* Appointment */}
        <Link
          href="/appointments"
          className="flex flex-col items-center group cursor-pointer min-w-[80px]"
        >
          <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#C8A45D] text-[#C8A45D] transition-all duration-300 group-hover:bg-[#C8A45D] group-hover:text-white group-hover:shadow-md">
            <Calendar size={24} />
          </div>
          <p className="text-xs sm:text-sm font-bold text-primary whitespace-nowrap">
            ນັດແພດ
          </p>
        </Link>

        {/* Divider */}
        <div className="h-16 w-[2px] bg-gold" />

        {/* Contact */}
        <Link
          href="/contact"
          className="flex flex-col items-center group cursor-pointer min-w-[80px]"
        >
          <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#C8A45D] text-[#C8A45D] transition-all duration-300 group-hover:bg-[#C8A45D] group-hover:text-white group-hover:shadow-md">
            <MessageCircle size={24} />
          </div>
          <p className="text-xs sm:text-sm font-bold text-primary whitespace-nowrap">
            ຕິດຕໍ່ເຮົາ
          </p>
        </Link>
      </div>
      {/* Navigation Arrows */}
      <CarouselPrevious className="left-4" />
      <CarouselNext className="right-4" />
    </Carousel>
  );
}
