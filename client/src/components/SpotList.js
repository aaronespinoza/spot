import React from 'react';

const SpotList = ({ spots }) => {
  if (!spots.length) {
    return <h3>No Spots Yet</h3>;
  }

  return (
    <div>
      <div className="flex-row justify-space-between my-4">
        {spots &&
          spots.map((spot) => (
            <div key={spot._id} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0">
                  {spot.title} <br />
                  <span className="text-white" style={{ fontSize: '1rem' }}>
                    Description: {spot.description}
                  </span>
                </h4>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SpotList;