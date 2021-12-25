import React from "react";

export default function Review(props){
    return (

        <div className="shadow-lg flex flex-col justify-center items-center review rounded-md border-gray-100 border-1 max-w-md  p-4">
            <img className="border-solid border-4 border-blue-500 w-20 h-20 object-cover rounded-full" src={props.img} alt="" />
            <p className="p-2">{props.name}</p>
            <p>{props.job}</p>
            <p className="py-2">{props.info}</p>
            <div className="action-btn w-1/2 action-btn flex justify-around  p-1">
                <button className="rounded-md  bg-sky-500/75 py-1 px-3" onClick={props.next}>Next</button>  <button className=" rounded-md bg-sky-500/75 py-1 px-3" onClick={props.prev}>Previous</button>
            </div>
            

            <button>Suprise Me</button>
        </div>
    )
}