import React, { useState } from 'react';
import Divider from './Divider';
import Sentiment from './Sentiment';

export default function Feedback(props) {
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);
  const [outputVisibility, setOutputVisibility] = useState(false);

  return (
    <div>
      <Divider />

      {/* Buttons */}
      <div className="mt-2 d-flex justify-content-between">
        <button
          className="btn btn-warning btn-md"
          onClick={() => setOutputVisibility(true)}>
          Review <i className="bi bi-box-arrow-in-right"></i>
        </button>
        <button
          className="btn btn-danger btn-md"
          onClick={() => setOutputVisibility(false)}>
          Close <i className="bi bi-x-circle-fill"></i>
        </button>
      </div>

      <Divider />

      {/* <!--   textarea     --> */}
      <div className="mt-2">
        <h4>
          <label for="feedbackForm" className="form-label teal">
            Feedback
          </label>
        </h4>
        <textarea
          className="form-control w-75"
          id="feedbackForm"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          rows="3"></textarea>
      </div>

      <Divider />

      {/* <!--   stars     --> */}
      <div className="mt-2">
        <h4 className="teal">Rating</h4>
        <div className="d-flex">
          <div className="form-check pe-3">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="rating1"
              value={1}
              onClick={(e) => setRating(e.target.value)}
            />
            <label className="form-check-label" for="rating1">
              1 <i className="bi bi-star-fill orange"></i>
            </label>
          </div>
          <div className="form-check pe-3">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="rating2"
              value={2}
              onClick={(e) => setRating(e.target.value)}
            />
            <label className="form-check-label" for="rating2">
              2 <i className="bi bi-star-fill orange"></i>
            </label>
          </div>
          <div className="form-check pe-3">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="rating3"
              value={3}
              onClick={(e) => setRating(e.target.value)}
            />
            <label className="form-check-label" for="rating3">
              3 <i className="bi bi-star-fill orange"></i>
            </label>
          </div>
          <div className="form-check pe-3">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="rating4"
              value={4}
              onClick={(e) => setRating(e.target.value)}
            />
            <label className="form-check-label" for="rating4">
              4 <i className="bi bi-star-fill orange"></i>
            </label>
          </div>
          <div className="form-check pe-3">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="rating5"
              value={5}
              onClick={(e) => setRating(e.target.value)}
            />
            <label className="form-check-label" for="rating5">
              5 <i className="bi bi-star-fill orange"></i>
            </label>
          </div>
        </div>
      </div>

      {/* Sentiment Analysis */}
      <Sentiment
        status={'P/N'}
        weighting={'xx.xx'}
        rating={rating}
        visible={outputVisibility}
      />
    </div>
  );
}
