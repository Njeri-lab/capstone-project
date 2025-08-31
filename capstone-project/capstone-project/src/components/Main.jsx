import "./componentStyle.css";
import { useState } from "react";
import BookList from "./BookList";
import Reader from "./Reader";

export const Main = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const searchTerm = formData.get("search");
    setQuery(searchTerm);
  };

  return (
    <>
      <section style={{ marginLeft: "30px" }}>
        <h2>Library</h2>

        {/* Search Form */}
        <form onSubmit={handleSearch} style={{ marginBottom: "20px" }}>
          <input
            type="text"
            name="search"
            placeholder="Search books..."
            defaultValue={query}
            style={{
              padding: "8px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              marginRight: "10px",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "8px 12px",
              borderRadius: "6px",
              border: "none",
              backgroundColor: "#007bff",
              color: "white",
              cursor: "pointer",
            }}
          >
            Search
          </button>
        </form>

        <BookList onSelect={setSelectedBook} query={query} />
      </section>

      <section>
        <Reader book={selectedBook} onBack={() => setSelectedBook(null)} />
      </section>
    </>
  );
};

// import "./componentStyle.css";
// import { useState } from "react";
// import BookList from "./BookList";
// import Reader from "./Reader";

// export const Main = () => {
//   const [selectedBook, setSelectedBook] = useState(null);

//   return (
//     <>
//       <section style={{ marginLeft: "30px" }}>
//         <h2>Library</h2>
//         <BookList onSelect={setSelectedBook} />
//       </section>

//       <section>
//         <Reader book={selectedBook} onBack={() => setSelectedBook(null)} />
//       </section>
//     </>
//   );
// };
