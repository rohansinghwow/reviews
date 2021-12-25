import React from "react";

export default function Review(props){
    return (

        <div className="shadow-lg flex flex-col justify-center items-center review rounded-md border-gray-100 border-1 max-w-md  p-6">
            <img className="border-solid bg-indigo-500 shadow-lg shadow-lg shadow-cyan-500/50 border-8  w-40 h-40 object-cover rounded-full" src={props.img} alt="" />
            <p className="p-2 mt-3">{props.name}</p>
            <p className="text-slate-500">{props.job}</p>
            <p className="py-2 text-gray-700">{props.info}</p>
            <div className="action-btn w-1/2 action-btn flex justify-around  p-1">
                <button className="font-semibold rounded-md text-gray-100 bg-sky-500/75 py-1 px-3" onClick={props.next}>Next</button>  <button className=" font-semibold text-gray-100 rounded-md bg-sky-500/75 py-1 px-3" onClick={props.prev}>Previous</button>
            </div>
            

            <button className="text-lime-50 font-semibold rounded-md bg-red-400 text-gray-800 py-1 px-3 mt-3 shadow-lg shadow-red-500/50">Suprise Me</button>
        </div>
    )
}