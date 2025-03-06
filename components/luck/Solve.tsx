import { Fragment } from "react";

const SolveArr = ["소원담벼락", "고민구슬", "점신 1:1상담", "포춘쿠키"]

const Solve = () => {
  return (
    <div className="h-[45vh] w-full pl-4 pr-4 mt-5">
      <div className="w-full pt-5 pb-2 h-full border border-gray-100 flex flex-col">
        <div className="w-full pl-4 h-auto flex flex-col">
          <span className="text-gray-500 text-[14px]">소원을 이뤄요</span>
          <span className="text-[20px] font-bold">지금 필요한 해결책</span>
        </div>

        <div className="flex-1 mt-5 pl-4 pr-4 grid grid-cols-2 gap-2">
          {SolveArr.map((data, idx) => (
            <Fragment key={idx}>
              <div className="bg-sky-50 rounded-lg flex flex-col ml-4 pt-4 pl-4">
                <span className="text-[14px]">{data}</span>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solve;
