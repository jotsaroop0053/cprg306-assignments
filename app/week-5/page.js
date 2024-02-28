
import ItemList from "./item-list";
import React from "react";

export default function Page() {
    return (
      <main className=" bg-slate-950 text-white flex flex-col">
        <div>
        <h2 className="text-3xl font-bold m-2">Shopping List</h2>
        
        </div>
        <ItemList/>
      </main>
    );
  }