import React from 'react';

const ReviewRow = ({ review, handleDelete, handleEditReview }) => {
  const { menuName, details, _id } = review;
  return (
    <tr>
      <td>
        <label>
          <button onClick={() => handleDelete(_id)} className="btn btn-ghost">
            X
          </button>
        </label>
      </td>
      <td>
            <div className="text-center flex items-center justify-start">
             <p>{menuName}</p>
          </div>
        </td>
        <td>
          <div>
            <div className="font-bold"> {details}</div>
          </div>
      </td>
      <td>
        <button
          onClick={() => handleEditReview(_id)}
          className="btn btn-ghost btn-xs"
        >
          Edit
        </button>
      </td>
    </tr>
  );
};

export default ReviewRow;