import React, { useState, useEffect } from "react";
import { useUserAuth } from "./_utils/auth-context";
import { getItems, addItem } from "./_services/shopping-list-service"; // Import getItems and addItem functions

const ShoppingList = () => {
    const { user } = useUserAuth();
    const [items, setItems] = useState([]);

    
    const loadItems = async () => {
        try {
            if (user) {
                const userItems = await getItems(user.uid);
                setItems(userItems); 
            }
        } catch (error) {
            console.error("Error loading items:", error);
            
        }
    };

    
    useEffect(() => {
        loadItems(); 
    }, []); 

    
    const handleAddItem = async (newItem) => {
        try {
            if (user) {
                const newItemId = await addItem(user.uid, newItem); 
                newItem.id = newItemId;
                setItems([...items, newItem]);
            }
        } catch (error) {
            console.error("Error adding item:", error);
            
        }
    };

    

    return (
        <div>
            
        </div>
    );
}

export default ShoppingList;
