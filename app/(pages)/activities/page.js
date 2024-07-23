import ExpressionFilter from "@/app/_components/expressions_filter";

import Screen1 from "../../_components/categories/screen1";
import Screen2 from "../../_components/categories/screen2";

import { getCategories } from "@/app/_services/categories";

const Index = async () => {
  const data = (await getCategories("Activites")).result[0];

  //console.log(JSON.stringify(data, null, 3)); //data.result[0].topics
  if (!data) return (<>not found</>);
  
  return (
    <>
      <ExpressionFilter data={ data.topics.map( (z, i) => ({id: i+1, name: z.topicName}) ) } />
      <div className="h-[60vh] md:h-[60vw] xl:h-screen 3xl:h-[80vh]">
        <Screen1 {...data} />
      </div>
      <Screen2 {...data} />
    </>
  );
}
export default Index;