import {
    MdDashboard,
    MdDisplaySettings,
    MdMessage,
    MdFeedback,
  } from "react-icons/md";
  import { SlTarget } from "react-icons/sl";
  import { FaChartArea } from "react-icons/fa";

const LeftSection = () => {
  return (
   <>
   <div className="w-24 h-24 bg-[#3e298e] rounded-full mb-4"></div>
        <ul className="text-white w-full list-none flex flex-col text-[16px] md:text-[18px] lg:text-[20px] text-aliceblue mt-4">
          {[
            { icon: <MdDashboard />, text: 'Dashboard' },
            { icon: <SlTarget />, text: 'Targets' },
            { icon: <FaChartArea />, text: 'Charts' },
            { icon: <MdDisplaySettings />, text: 'Settings' },
            { icon: <MdMessage />, text: 'Message' },
            { icon: <MdFeedback />, text: 'Feedback' },
          ].map(({ icon, text }, index) => (
            <li key={index} className="w-full h-12 flex items-center my-1 pl-4 hover:bg-[#3e298e] transition-colors duration-300 cursor-pointer">
              <p className="w-6 h-6 mr-4">{icon}</p>
              {text}
            </li>
          ))}
        </ul>
   </>
  )
}

export default LeftSection