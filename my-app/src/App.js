import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar/Navbar'
import ItemList from './components/itemList/ItemList';

function App() {
  return (
    <div>
      <Navbar />
      <ItemList />
      <Outlet />
    </div>
  );
}

export default App;
