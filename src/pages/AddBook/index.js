import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addNewBook } from "../../features/book/bookSlice";

const AddBook = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [imageURL, setImageURL] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = { name, title, imageURL };
    dispatch(addNewBook(body));
    setTimeout(() => {
      navigate("/book");
    }, 2000);
  };

  return (
    <section className="section">
      <div className="section-container">
        <h1>Add Post</h1>
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
              required
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="container-item">
            <label>Image URL</label>
            <input
              type="text"
              value={imageURL}
              required
              onChange={(e) => setImageURL(e.target.value)}
            />
          </div>
          <button className="add-btn">Add Blog</button>
        </form>
      </div>
    </section>
  );
};

export default AddBook;
