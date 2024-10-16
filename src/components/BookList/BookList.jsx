import React from 'react';
import { useGlobalContext } from '../../context'; // Ensure the import path is correct
import Book from "../BookList/Book"; // Ensure this component displays individual book info
import Loading from "../Loader/Loader";
import coverImg from "../../images/into-library.jpeg"; // Placeholder image for missing covers
import "./BookList.css";

const BookList = () => {
  const { books, loading, resultTitle } = useGlobalContext();

  if (loading) return <Loading />;

  return (
    <section className='booklist'>
      <div className='container'>
        <div className='section-title'>
          <h2>{resultTitle}</h2>
        </div>
        <div className='booklist-content grid'>
          {
            books.slice(0, 30).map((item, index) => {
              const coverImage = item.thumbnail ? item.thumbnail : coverImg; // Fallback to coverImg if no thumbnail

              return (
                <Book 
                  key={index} 
                  id={item.id} 
                  title={item.title}
                  authors={item.authors} // Pass authors here
                  cover_img={coverImage} 
                  infoLink={item.infoLink} // Link to more info about the book
                />
              );
            })
          }
        </div>
      </div>
    </section>
  );
}

export default BookList;
