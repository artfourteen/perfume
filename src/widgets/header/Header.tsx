import { Container } from "@/shared/core/container/Container";
import { Logo } from "@/shared/ui/logo/Logo";
import Link from "next/link";
import { Socials } from "../../shared/ui/socials/Socials";
import { Nav } from "./ui/nav/Nav";
import { IoBagOutline } from "react-icons/io5";

export const Header = () => {
  return (
    <header className="py-6 border-b">
      <Container>
        <div className="flex items-center justify-between">
          <Link href="/">
            <Logo />
          </Link>
          <Nav />
          <div className="flex items-center gap-5">
            <Socials />
            <button className="hover:text-black/70 transition-all text-2xl">
              <IoBagOutline />
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
};
