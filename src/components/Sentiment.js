import React from 'react';
import Divider from './Divider';

export default function Sentiment() {
  return (
    <div>
      <Divider />

      {/* <!--    sentiment table    --> */}
      <table className="table table-striped">
        <thead>
          <th className="table-info w-25">
            <h4>Status</h4>
          </th>
          <th className="table-info w-25">
            <h4>Weighting</h4>
          </th>
          <th className="table-info w-25">
            <h4>Rating</h4>
          </th>
        </thead>
        <tbody>
          <td className="table-primary w-25">
            <p className="ps-2">Positive / Negative</p>
          </td>
          <td className="table-primary w-25">
            <p className="ps-2">XX.XX %</p>
          </td>
          <td className="table-primary w-25">
            <p className="ps-2">X star</p>
          </td>
        </tbody>
      </table>
    </div>
  );
}
