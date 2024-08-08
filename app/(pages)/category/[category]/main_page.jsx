"use client"

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import ExpressionFilter from "@/app/_components/expressions_filter";

import Screen1 from "@/app/(pages)/_components/categories/screen1";
import Screen2 from "@/app/(pages)/_components/categories/screen2";

import { getCategories } from "@/app/_services/categories";

const MainPage = () => {
  const [data, setData] = useState(null);
  const params = useParams();

  useEffect(() => {
    console.log(params)
    const getData = async () => {
      setData(await getCategories("Garden"));
    }
    getData();
  }, []);

  if (!data || data.error || !data.result.length) {
    return (<>Not Found</>);
  }

  const parsedData = data.result[0];
  //console.log(JSON.stringify(data, null, 3)); //data.result[0].topics
  
  return (
    <>
      <ExpressionFilter data={ parsedData.topics.map( (z, i) => ({id: i+1, name: z.topicName}) ) } />
      <div className="h-[60vh] md:h-[60vw] xl:h-screen 3xl:h-[80vh]">
        <Screen1 {...parsedData} />
      </div>
      <Screen2 {...parsedData} />
    </>
  );
}
export default MainPage;