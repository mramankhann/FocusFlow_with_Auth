import react from "react"

function Total (props){


  
    return(
        <div className="main">
        <div className="container w-100 p-5  bg-white flex flex-col border-1 border-gray-200 rounded shadow justify-start text-start  ">
            <h1 className="text-lg font-bold" >Total Tasks</h1>
            <span className="font-bold mt-3 text-lg">{props.total}</span>
            <h5 className="text-sm text-gray-400">Task for today</h5>
        </div>
        </div>
    )
}

export default Total