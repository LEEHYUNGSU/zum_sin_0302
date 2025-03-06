import { HomeWordArr } from "@/data/HomeData";
import React from "react";
import { HiArrowPathRoundedSquare } from "react-icons/hi2";
import HomeTopCar from "./HomeTopCar";
import DayReport from "./DayReport";
import DayFlow from "./DayFlow";
import TimeLuck from "./TimeLuck";
import Bio from "./Bio";
import Star from "./Star";

const HomeRender = () => {
  return (
    <>
      <div className="w-full h-auto flex justify-between items-center pl-4 pr-4">
        <span className="text-[20px] font-bold">점신</span>
        <span className="text-[13px] flex items-center">
          <span className="text-gray-400 mr-1 text-[12px]">선택</span>
          사이곤님
          <span className="ml-1">
            <HiArrowPathRoundedSquare />
          </span>
        </span>
      </div>

      <div className="w-full mt-5 flex items-center h-auto border-b border-gray-200 space-x-5 text-[14px] pl-4 pr-4">
        <span className="pb-4 border-b">운세보고서</span>
        <span className="text-gray-400 pb-4">인맥보고서</span>
        <span className="text-gray-400 pb-4">행운보고서</span>
      </div>

      <HomeTopCar />
      {/* 그라데이션 홍보 케러셀 */}

      <div className="w-full mt-5 flex h-auto pl-4 pr-4 space-x-5 text-[14px] space-y-2 flex-wrap">
        {HomeWordArr.map((data, idx) => (
          <span
            key={idx}
            className="h-[35px] pl-3 pr-3 flex items-center justify-center border border-gray-300 rounded-full shrink-0"
          >
            {data.title}
          </span>
        ))}
      </div>

      {/* 행운의 룰렛 등 아이템 Word 나열하는 곳 */}

      <DayReport />

      {/* 오늘의 운세: OOO님의 하루 요약 */}

      <DayFlow />

      {/* 총운: 오늘의 운세 흐름 읽기 */}

      <TimeLuck />

      {/* 시간대별 운세: 간략히 보는 지금 운세 */}

      <Bio />

      {/* 바이오리듬: 일상 관리도 리듬 따라 */}


      <Star />
      {/* 별자리/ 띠 운세: 나를 위한 일일 가이드 */}
    </>
  );
};

export default HomeRender;
