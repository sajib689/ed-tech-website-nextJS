import CourseBanner from "@/components/courseDetailsPages/CourseBanner";
import NextBatchEnrollment from "@/components/courseDetailsPages/NextBatchEnrollment";
import WhatYouLearn from "@/components/courseDetailsPages/WhatYouLearn";


export default function page() {
  return (
    <div>
        <CourseBanner/>
        <NextBatchEnrollment/>
        <WhatYouLearn/>
    </div>
  )
}
