
import { AllCourse } from "@/components/home/AllCourse";
import Banner from "@/components/home/Banner";
import ContactForm from "@/components/home/ContactForm";
import { CourseList } from "@/components/home/CourseList";
import Recommend from "@/components/home/Recommend";
import { ReviewSlider } from "@/components/home/ReviewSlider";
import WhyLearnProgramming from "@/components/home/WhyLearnProgramming";


export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
     
     <Banner/>
     <Recommend/>
     <WhyLearnProgramming/>
     <CourseList/>
     <AllCourse/>
     <ReviewSlider/>
     <ContactForm/>
    </div>
  );
}
