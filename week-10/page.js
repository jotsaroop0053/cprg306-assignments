"use client";
import React, { useState } from "react";
import { useUserAuth } from "./_utils/auth-context";
export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    
    
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
                            <a href="/week-10/shopping-list" className="text-white">Go to Shopping List</a>
                        </>
                    ) : ( 
                        <button onClick={handleSignIn} className="text-white">Login with GitHub</button>
                    )}
                </div>
            </main>
        </div>
    );
}