import ViewCourse from "@/components/course/ViewCourse";

export default function CoursePage({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <div>
      <ViewCourse id={id} />
    </div>
  );
}
