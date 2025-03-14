import ContactUs from "@/components/ContactUs";
import Faq from "@/components/Faq";
import FeaturedSection from "@/components/Featured";
import HeroSection from "@/components/Hero";
import PracticesArea from "@/components/PracticesArea";
import Process from "@/components/Process";
import Testimonial from "@/components/Testimonial";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`${nunito.variable} font-sans`}>
      <div className="flex flex-col justify-center items-center">
        <main className="flex flex-col container">
          <HeroSection />
          <FeaturedSection />
          <Testimonial />
          <PracticesArea />
          <Process />
          <Faq />
          <ContactUs /> 
        </main>
      </div>
    </div>
  );
}
