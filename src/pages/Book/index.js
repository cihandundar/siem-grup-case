import { fetchBook, handleDelete } from "../../features/book/bookSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../index.css";
import { Link } from "react-router-dom";
const Book = () => {
  const data = useSelector((state) => state.books.data);
  const isLoading = useSelector((state) => state?.books?.isLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBook());
  }, [dispatch]);

  const handleDeleteFunction = (id) => {
    dispatch(handleDelete(id));
  };

  return (
    <section>
      <div className="container">
        <h1>Book List</h1>
        {isLoading ? (
          <div className="loading">
            <span className="loader"></span>
          </div>
        ) : (
          <div className="wrapper">
            {data.map((book) => (
              <div key={book.id} className="cart">
                <Link to={`/book/${book?.id}`}>
                  <div className="cart-image">
                    <img src={book.imageURL || book.avatar} alt={book.title} />
                  </div>
                </Link>
                <div className="cart-title">
                  <h3>{book.title}</h3>
                </div>
                <div className="cart-name">
                  <p>{book.name}</p>
                </div>
                <div className="cart-btn">
                  <button
                    className="delete"
                    onClick={() => handleDeleteFunction(book?.id)}
                  >
                    Delete
                  </button>
                  <Link to={`/editbook/${book?.id}`}>
                    <button className="edit">Edit</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Book;
