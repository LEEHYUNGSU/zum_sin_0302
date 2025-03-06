import { Fragment } from "react";

interface DreamInfo {
  title: string;
  subTitle: string;
}

const DreamArr: DreamInfo[] = [
  {
    title: "#벚꽃",
    subTitle: "벚꽃이 만발하는 꿈",
  },
  {
    title: "#숲",
    subTitle: "산속의 숲이 울창하고 아늑한 것을 보는 꿈",
  },
  {
    title: "#딸기",
    subTitle: "식탁 위에 딸기가 보이는 꿈",
  },
  {
    title: "#신선",
    subTitle: "신선이 과일이나 구슬울 주는 꿈",
  },
];

const Dream = () => {
  return (
    <div className="h-[40vh] w-full pl-4 pr-4 mt-5 mb-5">
      <div className="w-full h-full border border-gray-100 flex flex-col">
        <div className="h-[100px] pt-5 pl-4 flex flex-col">
          <span className="text-[14px] text-gray-500">꿈해몽</span>
          <span className="text-[20px] font-bold">그 꿈에 담긴 의미</span>
        </div>
        <div className="flex-1 pl-4 pr-4 mt-5 grid grid-cols-1">
          {DreamArr.map((data, idx) => (
            <Fragment key={idx}>
              <div className="border-t border-gray-100 flex items-center space-x-5 text-[13px]">
                <span className="text-emerald-400 w-[40px]">{data.title}</span>
                <span className="text-[15px]">{data.subTitle}</span>
              </div>
            </Fragment>
          ))}
        </div>
        <div className="h-[7vh] text-[14px] font-bold flex items-center justify-center border-t border-gray-100">
          다른 꿈해몽 보러가기 &gt;
        </div>
      </div>
    </div>
  );
};

export default Dream;
