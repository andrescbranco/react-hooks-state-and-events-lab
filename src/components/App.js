import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  const [isDark, setIsDark] = useState(false)

  const appClass = !isDark ? "App light" : 'App dark'

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  function handleDarkMode(){
    setIsDark(!isDark)
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkMode}>
          {isDark ? 'Light mode' : 'Dark mode'}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
