import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const footerColumns = [
  {
    title: "ບໍລິການຂອງເຮົາ",
    links: [
      { label: "ຄົ້ນຫາແພດ", href: "/find-doctor" },
      { label: "ນັດໝາຍ", href: "/appointment" },
      { label: "ລາຄາຫ້ອງພັກ", href: "/patient-rooms" },
      { label: "ສູນບໍລິການ ແລະ ຄີນິກ", href: "/medical-centers" },
      { label: "ສິ່ງອຳນວຍຄວາມສະດວກ", href: "/facilities" },
      { label: "ພັນທະມິດປະກັນສຸຂະພາບ", href: "/insurance" },
    ],
  },
  {
    title: "ກ່ຽວກັບ",
    links: [
      { label: "ແພັກເກັດ ແລະ ໂປຣໂມຊັ່ນ", href: "/promotion-packages" },
      { label: "ບົດຄວາມທາງການແພດ", href: "/news" },
      { label: "ຮ່ວມງານກັບເຮົາ", href: "/careers" },
    ],
  },
  {
    title: "ຕິດຕໍ່ເຮົາ",
    links: [
      { label: "ຄຳຕິຊົມ ແລະ ຂໍ້ສະເໜີແນະ", href: "/feedback-suggestions" },
      { label: "ຄຳຖາມທີ່ພົບເລື້ອຍໆ", href: "/faq" },
      { label: "ນະໂຍບາຍຄວາມເປັນສ່ວນຕົວ", href: "/privacy-notice" },
      { label: "ນະໂຍບາຍຄຸກກີ້", href: "/cookie-policy" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-400 px-6 py-4 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1 flex flex-col items-start gap-2">
            {/* Main Logo */}
            <Image
              src="/images/logo.jpeg"
              alt="Phongsavanh International Hospital"
              width={180}
              height={180}
              className="object-contain"
            />

            {/* JCI Logo */}
            <Image
              src="/images/logo-jci.png"
              alt="JCI Logo"
              width={160}
              height={160}
              className="object-contain"
            />

            {/* Address */}
            <p className="text-sm font-semibold text-gray-600 leading-relaxed">
              ຖະໜົນ ໄກສອນພົມວິຫານ
              <br />
              ບ້ານ ສີວິໄລ ເມືອງ ໄຊທານີ ນະຄອນຫຼວງວຽງຈັນ
            </p>
          </div>

          {/* Nav Columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-md font-bold text-primary mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li
                    key={link.label}
                    className="group flex items-start gap-1.5"
                  >
                    <ChevronRight
                      size={16}
                      className="text-primary mt-0.5 shrink-0 transition-transform duration-200 group-hover:rotate-90"
                    />
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 font-semibold hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t-3 border-gold py-4 bg-white">
        <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-8 text-right">
          <p className="text-sm text-gray-600">
            © 2026 Phongsavanh International Hospital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
