
import { useState } from 'react';
import './App.css'
import Blogs from './components/Blogs'
import Bookmark from './components/Bookmark'
import Header from './components/Header'

function App() {

  const [bookmarks,setBookmarks]=useState([]);
  const [readingtime,setReadingtime]=useState(0 );

  const handleBookmark= blog =>{
      // alert("book mark addade");
      // alert({blog});
      console.log(blog);

      // mordern way 
      const newBookmarkes= [...bookmarks,blog];
      setBookmarks(newBookmarkes);
  }


  const handkeMarkASread= (id,time)=>{
     //alert("reading time", time);

     setReadingtime(readingtime +time);

    console.log("remove bookmark", id);
    //bookmark ar id gula bad diya baki gulla k add kori
    const remainingBookmark=bookmarks.filter(Bookmark =>Bookmark.id!==id)
    setBookmarks(remainingBookmark);

  }



  return (
    <>

     <Header></Header>
     {/* <Blogs></Blogs> */}

     <div className='md:flex'>
      <Blogs handleBookmark={handleBookmark}  handkeMarkASread={handkeMarkASread}></Blogs> 

      <Bookmark  bookmarks={bookmarks}   readingtime={readingtime}> </Bookmark>
     </div>
    </>
  )
}

export default App
