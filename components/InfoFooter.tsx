import React from "react";

const InfoFooter = () => {
  return (
    <div className="h-[30vh] bg-gray-200 flex flex-col pl-4 pr-4 pt-9 text-[12px]">
      <div className="font-bold">(주)테크랩스</div>
      <div className="text-gray-500 flex flex-col mt-3 text-[11px] space-y-[2px]">
        <div>대표이사: 유지현</div>
        <div>서울특별시 강남구 강남대로 84길 13, 5~9층</div>
        <div>(역삼동 825-26 강남역 KR타워)</div>
        <div>사업자 등록번호: 144-81-15705</div>
        <div>통신판매업 신고: 제2018-서울강남-03394호</div>
        <div>
          대표전화: <span className="text-blue-600">1811-9329</span>
        </div>
      </div>
    </div>
  );
};

export default InfoFooter;
