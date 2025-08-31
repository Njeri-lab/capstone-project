import "./componentStyle.css";

function BookCard({ book, onSelect }) {
  return (
    <div className="book-card" onClick={() => onSelect(book)}>
      <img
        src={book.thumbnail}
        alt={`Cover of ${book.title}`}
        className="book-cover"
        style={{ width: "128px", height: "193px", objectFit: "cover" }}
      />
      <h3>{book.title}</h3>
      <p>{book.authors.join(", ")}</p>
    </div>
  );
}

export default BookCard;
