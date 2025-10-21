import React from 'react'
import { Link } from 'react-router';


export default function NewShow({news}) {

    const {thumbnail_url,
        title,details,category_id
    }=news;
   
  return (
    <div className='text-start'>

        <p className='font-semibold mb-2'>Dragon News</p>
        <div>
            <div className='p-4'>
                <img src={thumbnail_url} alt="" className='cover w-full'/>
            <p className='font-bold text-3xl my-2'>{title}</p>
                <p>{details}</p>
                <Link className='btn bg-red-400' to={`/categories/${category_id}`}>All news in this category</Link>
            
            </div>
        </div>
    </div>
  )
}
