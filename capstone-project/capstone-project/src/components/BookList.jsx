import books from "../data/book";
import BookCard from "./BookCard";

export default function BookList({ onSelect }) {
  return (
    <div className="book-list">
      {books.map((book) => (
        <BookCard key={book.id} book={book} onSelect={onSelect} />
      ))}
    </div>
  );
}

// import { useEffect, useState } from "react";
// import BookCard from "./BookCard";

// function BookList({ onSelect }) {
//   const [books, setBooks] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => {
//         setBooks(data.results);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetcing books:", err);
//       });
//   }, []);

//   if (loading) return <p>Loading books...</p>;

//   return (
//     <div className="book-list">
//       {books.map((book) => (
//         <div
//           key={book.id}
//           className="book-card"
//           onClick={() => onSelect(book)}
//           style={{ cursor: "pointer", marginBottom: "10px" }}
//         >
//           <h3>{book.title}</h3>
//           <p>
//             {book.authors && book.authors.length > 0
//               ? book.authors[0].name
//               : "Unknown Author"}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default BookList;
