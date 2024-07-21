import { useEffect } from "react";

const Sample = (props) =>{
    console.log("props", props)

    useEffect(()=>{
        props.getData('ihohoh');
    },[])
    return(
        <div>{props.data}</div>
    )
}

export default Sample;