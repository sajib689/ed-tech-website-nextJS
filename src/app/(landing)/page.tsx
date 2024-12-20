import Navbar from "@/components/common/Navbar";
import Banner from "@/components/home/Banner";
import ContactForm from "@/components/home/ContactForm";
import Recommend from "@/components/home/Recommend";
import { ReviewSlider } from "@/components/home/ReviewSlider";
import WhyLearnProgramming from "@/components/home/WhyLearnProgramming";


export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
     <Navbar/>
     <Banner/>
     <Recommend/>
     <WhyLearnProgramming/>
     <ReviewSlider/>
     <ContactForm/>
    </div>
  );
}
