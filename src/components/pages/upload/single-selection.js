import React from 'react';

const SingleSelection = ({ playlist }) => {
  return (
    <table className="single-selection-table">
      <thead>
        <tr>
          <th />
          <th>Name</th>
          <th>Time</th>
          <th>Single</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {playlist.map((track) => {
          return (
            <tr key={track.trackId}>
              <td>{track.playlistPosition}</td>
              <td>{track.name}</td>
              <td>{track.duration}</td>
              <td>
                <input type="checkbox" />
              </td>
              <td>{track.price}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SingleSelection;
