const Create = () => {
    return (
        <div>
            <h2>Create a New Blog!</h2>
            <form>
                <label>Blog Title:</label>
                <input
                    type = "text"
                    required
                />
                <label>Blog Body:</label>
                <textarea
                    required   
                />
                <label>Blog Author:</label>
                <select>
                    <option value = "coldpigli">Coldpigli</option>
                    <option value = "aru">Aru</option>
                    <option value = "naugu">Naugu</option>
                </select>
                <button>
                    Add Blog
                </button>
            </form>
        </div>
     );

};


export default Create;