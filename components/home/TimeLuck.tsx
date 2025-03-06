import { Fragment } from "react";

const LuckItemArr: string[] = [
  "회색",
  "냉면",
  "34,44",
  "연인,전문직",
  "남쪽",
  "벨트",
];

const TimeLuck = () => {
  return (
    <>
      <div className="h-[70vh] pl-4 pr-4 w-full">
        <div className="h-full w-full border border-gray-100 rounded-lg flex flex-col">
          <div className="flex-1 w-full flex flex-col">
            <div className="h-[40%] w-full flex flex-col pt-4 pl-4 relative">
              <span className="text-[14px] text-gray-400">시간대별 운세</span>
              <span className="text-[18px] font-bold">
                간략히 보는 지금 운세
              </span>
              <div className="mt-5 pt-10 relative h-auto w-full">
                <div className="w-30 absolute left-1/2 h-30 border-t-2 border-dashed border-black rounded-full overflow-hidden items-center pt-7 flex flex-col -translate-x-1/2 text-[12px]">
                  <span className="font-bold">오후</span>
                  <span className="text-gray-400">12:00~17:59</span>
                </div>
              </div>
            </div>
            <div className="h-[60%] flex items-center justify-center w-full">
              <div className="h-[60%] w-[55vw] rounded-3xl bg-yellow-200 flex flex-col pt-5 items-center">
                <span className="text-[80px] font-extrabold">90</span>
                <span className="pl-7 pr-7 text-[14px] text-center">
                  일이 많아지고 바빠지는 오후입니다
                </span>
              </div>
            </div>
          </div>
          <div className="h-[6vh] w-full flex items-center justify-center text-[14px] border-t border-gray-100">
            운세 풀이 보기 &gt;
          </div>
        </div>
      </div>

      <div className="h-[20vh] pl-4 pr-4 w-full mt-5">
        <div className="h-full w-full border border-gray-100 rounded-lg flex flex-col pt-5 pb-5 pl-4 pr-4">
          <span className="text-[14px] text-gray-400">행운의 아이템</span>
          <span className="text-[18px] font-bold">
            완벽한 하루를 만들어 줄
          </span>
          <div className="flex-1 mt-2 flex flex-wrap space-x-3 pr-5">
            {LuckItemArr.map((data, idx) => (
              <Fragment key={idx}>
                <span className="pl-4 pr-4 flex items-center justify-center h-[35px] rounded-full shrink-0 border-gray-300 text-[15px] border">
                  {data}
                </span>
              </Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* 행운의 아이템: 완벽한 하루를 만들어 줄 */}
    </>
  );
};

export default TimeLuck;
