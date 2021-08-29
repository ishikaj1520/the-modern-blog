import { useState } from "react";
import { useHistory } from "react-router";
const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
  const History=useHistory();
    const handleSubmit = (e) => {
      e.preventDefault();
      const blog = { title, body, author };
  
      fetch('http://localhost:8000/blogs/', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog)
      }).then(() => {
        console.log('new blog added');
        // History.go(-1);
        History.push('./');
      })
    }
  
    return ( 
        <div className="create"><h2>Add a new blog!</h2>
        <form onSubmit={handleSubmit}>
            <label>Blog title:</label>
            <input type='text' required value={title} onChange={(e)=>setTitle(e.target.value)}></input>
            <label>Blog body:</label>
            <textarea required value={body} onChange={(e)=>setBody(e.target.value)}></textarea>
            <label>Blog author:</label>
            <select value={author} onChange={(e)=>setAuthor (e.target.value)}>
                <option value="ishika">ishika</option>    
                <option value="lipika">lipika</option>
            </select>
            <button>Add blog</button>
        </form>
        </div>
     );
}
 
export default Create;