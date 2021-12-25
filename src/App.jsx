import React from "react";
import Main from './Main'
import Review  from "./Review";
import data from './data'

export default function App () {

    const [review, setReview] = React.useState(data)
    const [arrayPoint, setArrayPoint] = React.useState(0)

    function nextBtn(){
      arrayPoint===review.length-1? setArrayPoint(0):setArrayPoint(prevPoint=>prevPoint+1)
    }
  
    function prevBtn(){
      arrayPoint===0? setArrayPoint(review.length-1):setArrayPoint(prevPoint=>prevPoint-1)
    } 
    
    function getRandom(){
      let randomNum = Math.floor (Math.random() * review.length)
      setArrayPoint(randomNum)
    }
      
  
      return (
        <div className=" antialiased bg-slate-200 h-screen">
        <Main/>
        <div className="grid place-content-center mt-20">
        <Review next={nextBtn} random={getRandom} prev={prevBtn} key={review[arrayPoint].id} name={review[arrayPoint].name} job={review[arrayPoint].job}
       
          img={review[arrayPoint].image} info={review[arrayPoint].text} />
        </div>
       
        </div>
      )

  
  
};
