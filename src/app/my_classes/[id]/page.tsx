import MyClass from '@/components/myclasses/MyClass';
import React from 'react';

export default function MyClasses({ params }: { params: { id: string } }) {
  const { id } = params; 

  return (
    <div>
      <MyClass id={id} />
    </div>
  );
}
