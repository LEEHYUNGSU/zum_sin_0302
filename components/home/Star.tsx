import React from "react";

const Star = () => {
  return (
    <div className="h-[35vh] w-full pl-4 pr-4 mt-5 mb-5">
      <div className="w-full h-full border border-gray-100 rounded-lg flex flex-col pl-4 pr-4 pt-5 pb-5">
        <span className="text-gray-500 text-[14px]">
          별자리/띠 운세
        </span>
        <span className="font-bold text-[20px]">
          나를 위한 일일 가이드
        </span>

        <div className="flex flex-col flex-1 mt-5">
          <div className="flex flex-col">
            <span className="font-bold">오늘의 황소자리 운세는?</span>
            <span className="pr-[60px] mt-2">무심코 내 입을 떠나버린 말 한 마디로 천년 빚을 지겠다.</span>
          </div>
          <div className="flex flex-col mt-10">
            <span className="font-bold">오늘의 닭띠 운세는?</span>
            <span className="pr-[60px] mt-2">꿈자리가 사나우니 무언가 불길한 징조임이 틀림없다. 조심과 좌중을 요한다.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Star;
