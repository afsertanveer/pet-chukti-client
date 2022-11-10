import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MenuCard from './MenuCard';

const MenuCards = () => {
    const [menuItems,setMenuItems] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        const number=3;
        fetch(`http://localhost:5000/menu?number=${number}`)
        .then(res=>res.json())
        .then(data=>setMenuItems(data));
    },[])

    
    return (
      <div>
        <p className="text-2xl font-bold text-orange-500 text-center">
          Latest Menu
        </p>
        <div
          className="mt-12 grid gap-6 grid-cols-1
         lg:grid-cols-3   lg:mx-auto"
        >
          {menuItems.map((menu) => (
            <MenuCard key={menu._id} menu={menu}></MenuCard>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to='/menu'>
            <button
              className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
            >
              See ALL
            </button>
          </Link>
        </div>
      </div>
    );
};

export default MenuCards;