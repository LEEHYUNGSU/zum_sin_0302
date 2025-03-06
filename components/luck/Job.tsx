import { Fragment } from "react";

interface JobInfo {
  title: string;
  icon?: string;
}

const JobInfoArr: JobInfo[] = [
  {
    title: "취업 운세",
  },
  {
    title: "능력 평가",
  },
  {
    title: "심리 분석",
  },
];

const Job = () => {
  return (
    <div className="h-[25vh] w-full pl-4 pr-4 mt-5">
      <div className="w-full h-full pt-5 flex flex-col pb-5 border border-gray-100">
        <div className="h-auto w-full flex flex-col pl-4">
          <span className="text-[14px] text-gray-500">취업과 진로</span>
          <span className="text-[20px] font-bold">내게 맞는 직업 찾기</span>
        </div>
        <div className="h-full pl-6 pr-6 flex space-x-1 mt-5">
          {JobInfoArr.map((data, idx) => (
            <Fragment key={idx}>
              <div className="w-[33.33%] h-full bg-amber-50"></div>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Job;
