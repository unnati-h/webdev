import React, {useState} from "react";
import './Loader.css'
function Loader()
{
    const [loader,setLoader]=useState(false);
    const fetchdata=()=>{
        setLoader(true);
        setTimeout(()=>{
            setLoader(false);
        },3500);
    }
return(<>
       
       <div>
       {loader? <div className="loader"> </div> : <button onClick={fetchdata}>click to fetch data</button>}
       </div>
</>);
}
export default Loader