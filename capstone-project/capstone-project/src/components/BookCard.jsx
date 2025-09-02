import "./componentStyle.css";

function BookCard({ book, onSelect }) {
  const handleOpen = () => {
    const readingNow = JSON.parse(localStorage.getItem("readingNow")) || [];
    const exists = readingNow.some((b) => b.id === book.id);
    if (!exists) {
      readingNow.push(book);
      localStorage.setItem("readingNow", JSON.stringify(readingNow));
    }

    onSelect(book);
  };

  return (
    <div className="book-card" onClick={handleOpen}>
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
