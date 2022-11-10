import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Menu = () => {
    const menuItems = useLoaderData();
    return (
        <div>
            <h2>This is Menu Page</h2>
        </div>
    );
};

export default Menu;