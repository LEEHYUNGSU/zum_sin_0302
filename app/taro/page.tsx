import Select from "@/components/taro/Select";
import { ChevronRight, SlidersVertical } from "lucide-react";
import { Fragment } from "react";
import { IconType } from "react-icons";
import { FaGem } from "react-icons/fa6";
import { GiCardKingClubs } from "react-icons/gi";

interface TaroInfo {
  title: string;
  subTitle: string;
  icon: IconType;
}

const TaroInfoArr: TaroInfo[] = [
  {
    title: "오늘의 타로",
    subTitle: "오늘 하루는 어떨까?",
    icon: GiCardKingClubs,
  },
  {
    title: "이달의 타로",
    subTitle: "이번달 나의 총운은?",
    icon: FaGem,
  },
];

const page = () => {
  return (
    <div className="w-full overflow-y-scroll h-auto bg-white flex flex-col pt-[50px]">
      <div className="h-auto flex justify-between items-center pl-4 pr-4 pb-2">
        <span className="font-bold text-[20px]">타로</span>
        <span className="text-[14px] items-center flex space-x-1">
          <SlidersVertical size={12} />
          <span className="">카드설정</span>
        </span>
      </div>

      <div className="h-[40vh] bg-gray-100 w-full flex flex-col">
        <div className="h-[30%] w-full space-y-1 flex flex-col pt-5 pl-4">
          <span className="text-[13px] text-gray-500">
            매일 찾게 되는 타로카드❤️
          </span>
          <span className="text-[18px] font-bold">평범한 일상 속 타로점</span>
          <span className="text-[13px] items-center flex text-gray-400">
            타로 점 보기
            <ChevronRight size={15} />
          </span>
        </div>

        <div className="h-[70%] w-full pb-[50px] flex pl-4 pr-4 space-x-5 mt-5">
          {TaroInfoArr.map((Data, idx) => (
            <Fragment key={idx}>
              <div className="w-[40vw] flex flex-col h-full bg-white rounded-lg border border-gray-300">
                <div className="h-[60%] w-full flex items-center justify-center">
                  <Data.icon size={60} />
                </div>
                <div className="flex flex-col items-center flex-1  text-[14px]">
                  <span className="font-bold">{Data.title}</span>
                  <span className="text-[12px] text-gray-500">{Data.subTitle}</span>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>

      {/* 매일 찾게 되는 타로카드: 평범한 일상 속 타로 점 */}

      <Select />

      {/* 타로점으로 고민해결! 궁금한 타로를 선택해봐요! */}
      <div className="h-[100vh] bg-sky-100"></div>
    </div>
  );
};

export default page;
