import { Home } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-4 relative"
      style={{
        backgroundImage: "url('/images/hospital.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="text-center max-w-lg relative z-10">
        <h1 className="text-7xl md:text-9xl font-bold text-gold drop-shadow-sm mb-4">
          404
        </h1>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          ຂໍອະໄພ, ບໍ່ພົບໜ້າທີ່ທ່ານຕ້ອງການ
        </h2>

        <p className="text-white/80 mb-8 text-sm md:text-base leading-relaxed">
          ໜ້າເວັບທີ່ທ່ານກຳລັງຊອກຫາອາດຈະຖືກລົບໄປແລ້ວ, ປ່ຽນຊື່ ຫຼື
          ບໍ່ສາມາດເຂົ້າເຖິງໄດ້ໃນຂະນະນີ້. ກະລຸນາກວດສອບ URL ອີກຄັ້ງ ຫຼື
          ກັບຄືນສູ່ໜ້າຫຼັກ.
        </p>

        <div className="flex justify-center">
          <Button
            // asChild
            size="lg"
            className="h-10 rounded-full bg-gold text-white hover:bg-gold/90 font-medium shadow-md transition-all"
          >
            <Link href="/" className="flex items-center gap-2">
              <Home className="w-5 h-5" />
              ກັບຄືນໜ້າຫຼັກ
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
