import { Line, LineChart, Tooltip, XAxis,YAxis } from "recharts";

const LineGraph = () => {

  const data = [
    { task: "Q0", fee: 332 },
    { task: "Q1", fee: 432 },
    { task: "Q2", fee: 321 },
    { task: "Q3", fee: 626 },
    { task: "Q4", fee: 503 },
    { task: "Q5", fee: 197 },
  ];
  return (
    
          <div className="bg-white rounded-lg w-full flex justify-center h-52 md:h-64 mb-4">
            <LineChart data={data} width={600} height={250}>
            <Tooltip />
            <YAxis axisLine={false} tick={false}/>
            <XAxis dataKey={"task"} axisLine={false} />
            <Line dataKey={"fee"} stroke="#311a68" activeDot={{ r: 8 }} />
          </LineChart>
          
        </div>
  )
}

export default LineGraph