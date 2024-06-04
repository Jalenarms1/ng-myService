import Catalog from "@/components/Catalog";
import Footer from "@/components/Footer";
import { HeroNav } from "@/components/HeroNav";
import Navbar from "@/components/Navbar";
import { ScreenWrapper } from "@/components/ScreenWrapper";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <ScreenWrapper>
        {/* <Navbar /> */}
        <HeroNav />
        <Catalog />
        <Footer />
      </ScreenWrapper>
    </div>
  );
}
