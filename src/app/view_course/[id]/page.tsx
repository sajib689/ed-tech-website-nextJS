import ViewCourse from "@/utlis/ViewCourse";

export default function CoursePage({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <div>
      <ViewCourse id={id} />
    </div>
  );
}
