import { Fragment } from "react";

interface LGInfo{
  title: string;
  subTitle: string;
  icon?: string;
}

export const LGArr: LGInfo[] = [
  {
    title: "행운의 번호",
    subTitle: "내 인생을 바꿔줄 6개의 숫자",
  },
  {
    title: "천생복덕운",
    subTitle: "타고난 복을 활용해 보세요",
  },
  {
    title: "살풀이",
    subTitle: "액운 방지에는 살풀이가 최고!",
  },
  {
    title: "행운의 부적",
    subTitle: "나를 도와주는 영험한 기운",
  },
  {
    title: "이사택일",
    subTitle: "한눈에 보는 이사하기 좋은 날",
  },
  {
    title: "관상",
    subTitle: "얼굴에 적힌 운명 알아보기기",
  },
]

const LuckGet = () => {
  return (
    <div className="h-[70vh] w-full pl-4 pr-4 mt-5 ">
      <div className="w-full h-full border border-gray-100 flex flex-col pb-10">
        <div className="h-[100px] pt-5 pl-4 flex flex-col">
          <span className="text-[14px] text-gray-500">액운 방지</span>
          <span className="text-[20px] font-bold">손쉽게 행운을 얻는 방법</span>
        </div>

        <div className="flex-1 flex flex-col">
          {LGArr.map((data, idx) => (
            <Fragment key={idx}>
              <div className="w-full h-[16.66%] flex pl-5 space-x-5 items-center">
                <div className="w-[60px] h-[60px] bg-sky-200 rounded-full">

                </div>

                <div className="flex flex-col w-auto">
                  <span className="text-[14px]">{data.title}</span>
                  <span className="text-gray-500 text-[13px]">{data.subTitle}</span>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LuckGet;
