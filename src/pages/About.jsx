import { Fragment, useEffect, useState } from "react"
import Sample from "../common/Sample";


const About = ()=>{

    const [updateInput, setInputValue] = useState();

    const [listData, setListData] = useState([]);

    const saveForm = (event)=>{
        event.preventDefault();
        console.log(event)

        let formData = new FormData(event.target);
        let formEntries = Object.fromEntries(formData.entries());

        console.log(formData)
        console.log(formEntries)
    }

    const getPostData = () =>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(
            (res)=>res.json()
        )
        .then(
            (data)=>setListData(data)
        )
    }

    useEffect(()=>{
        // getPostData()
    },[])

    const getSampleData = (data) =>{
        console.log("data", data)
    }



    return(
        <Fragment>
            <div className="max-w-screen-xl mx-auto py-5">
                <h1>About</h1>
                <div className="p-10">
                    <form onSubmit={saveForm}>
                        <div>{updateInput}</div>
                        <input className="border border-gray-200" name="email" placeholder="email" type="email" required onChange={(e)=> setInputValue(e.target.value)} />
                        <input className="border border-gray-200 ml-5" name="name" placeholder="Name" type="text" required />
                        <button type="submit" className="bg-gray-500 text-white px-5 ml-5">Save</button>
                    </form>
                </div>

                <div>
                    <h1>Post List</h1>
                    <div className="mt-5 mb-4">
                        {listData != undefined && listData.map((item)=>{
                            return(
                                <div key={item.id} className="mb-5">
                                    <h2 className="font-bold">{item.title}</h2>
                                    <p>{item.body}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="mt-15">
                    <Sample data='adasdasdasasd' getData={getSampleData} />
                </div>
            </div>
        </Fragment>
    )
}

export default About