import react from "react"

function Completed (props){

    return(
        <div className="main ">
        <div className="container w-100 p-5  bg-white border-1 border-gray-200 flex flex-col rounded shadow justify-start text-start  ">
            <h1 className="text-lg font-bold" >Completed Tasks</h1>
            <span className="font-bold mt-3 text-lg">{props.completed}</span>
            <h5 className="text-sm text-gray-400">Completed Tasks</h5>
        </div>
        </div>
    )
}

export default Completed