import React from "react";

const Bio = () => {
  return (
    <div className="h-[70vh] w-full pl-4 pr-4 mt-5">
      <div className="h-full w-full border border-gray-100 rounded-lg flex flex-col">
        <div className="flex-1 flex flex-col">
          <div className="h-[20%] pt-4 flex flex-col pl-4">
            <span className="text-gray-300 text-[13px]">바이오리듬</span>
            <span className="text-[20px] font-bold">일상 관리도 리듬 따라</span>
          </div>
          <div className="h-[65%] flex flex-col">
            <div className="h-[80%] w-full"></div>
            <div className="h-[20%] w-full flex items-center justify-center space-x-10 text-[14px]">
              <span>
                건강 <span className="text-red-500">39%</span>
              </span>
              <span>
                감성
                <span className="text-blue-500"> 90%</span>
              </span>
              <span>
                지성 <span className="text-green-500">98%</span>
              </span>
            </div>
          </div>
          <div className="h-[15%] flex items-center justify-center pl-[50px] pr-[50px] text-[16px] text-center">
            바로 당신의 날이다. 세 개의 리듬이 모두 고조기! 이 절호의 기회를 최대로 활용하라.
          </div>
        </div>
        <div className="h-[7vh] w-full flex items-center justify-center border-t font-bold border-gray-200">
          운세 풀이 보기 &gt;
        </div>
      </div>
    </div>
  );
};

export default Bio;
