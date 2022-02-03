import React from 'react';
import Divider from './Divider';

export default function SentimentOutput(props) {
  return (
    <div>
      <Divider />

      {/* Output Display */}
      {props.visible ? (
        <table className="table table-striped">
          <thead>
            <th className="table-info w-25">
              <h4>Status</h4>
            </th>
            <th className="table-info w-25">
              <h4>Confidence</h4>
            </th>
            <th className="table-info w-25">
              <h4>Rating</h4>
            </th>
          </thead>
          <tbody>
            <td className="table-primary w-25">
              <p className="ps-2">{props.status}</p>
            </td>
            <td className="table-primary w-25">
              <p className="ps-2">{props.weighting} %</p>
            </td>
            <td className="table-primary w-25">
              <p className="ps-2">{props.rating} star</p>
            </td>
          </tbody>
        </table>
      ) : (
        <></>
      )}
    </div>
  );
}
