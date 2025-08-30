import "./componentStyle.css";

function BookCard({ book, onSelect }) {
  return (
    <div className="book-card" onClick={() => onSelect(book)}>
      <img src={book.cover} alt={book.title} className="book-cover" />
      <h3>{book.title}</h3>
      <p>{book.author}</p>
    </div>
  );
}

export default BookCard;
