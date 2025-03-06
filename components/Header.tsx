import { BellRing, Search, UserRound } from "lucide-react"

const Header = () => {
  return (
    <div className='fixed w-[430px] h-[50px] bg-white flex justify-between pl-4 pr-4 z-[1000]'>
      <div className='w-auto space-x-2 h-full flex items-center text-[11px] text-gray-700'>
        <span>서울</span>
        <span>미세먼지보통</span>
        <span>13</span>
      </div>

      <div className='w-auto space-x-4 h-full flex items-center'>
        <span>
          <Search size={20} />
        </span>
        <span>
          <BellRing size={20} />
        </span>
        <span className="w-[20px] h-[20px] flex items-center justify-center text-white bg-black rounded-full">
          <UserRound size={12} />
        </span>
      </div>
    </div>
  )
}

export default Header