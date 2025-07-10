import react from "react"

function Remaining (props){

    return(
      <div className="main">
        <div className="container w-100 max-md:w-30 max-md:pl-2 p-5 border-1 border-gray-200  bg-white flex flex-col rounded shadow justify-start text-start  ">
            <h1 className="text-lg font-bold  max-md:text-xs max-md:w-25" >Remaining Tasks</h1>
            <span className="font-bold mt-3 text-lg text-red-500  max-md:text-xs">{props.remaining}</span>
            <h5 className="text-sm text-gray-400 max-md:text-[10px] ">Pending Tasks</h5>
        </div>
        </div>
    )
}

export default Remaining