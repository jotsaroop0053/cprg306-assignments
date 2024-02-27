"use-client";

import React, { useState } from 'react';
import Item from './item';
import items from './item.json';

const ItemList = () => {
    const [sortBy, setSortBy] = useState('name'); 
    
    const sortedItems = [...items].sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortBy === 'category') {
        return a.category.localeCompare(b.category);
      }
      
      return 0;
    });
  
    
    const handleSortByName = () => setSortBy('name');
    const handleSortByCategory = () => setSortBy('category');
  
    return (
      <div>
        <button
          onClick={handleSortByName}
          style={{ backgroundColor: sortBy === 'name' ? 'green' : 'white' }}
        >
          Sort by Name
        </button>
        <button
          onClick={handleSortByCategory}
          style={{ backgroundColor: sortBy === 'category' ? 'green' : 'white' }}
        >
          Sort by Category
        </button>
  
       
        <ul>
          {sortedItems.map(item => (
            <Item key={item.name} name={item.name} quantity={item.quantity} category={item.category} />
          ))}
        </ul>
      </div>
    );
};

export default ItemList;
