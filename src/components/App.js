import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData); // this data will be passed down to the ShoppingList as a prop
  const [toggle, setToggle] = useState(false); // creates useState for the toggle button
  
  function handleToggle() { // function that handles the toggle button when it is clicked
    setToggle((toggle) => !toggle); // takes current state of toggle and changes to the oppsite value
  };

  const appClass = toggle ? "App dark" : "App light";
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleToggle}>Dark Mode</button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
