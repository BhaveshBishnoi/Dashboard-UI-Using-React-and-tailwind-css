import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircleProgress = () => {
    let percentage = 70;
  return (
    <div className="w-full md:w-1/2 h-80 p-4 bg-white rounded-lg flex flex-col items-center justify-center">
            <h3 className="text-xl mb-4">Data</h3>
            <div className="w-60 h-60">
              <CircularProgressbar value={percentage} text={`${percentage}%`} />
            </div>
          </div>
  )
}

export default CircleProgress