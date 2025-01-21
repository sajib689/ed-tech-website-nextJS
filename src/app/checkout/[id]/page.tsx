import Checkout from "@/components/course/Checkout";


export default function page({ params }: { params: { id: string } }) {
  const { id } = params;
  console.log(id);
  return (
    <div>
      <Checkout id={id}/>
    </div>
  )
}
