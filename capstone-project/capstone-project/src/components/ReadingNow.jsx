import { useEffect, useState } from "react";

export default function ReadingNow() {
  const [readingNow, setReadingNow] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("readingNow")) || [];
    setReadingNow(stored);
  }, []);

  if (readingNow.length === 0) {
    return <p>No books in your library yet 📚</p>;
  }

  return (
    <div className="reading-now">
      <h2>Reading Now</h2>
      <div className="book-list">
        {readingNow.map((book) => (
          <div key={book.id} className="book-card">
            <img src={book.thumbnail} alt={book.title} />
            <h3>{book.title}</h3>
            <p>{book.authors.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
