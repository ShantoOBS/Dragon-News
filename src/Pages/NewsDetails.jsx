import React, { useEffect, useState } from 'react'
import Header from '../Components/Header/Header'
import LeftAside from '../Components/LeftAside/LeftAside'
import { Outlet, useLoaderData, useParams } from 'react-router'
import NewShow from '../Components/NewShow/NewShow'

export default function NewsDetails() {
  const {id}=useParams();
  const allData=useLoaderData();
  const [news,setNews]=useState({});

useEffect(() => {
  const data = allData.find((ele) => ele.id == id);
  setNews(data);
 
}, [allData, id]);
  

  return (
    <div className='w-11/12 mx-auto'>

          <Header></Header>
          <div className='grid grid-cols-12 gap-4'>
             
             <aside className='col-span-9'>

                <NewShow news={news}></NewShow>

             </aside>
             <aside className='col-span-3'>
                 <LeftAside></LeftAside>
             </aside>
              
          </div>
      
    </div>
  )
}
