import { useState } from "react";

const Create = () => {


    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Coldpigli');
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault(); 
        const blog = {title, body, author};

        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log("new blog added");
            setIsPending(false);
        })
    };



    return (
        <div className = 'create'>
            <h2>Create a New Blog!</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input
                    type = "text"
                    required
                    value = {title}
                    onChange = {(e)=> setTitle(e.target.value) }
                />
                <label>Blog Body:</label>
                <textarea
                    required   
                    value = {body}
                    onChange = {(e) => setBody(e.target.value)}
                />
                <label>Blog Author:</label>
                <select 
                    value = {author}
                    onChange = {(e) => setAuthor(e.target.value)}>
                    <option value = "Coldpigli">Coldpigli</option>
                    <option value = "Aru">Aru</option>
                    <option value = "Naugu">Naugu</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog</button>}
            </form>
        </div>
     );

};


export default Create;