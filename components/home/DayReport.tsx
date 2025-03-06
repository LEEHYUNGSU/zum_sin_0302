import React from "react";

const DayReport = () => {
  return (
    <div className="h-[70vh] pl-4 pr-4 w-full mt-5">
      <div className="h-full w-full border border-gray-100 rounded-lg flex flex-col">
        <div className="h-[90%] w-full">
          <div className="h-[50%] w-full flex flex-col pt-7">
            <div className="text-gray-400 text-[14px] pl-4">
              오늘의 운세
            </div>
            <div className="text-[18px] font-bold tracking-wider  pl-4">
              사이곤님의 하루 요약
            </div>
            <div className="w-full flex-1 flex items-center justify-center bg-sky-400">
              <div className="w-[90%] h-[5px] bg-white">

              </div>
            </div>
          </div>
          <div className="h-[50%] w-full flex flex-col">
            <div className="h-[50%] flex items-center justify-center relative text-[80px] font-extrabold">
              <span className="z-50">
                85
              </span>
              <div className="absolute w-[50px] h-[50px] rounded-full bg-yellow-300 top-4 left-[55%] opacity-90">
              
              </div>                
            </div>

            <div className="flex-1 flex items-start justify-center text-[20px] pl-[70px] pr-[70px] text-center">
              성공을 기대해도 좋은 하루입니다.
            </div>
          </div>
        </div>

        <div className="h-[10%] flex items-center justify-center w-full border-t border-gray-200 font-bold text-[14px]">
          오늘 하루 자세히 보기 &gt;
        </div>
      </div>
    </div>
  );
};

export default DayReport;
