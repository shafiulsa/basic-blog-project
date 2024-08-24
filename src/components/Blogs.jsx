
import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";
import PropTypes from "prop-types"

const Blogs = ({handleBookmark, handkeMarkASread}) => {

   const [blogs,setBlogs]=useState([]);

   useEffect(()=>{
    fetch('blogs.json')
    .then(res=>res.json())
    .then(data=>setBlogs(data))
   },[])


    return (
        <div className="md: w-2/3"> 
             <h1>total data : {blogs.length}</h1>
             {
                blogs.map(blog =><Blog key={blog.id}  
                         handleBookmark={handleBookmark}
                       
                         handkeMarkASread={handkeMarkASread}
                         
                                  blog={blog}></Blog>)
             }
        </div>
    );
};

Blogs.propTypes={
    handleBookmark: PropTypes.func,
    handkeMarkASread:PropTypes.func
}

export default Blogs;