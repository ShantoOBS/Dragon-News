import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../Components/NewsCard/NewsCard";

export default function CategoriesNews() {
  const { id } = useParams();
  const allData = useLoaderData();
  const [data,setData]=useState([]);

  useEffect(() => {

    if(id=="0")setData(allData);
    else if(id=="1"){

          const filterData = allData.filter((ele) => ele.others.is_today_pick ==true);
         setData(filterData);

    }
    else {
        const filterData = allData.filter((ele) => ele.category_id === Number(id));
         setData(filterData);
    }
  }, [allData, id]);
  
 

  return (
    <div>
     
      {
         data.map( (news)=>(
             <NewsCard news={news}></NewsCard>
         ) )
      }
    </div>
  );
}
