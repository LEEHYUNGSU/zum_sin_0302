import Image, { StaticImageData } from "next/image";
import { Fragment } from "react"
import Img1 from "@/public/taro/img1.jpg"
import Img2 from "@/public/taro/img2.jpg"
import Img3 from "@/public/taro/img3.jpg"
import Img4 from "@/public/taro/img4.jpg"

const TRSelectArr: string[] = ["전체", "25년 타로🐍", "연애/결혼❤️", "짝사랑/재회💚", "취업/학업✏️", "그 외🍀"]

interface TaroSelectData{
  title: string;
  tag: string;
  image: StaticImageData;
}

const TRSelectData: TaroSelectData[] = [
  {
    title: "곧 만나게 될 귀인",
    tag: "#귀인 #조력자",
    image: Img1
  },
  {
    title: "그 사람은 내 SNS를 염탐할까?",
    tag: "#재회 #SNS",
    image: Img2
  },
  {
    title: "곧 있을 이동수",
    tag: "#새출발 #이동수",
    image: Img3
  },
  {
    title: "남들이 보는 내 이미지",
    tag: "#내 이미지 #타로",
    image: Img4
  },
  {
    title: "타로로 보는 25년 총운 및 조언",
    tag: "#총운 #2025년",
    image: Img1
  },
  {
    title: "내 인생의 전성기가 오는 순간",
    tag: "#성공운 #전성기",
    image: Img2
  },
  {
    title: "새해 다가올 대박 기회",
    tag: "#성공운 #2025년",
    image: Img3
  },
  {
    title: "나는 무엇을 잘할까?",
    tag: "#취업 #특기와 적성",
    image: Img4
  },
  {
    title: "잘 맞는 이성찾기",
    tag: "#짝사랑 #운명의 연인은?",
    image: Img1
  },
  {
    title: "나의 연애는 어땠을까?!",
    tag: "#연애운 #나의 애정운",
    image: Img2
  },
  {
    title: "타로로 보는 25년 나의 재물운",
    tag: "#재물운 #2025년",
    image: Img3
  },
  {
    title: "내 반려동물은 무슨 생각을 할까?",
    tag: "#반려동물 #속마음",
    image: Img4
  },
  {
    title: "상대방은 나와 다시 만나고 싶을까?",
    tag: "#재회운 #상대방 속마음",
    image: Img1
  },
  {
    title: "나만 갖고 있는 무기는?",
    tag: "#취업 #나의 능력",
    image: Img2
  },
  {
    title: "나와 딱맞는 연애스타일은 뭘까요?",
    tag: "#연애운 #나의 연애스타일",
    image: Img3
  },
  {
    title: "타로로 보는 25년 나의 연애운",
    tag: "#연애운 #2025년",
    image: Img4
  },
]

const Select = () => {
  return (
    <div className='h-auto w-full flex flex-col min-h-[150vh] bg-white'>
      <div className="h-auto w-full pt-5 flex flex-col pl-4 pr-4">
        <span className="text-[13px] text-gray-500">타로점으로 고민해결! 🔮</span>
        <span className="text-[20px] font-bold">궁금한 타로를 선택해봐요!</span>
      </div>

      <div className="w-auto overflow-x-auto pl-4 pr-4 flex items-center mt-5 space-x-3">
        {TRSelectArr.map((data, idx) => (
          <Fragment key={idx}>
            <span className="pr-3 pl-3 flex items-center justify-center text-[13px] rounded-md border border-gray-200 shrink-0 py-1">
              {data}
            </span>
          </Fragment>
        ))}
      </div>

      <div className="mt-10 pl-4 pr-4 h-auto flex flex-col">
        {TRSelectData.map((data, idx) => (
          <Fragment key={idx}>
            <div className="w-full border-b justify-between border-gray-100 flex h-[10vh]">
              <div className="w-[80%] flex flex-col justify-center h-full">
                <span>{data.title}</span>
                <span>{data.tag}</span>
              </div>

              <div className="flex-1 flex items-center justify-center">
                <Image src={data.image} alt="" className="object-cover w-full aspect-square rounded-lg opacity-80" />
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  )
}

export default Select