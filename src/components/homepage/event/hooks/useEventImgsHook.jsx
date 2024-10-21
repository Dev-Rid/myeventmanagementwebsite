
const UseEventImgsHook = ({ imgsprop }) => {

  return (
    <div>
        <div className="">
              <img src={imgsprop.image} alt="" className="h-[20rem] w-[25rem] rounded-lg" />
        </div>
      {/* {
        imgs.map((img, i) => {
            <div key={img.id}>
                <div>
                    <div>
                        <img src={img.image} alt={img.alt} />
                    </div>
                    <div>
                        <img src={img.image} alt={img.alt} />
                    </div>
                </div>
                
                <div>
                    <div>
                        <img src={img.image} alt={img.alt} />
                    </div>
                    <div>
                        <img src={img.image} alt={img.alt} />
                    </div>
                </div>
            </div>
        })
      } */}
    </div>
  )
}

export default UseEventImgsHook
