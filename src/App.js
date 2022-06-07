import { useState, useEffect } from 'react/cjs/react.production.min';
import './App.css';
import SignIn from './Auth/SignIn';
import SignUp from './Auth/SignUp';
import InventoryForm from './InventoryForm/InventoryForm';
import InventoryItem from './InventoryItem/InventoryItem';
import InventoryList from './InventoryList/InventoryList';



function App() {
  return (
    <div className="App">
      <header> Add Hamberder Menu</header>
      <SignIn/>
      <SignUp/>
      <InventoryForm/>
      <InventoryList/>
      <InventoryItem/>
    </div>
  );
}

export default App;
