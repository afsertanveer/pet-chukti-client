import React from 'react';
import { toast } from 'react-hot-toast';
import useTitle from './../../hooks/useTitle';

const AddMenu = () => {
    useTitle('Add Menu')

    const handleAddMenu=event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const description = form.description.value;
        const price = form.price.value;
        if(isNaN(price)){
            alert('price is not a Number')
            return;
        }
        console.log(name,photoURL,description,price);
        const menu ={
            name,
            description,
            photoURL,
            price
        }
         fetch("https://pet-chukti-server.vercel.app/menu", {
           method: "POST",
           headers: {
             "content-type": "application/json",
           },
           body: JSON.stringify(menu),
         })
         .then(res=>res.json())
         .then(data=>{
            if (data.acknowledged) {
              toast.success('Menu Added Successfully')
              form.reset();
            }
         })
    }
    return (
      <div>
        <h2 className="text-3xl text-center font-bold"> Add a new Menu</h2>
        <form onSubmit={handleAddMenu}>
          <div className="grid grid-cols-1 gap-4 mb-4">
            <label>
              Name <br />
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered w-full"
                required
              />
            </label>
            <label>
              Description
              <br />
              <textarea
                name="description"
                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                rows="7"
                placeholder="Add Your description Here"
                required
              ></textarea>
            </label>
            <label>
              PhotoURL
              <br />
              <input
                type="text"
                name="photoURL"
                placeholder="Photourl of the food"
                className="input input-bordered w-full"
                required
              />
            </label>
            <label>
              Price <br />
              <input
                type="text"
                name="price"
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <input className="btn" type="submit" value="Add New Menu" />
        </form>
      </div>
    );
};

export default AddMenu;