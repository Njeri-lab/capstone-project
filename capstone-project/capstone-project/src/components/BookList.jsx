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
