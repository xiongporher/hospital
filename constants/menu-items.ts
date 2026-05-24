import { ChevronDown, type LucideIcon } from "lucide-react";

export interface MenuItem {
  title: string;
  href?: string;
  icon: LucideIcon;
  badge?: string | number;
  submenu?: MenuItem[];
}

export interface MenuSection {
  items: MenuItem[];
}

export const menuConfig: MenuSection[] = [
  {
    items: [
      {
        title: "ບໍລິການ",
        href: "/services",
        icon: ChevronDown,
      },
      {
        title: "ເເພັກເກັດ ແລະ ໂປຣໂມຊັ່ນ ",
        href: "/packages",
        icon: ChevronDown,
      },
      {
        title: "ຂ່າວສານ",
        href: "/news",
        icon: ChevronDown,
      },
      {
        title: "ກ່ຽວກັບເຮົາ",
        href: "/about",
        icon: ChevronDown,
      },
    ],
  },
];
