import { useState } from "react"
import './style.css'

function RandomNumber(){
    const[random,setRandom]=useState(null);

    function handlerandom(){
        const number=(Math.floor(Math.random()*100)+1);
        setRandom(number)
    }
    return(
        <>
        <div className="container">
        {random === null ? (
        <p className="message">No number generated yet</p>
      ) : (
        <h1 className="number">{random}</h1>
      )}
        <button className="btn" onClick={handlerandom}>GenerateRandom</button>
        </div>
        </>
    )
}
export default RandomNumber