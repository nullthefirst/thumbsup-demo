import React from 'react';
import Divider from './Divider';

export default function Rating() {
  return (
    <div>
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
            />
            <label className="form-check-label" for="rating5">
              5 <i className="bi bi-star-fill orange"></i>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
