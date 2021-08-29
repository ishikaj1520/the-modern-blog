
import Bloglist from "./bloglist";
import useFetch from "./useFetch/useFetch";
const Home = () => {
    // const[ename,setname]=useState('Ishika');
    // const[age,setage]=useState(20);
    // const handleClickAgain = (name) => {
        // setname('Mario');
        // setage(30);
      // }

// const handledelete = (id) => {
    // const newBlogs = blogs.filter(blog => blog.id !== id);
    // setblog(newBlogs);
  // } 
  const{data:blogs,isPending,error}=useFetch('http://localhost:8000/blogs')
    return ( 
        <div className="Home" >
          { error && <div>{ error }</div> }
          {isPending && <div>Loading......</div>}
          { blogs && <Bloglist blogs={blogs} title='All Blogs!' />} 
              {/* <Bloglist blogs={blogs.filter((blog) => blog.author=== 'mario')}  handledelete={handledelete} title="Mario's Blogs!"/>  
    
            <p>{ename} is {age} years old</p> 
              <button onClick={() =>handleClickAgain('ishika')}>Click me</button>  */}
        </div>
     );
}
 
export default Home;