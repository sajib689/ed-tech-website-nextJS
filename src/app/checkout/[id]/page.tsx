import Checkout from "@/components/course/Checkout";


export default function page({ params }: { params: { _id: string } }) {
  const { _id } = params;
  return (
    <div>
      <Checkout id={_id}/>
    </div>
  )
}
