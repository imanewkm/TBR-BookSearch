import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loading from "../Loader/Loader";
import coverImg from "../../images/no-cover.png";
import "./BookDetails.css";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const BookDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const URL = `https://www.googleapis.com/books/v1/volumes/${id}?key=AIzaSyCJQfXq3uedyBsHl6n1yQJtyrMCEFTYiuc`; // Google Books API URL

    setLoading(true);
    async function getBookDetails() {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data);

        if (data) {
          const { volumeInfo } = data; // Destructure volumeInfo from the response
          const { description, title, imageLinks, authors, publishedDate, categories } = volumeInfo; // Get relevant details from volumeInfo

          const newBook = {
            description: description ? stripHtml(description) : "No description found", // Strip HTML from description
            title: title,
            cover_img: (imageLinks && imageLinks.thumbnail) ? imageLinks.thumbnail : coverImg, // Fallback to coverImg if no thumbnail
            authors: authors ? authors.join(", ") : "Unknown author", // Authors
            publishedDate: publishedDate || "No publication date found", // Publication date
            genre: categories ? categories.join(", ") : "No genre found", // Genre
          };
          setBook(newBook);
        } else {
          setBook(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }

    function stripHtml(html) {
      const tmp = document.createElement("DIV");
      tmp.innerHTML = html;
      return tmp.textContent || tmp.innerText || "";
    }

    getBookDetails();
  }, [id]); // Only depend on id

  if (loading) return <Loading />;

  return (
    <section className='book-details'>
      <div className='container'>
        <button type='button' className='flex flex-c back-btn' onClick={() => navigate("/book")}>
          <FaArrowLeft size={22} />
          <span className='fs-18 fw-6'>Go Back</span>
        </button>

        <div className='book-details-content grid'>
          <div className='book-details-img'>
            <img src={book?.cover_img} alt="cover img" />
          </div>
          <div className='book-details-info'>
            <div className='book-details-item title'>
              <span className='fw-6 fs-24'>{book?.title}</span>
            </div>
            <div className='book-details-item description'>
              <span>{book?.description}</span>
            </div>
            <div className='book-details-item'>
              <span className='fw-6'>Authors: </span>
              <span className='text-italic'>{book?.authors}</span>
            </div>
            <div className='book-details-item'>
              <span className='fw-6'>Publication Date: </span>
              <span className='text-italic'>{book?.publishedDate}</span>
            </div>
            <div className='book-details-item'>
              <span className='fw-6'>Genre: </span>
              <span className='text-italic'>{book?.genre}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookDetails;
