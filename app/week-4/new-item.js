"use client"


import React, { useState } from 'react';



const NewItem = () => {
  
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('produce');

  
  const handleSubmit = (e) => {
    e.preventDefault();

    
    const item = { name, quantity, category };


    console.log(item);

    
    alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);

    
    setName('');
    setQuantity(1);
    setCategory('produce');
  };

  
  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
      
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          Name:
        </label>
        <input
          type="text"
          id="name"
          className="border rounded w-full py-2 px-3"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

     
      <div className="mb-4">
        <label htmlFor="quantity" className="block text-gray-700 font-bold mb-2">
          Quantity:
        </label>
        <input
          type="number"
          id="quantity"
          className="border rounded w-full py-2 px-3"
          min="1"
          max="99"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          required
        />
      </div>

      
      <div className="mb-4">
        <label htmlFor="category" className="block text-gray-700 font-bold mb-2">
          Category:
        </label>
        <select
          id="category"
          className="border rounded w-full py-2 px-3"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen-foods">Frozen Foods</option>
          <option value="canned-goods">Canned Goods</option>
          <option value="dry-goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>

      
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Add Item
      </button>
    </form>
  );
};

export default NewItem;
