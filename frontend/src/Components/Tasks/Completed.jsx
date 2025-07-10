import react from "react"

function Completed (props){

    return(
        <div className="main ">
        <div className="container w-100 p-5 max-md:w-33 max-md:pl-2 bg-white border-1 border-gray-200 flex flex-col rounded shadow justify-start text-start  ">
            <h1 className="text-lg font-bold max-md:text-xs max-md:w-25" >Completed Tasks</h1>
            <span className="font-bold mt-3 text-lg text-green-500 max-md:text-xs">{props.completed}</span>
            <h5 className="text-sm text-gray-400 max-md:text-[10px]">Completed Tasks</h5>
        </div>
        </div>
    )
}

export default Completed