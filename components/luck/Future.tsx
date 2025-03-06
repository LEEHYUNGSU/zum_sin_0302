const futureColorArr: string[] = [
  "red",
  "purple",
  "green",
  "yellow",
  "blue",
  "aliceblue",
]

const Future = () => {
  return (
    <div className="h-[35vh] w-full pl-4 pr-4 mt-5">
      <div className="w-full h-full border border-gray-100 flex flex-col">
        <div className="h-[20%] pl-4 w-full pt-5 flex flex-col">
          <span className="text-[14px] text-gray-500">소름 돋는 미래예측</span>
          <span className="text-[20px] font-bold">가장 정확한 사주 풀이</span>
        </div>

        <div className="flex-1 grid grid-cols-3 mt-3 pl-4 pr-4">
          {futureColorArr.map((data, idx) => (
            <div className="opacity-10"
              style={{backgroundColor: `${data}`}}
              key={idx}
            >

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Future;
