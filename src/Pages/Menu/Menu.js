import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MenuItem from './../Shared/MenuItem/MenuItem';

const Menu = () => {
    const menuItems = useLoaderData();
    return (
      <div>
        <p className="text-2xl font-bold text-orange-500 text-center">
          Menu
        </p>
        <div
          className="mt-12 grid gap-6 grid-cols-1
         lg:grid-cols-3   lg:mx-auto"
        >
          {menuItems.map((menu) => (
            <MenuItem key={menu._id} menu={menu}></MenuItem>
          ))}
        </div>
      </div>
    );
};

export default Menu;