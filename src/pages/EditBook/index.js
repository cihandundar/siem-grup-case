import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editBook, fetchBookDetails } from "../../features/book/bookSlice";

const EditBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { bookId } = useParams();

  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [imageURL, setImageURL] = useState("");

  const bookDetails = useSelector((state) => state.books.details);

  useEffect(() => {
    dispatch(fetchBookDetails(bookId));
  }, [dispatch, bookId]);

  useEffect(() => {
    if (bookDetails) {
      setName(bookDetails.name || "");
      setTitle(bookDetails.title || "");
      setImageURL(bookDetails.imageURL || "");
    }
  }, [bookDetails]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = { name, title, imageURL };
    dispatch(editBook({ id: bookId, body }));
    setTimeout(() => {
      navigate("/book");
    }, 2000);
  };

  return (
    <section className="section">
      <div className="section-container">
        <h1>Edit Book</h1>
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="container-item">
              <label>Author</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="container-item">
              <label>Name</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="container-item">
              <label>Image URL</label>
              <input
                type="text"
                value={imageURL}
                onChange={(e) => setImageURL(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="add-btn">
              Edit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EditBook;
