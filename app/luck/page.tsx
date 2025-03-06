import InfoFooter from '@/components/InfoFooter'
import LuRender from '@/components/luck/LuRender'
import React from 'react'

const page = () => {
  return (
    <div className="w-full overflow-y-scroll h-auto bg-white flex flex-col pt-[50px]">
      <LuRender />
      <InfoFooter />
    </div>
  )
}

export default page