import React from "react";

export default function Review(props){
    return (

        <div className=" flex flex-col justify-center items-center review rounded-md border-cyan-300 border-2 max-w-md  p-4">
            <img className=" w-20 h-20 object-cover rounded-full" src={props.img} alt="" />
            <p className="name">{props.name}</p>
            <p>{props.job}</p>
            <p className="info">{props.info}</p>
            <div className="w-3/12 action-btn flex justify-between mx-auto">
                <button onClick={props.next}>Next</button>  <button onClick={props.prev}>Previous</button>
            </div>
            

            <button>Suprise Me</button>
        </div>
    )
}