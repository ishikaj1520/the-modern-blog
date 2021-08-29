import { Link } from 'react-router-dom';
const BlogList = ({ blogs }) => {
  return (
    <div className="blog-list">
      {blogs.map(blog => (
        <div className="blogpreview" key={blog.id} >
          <Link to={`/blogs/${blog.id}`}>
            <h2>{ blog.title }</h2>
            <p>Written by { blog.author }</p>
            {/* <button onClick={() => handledelete(blog.id)}>delete blog</button> */}
          </Link>
        </div>
      ))}
    </div>
  );
}
 
export default BlogList;