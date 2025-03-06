import React from "react";
import LuCarousel from "./LuCarousel";
import Future from "./Future";
import Test from "./Test";
import FitContent from "./FitContent";
import LuckGet from "./LuckGet";
import Job from "./Job";
import Solve from "./Solve";
import Destiny from "./Destiny";
import Hab from "./Hab";
import Dream from "./Dream";

const LuRender = () => {
  return (
    <>
      <div className="w-full flex justify-between items-center h-auto pl-4 pr-4">
        <span className="font-bold text-[20px]">운세</span>
        <span className="text-[13px]">선택 사이곤님</span>
      </div>

      <LuCarousel />

      {/* 위쪽 상단 케러셀 */}

      <Future />

      {/* 소름 돋는 미래 예측: 가장 정확한 사주 풀이  */}

      <Test />

      {/* 심리테스트: 마음을 분석하는 시간 */}

      <FitContent />

      {/* 맞춤 운세 */}

      <LuckGet />

      {/* 액운 방지: 손쉽게 행운을 얻는 방법 */}

      <Job />
      {/* 취업과 진로: 내게 맞는 직업 찾기 */}

      <Solve />
      {/* 소원을 이뤄요 지금 필요한 해결책 */}

      <Destiny />
      {/* 타고난 운명: 나에 대한 모든 것 */}

      <Hab />

      {/* 궁합 파헤치기: 우리는 어떻게 될까? */}

      <Dream />

      {/* 꿈해몽: 그 꿈에 담긴 의미 */}
    </>
  );
};

export default LuRender;
