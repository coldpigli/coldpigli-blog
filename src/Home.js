import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);



    useEffect(()=>{
        fetch('http://localhost:8000/blogs')
        .then((res) => {
            if(!res.ok){
                throw Error('Hmmm...Something seems to be wrong');
            }
            
            return res.json();})
        .then((data)=>{
            setBlogs(data);
            setIsPending(false);
            setError(null);
        }).catch((err)=>{
            setIsPending(false);
            setError(err.message);
        })
    },[]);

    return (
        <div className = "home"> 
            {error && <p>{error}</p>}
            {isPending && <p>Loading...</p>}
            {blogs && <BlogList blogs = {blogs} title = "All Blogs!" />}
        </div>
    );
};

export default Home;