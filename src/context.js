import React, { useState, useContext, useEffect, useCallback } from 'react';
import axios from 'axios'; // Import axios

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("the lost world");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [resultTitle, setResultTitle] = useState("");

  // Update the fetchBooks function to use axios
  const fetchBooks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://www.googleapis.com/books/v1/volumes`, {
        params: {
          q: searchTerm,
          key: 'AIzaSyCJQfXq3uedyBsHl6n1yQJtyrMCEFTYiuc', // Your API key
        },
      });
      const data = response.data; // Accessing data from the response directly

      console.log('Fetched data: ', data);

      if (data.items) {
        const booksData = data.items.map((book) => {
          const { id, volumeInfo } = book;
          const { title, authors, imageLinks, infoLink } = volumeInfo;
          return {
            id,
            title,
            authors: authors ? authors.join(", ") : "Unknown author",
            thumbnail: imageLinks ? imageLinks.thumbnail : "No image",
            infoLink
          };
        });
        setBooks(booksData);
        setResultTitle(`Found ${booksData.length} results`); // Set the result title here
      } else {
        setBooks([]);
        setResultTitle("No results found");
      }
    } catch (error) {
      console.log('Error fetching books:', error);
    } finally {
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchBooks();
  }, [searchTerm, fetchBooks]);

  return (
    <AppContext.Provider value={{ loading, books, setSearchTerm, resultTitle }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
