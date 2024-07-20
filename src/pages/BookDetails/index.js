import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchBookDetails } from "features/book/bookSlice";

const PostDetails = () => {
  const details = useSelector((state) => state?.books?.details);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state?.users?.isLoading);
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchBookDetails(id));
  }, [dispatch, id]);

  return (
    <div className="details">
      <div className="details-container">
        {isLoading ? (
          <div className="loading">
            <span className="loader"></span>
          </div>
        ) : (
          <div className="details">
            <div className="details-cart">
              <div className="details-text">
                <img
                  src={details.imageURL || details.avatar}
                  alt={details.title}
                />
              </div>
              <div className="details-text">
                <h2>{details?.title}</h2>
              </div>
              <div className="details-text">
                <h3>{details?.name}</h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostDetails;
