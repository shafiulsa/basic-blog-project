import PropTypes from 'prop-types';
import Bookmrksp from './Bookmrksp';

const Bookmark = ({bookmarks,readingtime}) => {

    // const {title}=bookmarks;
    
    return (
        <div className="md:w-1/3 bg-gray-300 ml-4 rounded-xl">

          <div>
            <h3 > reading time : {readingtime}</h3>
          </div>


            {/* <h1>book mark : {bookmarks.length}</h1> */}
            <h1> book markes : {bookmarks.length}</h1>

            {
                //bookmarks.map(bookmark =><Bookmrksp key={bookmark.id} bookmark={bookmark}></Bookmrksp>)
                bookmarks.map((bookmark,idx) =><Bookmrksp key={idx} bookmark={bookmark}></Bookmrksp>)

      }
        </div>
    );
};

Bookmark.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingtime: PropTypes.func
};

export default Bookmark;