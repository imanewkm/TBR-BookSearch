import React, { useState, useContext, useEffect, useCallback } from 'react';

const URL = "https://www.googleapis.com/books/v1/volumes?q=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("the lost world");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [resultTitle, setResultTitle] = useState("");

  const fetchBooks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${URL}${searchTerm}&key=AIzaSyCJQfXq3uedyBsHl6n1yQJtyrMCEFTYiuc`);
      const data = await response.json();
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
        console.log('Parsed books:', booksData);
        setResultTitle(`Found ${booksData.length} results`);
      } else {
        setBooks([]);
        setResultTitle("No results found");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchBooks();
  }, [searchTerm, fetchBooks]);

  return (
    <AppContext.Provider value={{ loading, books, setSearchTerm, resultTitle, setResultTitle }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
