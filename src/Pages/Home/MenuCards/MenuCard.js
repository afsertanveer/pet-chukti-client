import React from 'react';
import { Link } from 'react-router-dom';

const MenuCard = ({menu}) => {
    const {_id,name,photoURL,description,price} =menu;
    return (
      <div className="card w-full lg:w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={photoURL} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl text-center">{name}</h2>
          <p>{description ? description.slice(0, 100) + "..." : description}</p>
          <p className="">Price: {price} Tk.</p>
          <div className="card-actions justify-end">
            <Link to={`/menu/${_id}`}>
              <button className="btn btn-primary">See Details</button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default MenuCard;