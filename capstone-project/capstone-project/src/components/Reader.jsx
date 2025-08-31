import "./componentStyle.css";
import { useState } from "react";

export default function Reader({ book, onBack }) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fontSize, setFontSize] = useState(14);
  const [theme, setTheme] = useState("light");

  if (!book) {
    return (
      <div className="reader">
        <h2>Reader</h2>
        <p>Select a book to start reading</p>
      </div>
    );
  }

  const embedUrl = book.id
    ? `https://books.google.com/books?id=${book.id}&printsec=frontcover&output=embed`
    : null;

  return (
    <div className={`reader ${isFullscreen ? "fullscreen" : ""} ${theme}`}>
      <div className="reader-header">
        <button onClick={onBack}>Back to Library</button>
        <button onClick={() => setIsFullscreen(!isFullscreen)}>
          {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
        </button>
      </div>

      <div className="theme-controls">
        <button onClick={() => setTheme("light")}>Light</button>
        <button onClick={() => setTheme("dark")}>Dark</button>
        <button onClick={() => setTheme("sepia")}>Sepia</button>
      </div>

      <div className="font-controls">
        <button onClick={() => setFontSize((size) => Math.max(10, size - 2))}>
          A-
        </button>
        <span>{fontSize}</span>
        <button onClick={() => setFontSize((size) => size + 2)}>A+</button>
      </div>

      <h2>{book.title}</h2>
      <p>
        <em>{book.authors?.join(", ") || "Unknown Author"}</em>
      </p>

      <div className="book-content" style={{ fontSize: `${fontSize}px` }}>
        <p>{book.description || "No description available."}</p>
      </div>

      {embedUrl ? (
        <iframe
          src={embedUrl}
          title="Book Preview"
          width="100%"
          height="600px"
          style={{ border: "none", marginTop: "20px" }}
        />
      ) : (
        <p>
          No preview available.{" "}
          {book.infoLink && (
            <a href={book.infoLink} target="_blank" rel="noreferrer">
              More Info
            </a>
          )}
        </p>
      )}
    </div>
  );
}
