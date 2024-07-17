
import Screen1 from "./_components/screen1";
import Controls from "./_components/controls";
import Screen2 from "./_components/screen2";

/*
mt-12 p-3 border-2
      before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-purple-inner-octagon before:-z-10
*/
export default function Index() {
  return (
    <>
      <div className="h-[60vh] md:h-[60vw] xl:h-screen 3xl:h-[80vh] mt-12">
        <Screen1 />
      </div>
      <div className="flex justify-center">
        <Controls />
      </div>
      <div className="bg-purple-inner-octagon mt-12 p-6">
        <Screen2 />
      </div>
    </>
  );
}
