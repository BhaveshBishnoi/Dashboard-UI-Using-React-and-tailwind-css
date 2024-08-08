import {Tooltip, XAxis, BarChart, Bar } from "recharts";

const BarGraph = () => {
    const data2 = [
        { month: "Jun", rev: 121 },
        { month: "Jul", rev: 168 },
        { month: "Aug", rev: 145 },
        { month: "Sep", rev: 187 },
        { month: "Oct", rev: 202 },
      ];
  return (

    <div className="w-full md:w-1/2 h-80 p-4 bg-[#311a68] rounded-lg text-white flex flex-col items-center justify-between">
            <h3 className="text-xl mb-4">Data</h3>
            <BarChart data={data2} width={290} height={250}>
              <XAxis dataKey={"month"} stroke="#fff" axisLine={false} />
              <Tooltip />
              <Bar dataKey={"rev"} fill="#fff" />
            </BarChart>
            
          </div>
   
  )
}

export default BarGraph