import React from "react";

const FitContent = () => {
  return (
    <div className="h-[19vh] pl-4 pr-4 w-auto overflow-x-auto flex space-x-5 mt-5 pb-4">
      {[0, 1, 2, 3].map((data, idx) => (
        <div
          key={idx}
          className="w-[60vw] flex flex-col h-full rounded-lg shrink-0 overflow-hidden border border-gray-100"
        >
          <div className="h-[45%] w-full flex flex-col pt-5 pl-4">
            <span className="text-gray-500 text-[14px]">맞춤 운세</span>
            <div className="font-bold relative text-[20px]">
              <div className="absolute">
                <span className="relative z-10">
                30대 남성
                <div className="bg-yellow-300 w-[100%] h-[10px] absolute bottom-0 z-0 opacity-50"></div>
                </span>
                에게 필요한</div>

            </div>
          </div>

          <div className="flex-1 bg-sky-100 pt-5 text-[14px] pl-4">
            당신의 날이 알려주는 운세
          </div>
        </div>
      ))}
    </div>
  );
};

export default FitContent;
