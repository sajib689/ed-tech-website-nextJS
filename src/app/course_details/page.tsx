import CourseBanner from "@/components/courseDetailsPages/CourseBanner";
import CourseCurriculum from "@/components/courseDetailsPages/CourseCurriculum";
import CourseInclued from "@/components/courseDetailsPages/CourseInclued";
import FeatureCard from "@/components/courseDetailsPages/FeaturedCard";
import NextBatchEnrollment from "@/components/courseDetailsPages/NextBatchEnrollment";
import WhatYouLearn from "@/components/courseDetailsPages/WhatYouLearn";
import SpecialtySection from './../../components/courseDetailsPages/SpecialtySection';
import CourseDetailsSection from "@/components/courseDetailsPages/CourseDetailsSection";


export default function page() {
  return (
    <div>
        <CourseBanner/>
        <NextBatchEnrollment/>
        <WhatYouLearn/>
        <CourseInclued/>
        <FeatureCard/>
        <CourseCurriculum/>
        <SpecialtySection/>
        <CourseDetailsSection/>
    </div>
  )
}
