import { Link } from "react-router-dom"

const NotFound = ()=>{

    return (
        <div className = "not-found">
            <h2>Oops..</h2>
            <p>I'm afraid the page you're accessing doesn't exist</p>
            <Link to = "/">Back to Homepage...</Link>
        </div>
    );
}

export default NotFound;