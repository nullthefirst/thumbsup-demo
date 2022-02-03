import React from 'react';
import Divider from './Divider';

export default function Feedback() {
  return (
    <div>
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
          rows="3"></textarea>
      </div>
    </div>
  );
}
