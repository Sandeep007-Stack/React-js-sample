import { Fragment, useEffect, useState } from "react";

const Home = ()=>{

    const [count, setCount] = useState(0);

    const updateCount = () =>{
        setCount(count+1);
    }
   
    useEffect(()=>{
        // console.log("rendering");
        updateCount()
    },[])



    return(
        <Fragment>
            <div className="max-w-screen-xl mx-auto py-10">
                <h1>Home</h1>
                <div>gfugfhjghfgf</div>
                <div className="p-10 bg-gray-100 mt-5">
                    asdasdsad
                    <div>Count: {count}</div>
                    <button className="bg-red-500 p-2 rounded-md text-white" onClick={updateCount} >button</button>

                    <DisplayTable />
                </div>
            </div>
        </Fragment>
    )
}


const DisplayTable = ()=>{
    return(
        <table>
            <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
            </tr>
        </table>
    )
}


export default Home;