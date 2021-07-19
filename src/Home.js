import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const {data, isPending, error} = useFetch('http://localhost:8000/blogs');



    

    return (
        <div className = "home"> 
            {error && <p>{error}</p>}
            {isPending && <p>Loading...</p>}
            {data && <BlogList blogs = {data} title = "All Blogs!" />}
        </div>
    );
};

export default Home;