"use client";
import React, { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas"; // Importing MealIdeas component
import itemsData from "./item.json";

export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");

    // Event handler for selecting an item
    const handleItemSelect = (item) => {
        // Clean up the item name by removing size and emoji
        const cleanedItemName = item.name.split(',')[0].trim().replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]|\uD83D[\uDE80-\uDEFF]|�[�-�])/g, '');
        setSelectedItemName(cleanedItemName);
    };

    return (
        <main className="flex bg-slate-900">
            <div className="mr-10">
                <h1 className="text-xl font-bold text-white">Shopping List</h1>
                <NewItem onAddItem={(newItem) => setItems((prevItems) => [...prevItems, newItem])} />
                <ItemList items={items} onItemSelect={handleItemSelect} />
            </div>
            <div>
               
                <MealIdeas ingredient={selectedItemName} /> 
            </div>
        </main>
    );
}