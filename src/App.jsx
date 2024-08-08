import LineGraph from "./components/LineGraph";
import BarGraph from "./components/BarGraph";
import CircleProgress from "./components/CircleProgress";
import ProgressLine from "./components/ProgressLine";
import LeftSection from "./components/LeftSection";
import DataBox from "./components/DataBox";

function App() {
  return (
    <div className="w-full h-screen flex flex-col md:flex-row">
      {/* Left Section */}
      <div className="w-full md:w-1/4 h-full flex flex-col items-center bg-[#311a68] p-4">
        <LeftSection />
      </div>

      {/* Right Section */}
      <div className="w-full md:w-3/4 h-full flex flex-col p-4 overflow-auto bg-[#ecebeb]">
      <LineGraph />

        <div className="w-full flex flex-col md:flex-row gap-4 mb-4">
          <BarGraph />
          <CircleProgress />
        </div>

        <ProgressLine />

        <div className="w-full flex flex-wrap gap-4">
          <DataBox file='Data One' number='1253' />
          <DataBox file='Data Two' number='64' />
          <DataBox file='Data Three' number='344' />
        </div>
      </div>
    </div>
  );
}

export default App;
