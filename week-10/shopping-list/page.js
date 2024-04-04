"use client";
import React, { useState, useEffect } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas';
import { useUserAuth } from '../_utils/auth-context';
import { getItems, addItem } from '../_services/shopping-list-service';

function Page() {
    const { user } = useUserAuth();
    const [items, setItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState('');

    useEffect(() => {
        async function fetchItems() {
            if (user) {
                const itemsFetched = await getItems(user.uid);
                setItems(itemsFetched);
            }
        }
        fetchItems();
    }, [user]);

    const onAddItem = async (item) => {
        if (user) {
            const newItemId = await addItem(user.uid, item);
            setItems(prevItems => [...prevItems, { ...item, id: newItemId }]);
        }
    };

    const onSelectItem = (item) => {
        const itemNameCleaned = item.name.split(',')[0].trim().replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]|\uD83D[\uDE80-\uDEFF]|�[�-�])/g, '');
        setSelectedItem(itemNameCleaned);
    };

    return (
        <main className="flex bg-slate-900">
            <div className="mr-10">
                <h1 className="text-xl font-bold text-white">Shopping List</h1>
                <NewItem onAddItem={onAddItem} />
                <ItemList items={items} onItemSelect={onSelectItem} />
            </div>
            <div>
                <MealIdeas ingredient={selectedItem} />
            </div>
        </main>
    );
}

export default Page;
