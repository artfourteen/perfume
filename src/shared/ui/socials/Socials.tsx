import { instagram, phoneNumber } from "@/shared/constants/contacts";
import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export const Socials = () => {
  return (
    <div className="flex items-center gap-5 text-2xl">
      <Link
        target="_blank"
        href={`https://www.instagram.com/${instagram}`}
        className="text-pink-500 hover:text-pink-500/70 transition-all"
      >
        <FaInstagram />
      </Link>
      <Link
        target="_blank"
        href={`https://wa.me/${phoneNumber}`}
        className="text-green-500 hover:text-green-500/70 transition-all"
      >
        <FaWhatsapp />
      </Link>
    </div>
  );
};
