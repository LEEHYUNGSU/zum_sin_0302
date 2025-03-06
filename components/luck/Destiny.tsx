import { Fragment } from "react"

const DTArr = ["띠 운세", "별자리 운세", "태어난 계절운", "생년월일 운세", "전생운", "탄생석석"]

const Destiny = () => {
  return (
    <div className="h-[35vh] w-full pl-4 pr-4 mt-5">
    <div className="w-full h-full border border-gray-100 flex flex-col pt-5 pb-5">
      <div className='h-auto flex flex-col w-full pl-4'>
        <span className='text-[14px] text-gray-500'>타고난 운명</span>
        <span className='text-[20px] font-bold'>나에 대한 모든 것</span>
      </div>
      <div className='grid grid-cols-3 gap-1 w-full flex-1 pl-7 pr-7'>
      {DTArr.map((data, idx) => (
        <Fragment key={idx}>
          <div className="bg-sky-50">
            
          </div>
        </Fragment>
      ))}
    </div>
    </div>


  </div>
  )
}

export default Destiny