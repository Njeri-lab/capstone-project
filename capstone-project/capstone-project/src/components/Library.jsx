import { Link } from "react-router-dom";
import books from "../data/book";

{
  books.map((book) => (
    <div key={book.id}>
      <h3>{book.title}</h3>
      <Link to={`/reader/${book.id}`}>Read</Link>
    </div>
  ));
}
