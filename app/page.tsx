import HomeRender from "@/components/home/HomeRender";
import InfoFooter from "@/components/InfoFooter";
import { HomeWordArr } from "@/data/HomeData";

export default function Home() {
  return (
    <div className="w-full overflow-y-scroll h-auto bg-white flex flex-col pt-[50px]">
      <HomeRender />
      <InfoFooter />
    </div>
  );
}
