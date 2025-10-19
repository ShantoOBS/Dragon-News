import React, { use } from 'react'
import { Suspense } from 'react';
import { NavLink } from 'react-router';
const p=fetch("/categories.json").then(res=>res.json());
export default function RightAside() {
  const categories=use(p);
  return (
    <div>

        <p className='font-semibold mb-2'>All Caterogy</p>

        <Suspense fallback={<span className="loading loading-dots loading-lg"></span>}>

          <div className='grid grid-cols-1 gap-2 '>
               {
               categories.map((ele)=>
                (<NavLink to={`/categories/${ele.id}`} className={"btn text-[#706F6F]  bg-base-100 text-start  border-0 hover:bg-base-200 hover:text-black"}>{ele.name}</NavLink>)
               )
              
              }

              
          </div>

        </Suspense>
    
    </div>
  )
}
