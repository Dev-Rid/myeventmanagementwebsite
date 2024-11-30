
const UseEventImgsHook = ({ imgsprop }) => {

  return (
    <div>
      <div className="">
          <img src={imgsprop.image} alt="" className="h-[10rem] sm:h-[12rem] md:h-[20rem] w-[25rem] rounded-lg" />
      </div>
    </div>
  )
}

export default UseEventImgsHook
