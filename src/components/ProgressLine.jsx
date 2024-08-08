import ProgressBar from "@ramonak/react-progress-bar";

const ProgressLine = () => {
  return (
    <div className="w-full flex flex-col md:flex-row gap-4 mb-4">
          <div className="w-full md:w-1/2 h-80 p-4 bg-white rounded-lg">
            <h3 className="text-xl mb-4">Visual Progress</h3>

            <p>Data Present</p>
            <ProgressBar 
              completed={55}
              bgColor="#3e298e"
              borderRadius="0"
              isLabelVisible={false}
              labelColor="#e80909"
              className="mb-2"
            />
            <p>Data Present</p>
            <ProgressBar 
              completed={75}
              bgColor="#3e298e"
              borderRadius="0"
              isLabelVisible={false}
              labelColor="#e80909"
              className="mb-2"
            />
            <p>Data Present</p>
            <ProgressBar 
              completed={68}
              bgColor="#3e298e"
              borderRadius="0"
              isLabelVisible={false}
              labelColor="#e80909"
              className="mb-2"
            />
            <p>Data Present</p>
            <ProgressBar 
              completed={85}
              bgColor="#3e298e"
              borderRadius="0"
              isLabelVisible={false}
              labelColor="#e80909"
            />
          </div>

          <div className="w-full md:w-1/2 h-80 p-4 bg-[#311a68] rounded-lg text-white">
            <h3 className="text-xl mb-4">Visual Progress</h3>
            <p className='text-white'> Data Present</p>
            <ProgressBar 
              completed={55}
              bgColor="#fff"
              borderRadius="0"
              isLabelVisible={false}
              className="mb-2"
            />
            <p className='text-white'> Data Present</p>
            <ProgressBar 
              completed={75}
              bgColor="#fff"
              borderRadius="0"
              isLabelVisible={false}
              className="mb-2"
            />
            <p className='text-white'> Data Present</p>
            <ProgressBar 
              completed={68}
              bgColor="#fff"
              borderRadius="0"
              isLabelVisible={false}
              labelColor="#e80909"
              className="mb-2"
            />
            <p className='text-white'> Data Present</p>
            <ProgressBar 
              completed={85}
              bgColor="#fff"
              borderRadius="0"
              isLabelVisible={false}
              labelColor="#e80909"
            />
          </div>
        </div>
  )
}

export default ProgressLine