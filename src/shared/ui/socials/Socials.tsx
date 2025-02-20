import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export const Socials = () => {
  return (
    <div className="flex items-center gap-5 text-2xl">
      <Link
        href="https://www.instagram.com"
        className="text-pink-500 hover:text-pink-500/70 transition-all"
      >
        <FaInstagram />
      </Link>
      <Link
        href="https://www.whatsapp.com"
        className="text-green-500 hover:text-green-500/70 transition-all"
      >
        <FaWhatsapp />
      </Link>
    </div>
  );
};
