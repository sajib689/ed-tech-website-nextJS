'use client';

import { AuthContext } from "@/context/AuthProvider";
import Loader from "@/utlis/Loader";
import axios from "axios";
import { useContext, useEffect, useState } from "react";

interface ClassItem {
  courseName: string;
}

interface Course {
  courseName: string;
  courseImage: string;
  courseCategory: string;
}

const ClassList = () => {
  const [classes, setClasses] = useState<ClassItem[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const authContext = useContext(AuthContext);

  if (!authContext) {
    return <Loader />;
  }

  const { user } = authContext;

  useEffect(() => {
    if (!user?.email) return;

    const fetchData = async () => {
        setLoading(true);
        setError(null);
      
        try {
          const [paymentRes, coursesRes] = await Promise.all([
            axios.get<{ payment: ClassItem[] }>(`http://localhost:5000/api/v1/paymenthistory/${user?.email}`),
            axios.get<Course[]>(`http://localhost:5000/api/v1/getcourses`),
          ]);
      
          setClasses(paymentRes.data.payment || []);
          setCourses(Array.isArray(coursesRes.data.data) ? coursesRes.data.data : []);
        } catch (err: any) {
          console.error(err);
          setError(err.response?.data?.message || "Failed to fetch data.");
        } finally {
          setLoading(false);
        }
      };
      

    fetchData();
  }, [user?.email]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div className="text-red-500 text-center mt-4">{error}</div>;
  }

  const filteredCourses = courses.filter((course) =>
    classes.some((cls) => cls.courseName === course.courseName));
  
console.log(filteredCourses);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Enrolled Classes</h1>
      {filteredCourses.length === 0 ? (
        <p className="text-gray-500">No classes found for the enrolled courses.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCourses.map((course, index) =>
            course ? (
              <div key={index} className="p-4 border rounded-lg shadow-md">
                <img
                  src={course.courseImage}
                  alt={course.courseName}
                  className="w-full h-40 object-cover rounded-t-md"
                />
                <h2 className="text-lg font-semibold mt-2">{course.courseName}</h2>
                <p className="text-sm text-gray-500">{course.courseCategory}</p>
              </div>
            ) : null
          )}
        </div>
      )}
    </div>
  );
};

export default ClassList;
