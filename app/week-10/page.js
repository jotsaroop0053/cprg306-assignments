"use client";
import React, { useState, useEffect } from "react";
import { useUserAuth } from "./_utils/auth-context";
import { getItems, addItem } from "./_services/shopping-list-service"; // Add this import

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    const [items, setItems] = useState([]);

    useEffect(() => {
        if (user) {
            loadItems();
        }
    }, [user]); // Only call loadItems when user changes

    const loadItems = async () => {
        const userItems = await getItems(user.uid);
        setItems(userItems);
    };

    const handleAddItem = async (newItem) => {
        const newItemId = await addItem(user.uid, newItem);
        setItems([...items, { id: newItemId, ...newItem }]);
    };

    const handleSignIn = async () => {
        await gitHubSignIn();
    };

    const handleSignOut = async () => {
        await firebaseSignOut();
    };

    return (
        <div className="bg-slate-900 text-white"> 
            <main className="flex bg-slate-900 text-white ">
                <div className="mr-10">
                    <h1 className="text-xl font-bold text-white">Welcome to Your Application</h1>
                    {user ? ( 
                        <>
                            <p className="text-white">Welcome, {user.displayName} ({user.email})</p>
                            <button onClick={handleSignOut} className="flex">Logout</button>
                            <a href="/week-8/shopping-list" className="text-white">Go to Shopping List</a>
                        </>
                    ) : ( 
                        <button onClick={handleSignIn} className="text-white">Login with GitHub</button>
                    )}
                </div>
            </main>
        </div>
    );
}
