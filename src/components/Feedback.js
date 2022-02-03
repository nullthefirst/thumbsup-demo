import React, { useState } from 'react';
import axios from 'axios';
import MonkeyLearn from 'monkeylearn';
import Divider from './Divider';
import SentimentOutput from './Sentiment';

export default function Feedback(props) {
  // general
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);
  const [outputVisibility, setOutputVisibility] = useState(false);

  // feedback extraction
  const [dataOutput, setDataOutput] = useState([]);
  const [status, setStatus] = useState('');
  const [weighting, setWeighting] = useState('');

  // sentiment analysis
  const getSentiment = () => {
    let model_id = process.env.REACT_APP_MONKEYLEARN_MODEL_ID;

    fetch(`https://api.monkeylearn.com/v3/classifiers/${model_id}/classify/`, {
      method: 'POST',
      body: JSON.stringify({
        data: [`${feedback}`],
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: `Token ${process.env.REACT_APP_MONKEYLEARN_API_KEY}`,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        let sentiment = json[0]['classifications'];
        for (const [key, value] of Object.entries(sentiment[0])) {
          if (key === 'tag_name') {
            setStatus(value);
          }

          if (key === 'confidence') {
            let weight = value * 100;
            setWeighting(weight);
          }
        }
      })
      .catch((err) => console.error(err));

    // let data = [`${feedback}`];

    // ml.classifiers.classify(model_id, data).then((res) => {
    //   // console.log(res.body);
    //   let sentiment = res.body[0]['classifications'];
    //   setStatus(sentiment['tag_name']);
    //   let confidence = sentiment['confidence'] * 100;
    //   setWeighting(confidence);
    // });
  };

  // component
  return (
    <div>
      <Divider />

      {/* Buttons */}
      <div className="mt-2 d-flex justify-content-between">
        <button
          className="btn btn-warning btn-md"
          onClick={() => {
            getSentiment();
            setOutputVisibility(true);
          }}>
          Review <i className="bi bi-box-arrow-in-right"></i>
        </button>
        <button
          className="btn btn-danger btn-md"
          onClick={() => setOutputVisibility(false)}>
          Close <i className="bi bi-x-circle-fill"></i>
        </button>
      </div>

      <Divider />

      {/* Feedback Core */}
      <div className="mt-2">
        <h4>
          <label htmlFor="feedbackForm" className="form-label teal">
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
            <label className="form-check-label" htmlFor="rating1">
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
            <label className="form-check-label" htmlFor="rating2">
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
            <label className="form-check-label" htmlFor="rating3">
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
            <label className="form-check-label" htmlFor="rating4">
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
            <label className="form-check-label" htmlFor="rating5">
              5 <i className="bi bi-star-fill orange"></i>
            </label>
          </div>
        </div>
      </div>

      {/* Sentiment Analysis */}
      <SentimentOutput
        status={status}
        weighting={weighting}
        rating={rating}
        visible={outputVisibility}
      />
    </div>
  );
}
