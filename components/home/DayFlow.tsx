import { Fragment } from "react";

interface DFData{
  title: string;
  content: string;
}

const DFArr: DFData[] = [
  {
    title: "재물운",
    content: "이득과 손실이 함께 들어오게 됩니다.수입원이 다양해지고 소득도 늘어나겠지만 금융권 등을 통해 투자..."
  },
  {
    title: "연애운",
    content: "상대를 사랑한다면 진심으로 대해야 합니다.당신 곁에 있는 사람이 현재 또는 미래의 동반자라 생각한..."
  },
  {
    title: "사업운",
    content: "조급한 마음을 떨치는 것이 좋습니다. 새로운 사업을 시작했다고 하더라도 성과를 거두려면 어느 정도 시..."
  },
  {
    title: "건강운",
    content: "당장 큰 병은 없지만 스트레스가 문제가 됩니다.무리한 활동은 자제하고 긍정적이고 여유 있는 마음가짐..."
  },
  {
    title: "학업운",
    content: "갑작스럽게 공부에 흥미를 잃을 때입니다.물론 일시적인 현상이라 볼 수 있습니다. 이럴 때에 무언가에 열..."
  }
]

const DayFlow = () => {
  return (
    <div className="h-[100vh] pl-4 pr-4 pb-7 w-full mt-5">
      <div className="h-full w-full border border-gray-100 rounded-lg flex flex-col pt-5">
        <div className="h-[40vh] w-full flex flex-col">
          <div className="pl-4 pr-4 h-auto flex flex-col">
            <span className="text-[14px] text-gray-400">총운</span>
            <span className="text-[20px] font-bold">오늘의 운세 흐름 읽기</span>
          </div>
          <div className="flex-1 bg-sky-200">

          </div>
        </div>

        <div className="h-[60vh] mt-10 flex flex-col pl-4 pr-4">
          {DFArr.map((data, idx) => (
            <Fragment key={idx}>
              <div className="h-[20%] w-full flex flex-col space-y-1">
                <span className="font-bold">
                  {data.title} &gt;
                </span>
                <span className="text-[15px]">
                  {data.content}
                </span>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DayFlow;
