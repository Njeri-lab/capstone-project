import "./componentStyle.css";
import { useState } from "react";
import BookList from "./BookList";
import Reader from "./Reader";

export const Main = () => {
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <>
      <section style={{ marginLeft: "30px" }}>
        <h2>Library</h2>
        <BookList onSelect={setSelectedBook} />
      </section>

      <section>
        <Reader book={selectedBook} onBack={() => setSelectedBook(null)} />
      </section>
    </>
  );
};
