import React, { Fragment } from "react";

const Test = () => {
  return (
    <div className="h-[35vh] w-full pl-4 pr-4 mt-5">
      <div className="w-full h-full flex flex-col border border-gray-100">
        <div className="h-[15%] flex flex-col pl-4 pt-5">
          <span className="text-[14px] text-gray-500">심리테스트</span>
          <span className="text-[20px] font-bold">마음을 분석하는 시간</span>
        </div>

        <div className="flex-1 flex mt-10 space-x-3 w-auto overflow-x-auto pl-4 pr-4">
          {[0,1,2,3,4].map((data, idx) => (
            <Fragment key={idx}>
              <div className="shrink-0 w-[30vw] h-[20vh] rounded-lg bg-sky-50">

              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Test;
