import react from "react"

function Total (props){


  
    return(
        <div className="main">
        <div className="container w-100 p-5 max-md:w-28 max-md:pl-2  bg-white flex flex-col border-1 border-gray-200 rounded shadow justify-start text-start  ">
            <h1 className="text-lg font-bold max-md:text-xs max-md:w-25" >Total Tasks</h1>
            <span className="font-bold mt-3 text-lg max-md:text-xs ">{props.total}</span>
            <h5 className="text-sm text-gray-400 max-md:text-[10px]">Task for today</h5>
        </div>
        </div>
    )
}

export default Total