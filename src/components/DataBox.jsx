
const DataBox = (data) => {
  return (
    <>
    <div className="w-36 h-36 bg-white p-4 grid rounded-lg">
            <h3 className="text-xl mb-2">{data.file}</h3>
            <p className="text-[#311a68] text-3xl">{data.number}</p>
          </div>
    </>
  )
}

export default DataBox