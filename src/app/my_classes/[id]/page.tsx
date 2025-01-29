import MyClass from '@/components/myclasses/MyClass'
import React from 'react'

export default function my_classes({params}: {params: {id: string}}) {
  const id = params
  return (
    <div>
      <MyClass id={id}/>
    </div>
  )
}
