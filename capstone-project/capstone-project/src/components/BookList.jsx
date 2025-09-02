import { useEffect, useState } from "react";
import BookCard from "./BookCard";

export default function BookList({ onSelect, query }) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;

    const cachedBooks = localStorage.getItem(`books_${query}`);
    if (cachedBooks) {
      setBooks(JSON.parse(cachedBooks));
      return; // stop here, no need to fetch
    }

    setLoading(true);
    setError(null);

    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=20`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch books");
        }
        return res.json();
      })
      .then((data) => {
        if (data.items) {
          const formattedBooks = data.items.map((item) => ({
            id: item.id,
            title: item.volumeInfo.title,
            authors: item.volumeInfo.authors || ["Unknown Author"],
            thumbnail:
              item.volumeInfo.imageLinks?.thumbnail?.replace(
                "http:",
                "https:"
              ) || "https://via.placeholder.com/128x193?text=No+Cover",
            description:
              item.volumeInfo.description || "No description available.",
            previewLink: item.volumeInfo.previewLink || null,
            infoLink: item.volumeInfo.infoLink || null,
          }));

          setBooks(formattedBooks);

          localStorage.setItem(
            `books_${query}`,
            JSON.stringify(formattedBooks)
          );
        } else {
          setBooks([]);
        }
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [query]);

  if (!query) return <p>Start by searching for a book above 👆</p>;
  if (loading) return <p>Loading books...</p>;
  if (error) return <p>Error: {error}</p>;
  if (books.length === 0) return <p>No books found for "{query}"</p>;

  return (
    <div className="book-list">
      {books.map((book) => (
        <BookCard key={book.id} book={book} onSelect={onSelect} />
      ))}
    </div>
  );
}
