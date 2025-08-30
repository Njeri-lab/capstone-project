import "./componentStyle.css";
import { useState } from "react";

export default function Reader({ book, onBack }) {
  const [page, setPage] = useState(0);
  const [isFullscreen, setisFullscreen] = useState(false);
  const [fontSize, setFontSize] = useState(18);

  if (!book) {
    return (
      <div className="reader">
        <h2>Reader</h2>
        <p>Select a book to start reading</p>
      </div>
    );
  }

  const nextPage = () => {
    if (page < book.content.length - 1) {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  return (
    <div className={`reader ${isFullscreen ? "fullscreen" : ""}`}>
      <div className="reader-header">
        <button onClick={onBack}>Back to Library</button>
        <button onClick={() => setisFullscreen(!isFullscreen)}>
          {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
        </button>
      </div>

      <div className="font-controls">
        <button onClick={() => setFontSize((size) => size - 2)}>A-</button>
        <span>{fontSize}</span>
        <button onClick={() => setFontSize((size) => size + 2)}>A+</button>
      </div>

      <h2>{book.title}</h2>
      <p>
        <em>{book.author}</em>
      </p>

      <div className="book-content" style={{ fontSize: `${fontSize}px` }}>
        <p>{book.content[page]}</p>
      </div>

      <div className="reader-controls">
        <button onClick={prevPage} disabled={page === 0}>
          Previous
        </button>
        <span>
          Page {page + 1} of {book.content.length}
        </span>
        <button onClick={nextPage} disabled={page === book.content.length}>
          Next
        </button>
      </div>
    </div>
  );
}
