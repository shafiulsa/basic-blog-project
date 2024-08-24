import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa";

const Blog = ({blog,handleBookmark,handkeMarkASread}) => {
    // console.log(blog);

    const {id,cover,title,author_img ,author,posted_date,reading_time,hashtags}=blog;

    return (
        <div className='mb-20 space-y-4'>
           {/* <h1>blog </h1>  */}
           <img className='w-full mb-8' src={cover} alt="" />


           <div className='flex justify-between mb-8' >
               <div className='flex'>
                   <img className='w-14' src={author_img} alt="" />
                   <div className='ml-6'>
                    <h3 className='text-2xl'>{author}</h3>
                    <p >{posted_date}</p>
                   </div>
               </div>
               <div>
                    <span> {reading_time} min read</span>
                    {/* <button onClick={handleBookmark} className='text-cyan-400'><FaRegBookmark /></button> */}
                    <button onClick={()=>handleBookmark(blog)} 
                    className='text-cyan-400'><FaRegBookmark /></button>

               </div>
           </div>


           <h2 className='text-4xl'>{title}</h2>
           
           <p>
            {
                hashtags.map((hash,idx)=> <span key={idx}><a href=""># {hash} </a></span>)
            }
           </p>

           <button 
           
           onClick={()=>handkeMarkASread(id,reading_time)}

           className='text-purple-600 font-bold underline'>
            Mark As read</button>

        </div>
    );
};

Blog.propTypes ={
    blog:PropTypes.object.isRequired,
    handleBookmark: PropTypes.func,
    handkeMarkASread: PropTypes.func
}

export default Blog;

