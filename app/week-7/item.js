import React from 'react';

const Item = ({ name, quantity, category, onSelect }) => {
    return (
        <li className="p-2 m-4 bg-slate-900 max-w-sm hover:bg-orange-800 cursor-pointer" onClick={() => onSelect({name, quantity,category})}>
            <h2 className="text-xl font-bold text-white">{name}</h2>
            <div className="text-sm text-white">Buy {quantity} in {category}</div>
        </li>
    );
};

export default Item;
