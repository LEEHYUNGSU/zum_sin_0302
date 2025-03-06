import React, { Fragment } from 'react'
import { LGArr } from './LuckGet'

const Hab = () => {
  return (
    <div className="h-[70vh] w-full pl-4 pr-4 mt-5 ">
      <div className="w-full h-full border border-gray-100 flex flex-col pb-10">
        <div className="h-[100px] pt-5 pl-4 flex flex-col">
          <span className="text-[14px] text-gray-500">궁합 파헤치기</span>
          <span className="text-[20px] font-bold">우리는 어떻게 될까?</span>
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
  )
}

export default Hab