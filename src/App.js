import './App.css';
import image from './img/shopping.jpeg';
import imageTwo from './img/man.jpeg';
import { GroceryList } from './GroceryList';

function App() {
  return (
    <div className='app'>
      <div className='container'>
        <img src={ image } width="250px" alt="grocery"/>
      </div>
      <div className='container'>
        <h1>Grocery List</h1>
      </div>
      <GroceryList/>
      <div className='container'>
        <img src={ imageTwo } width="250px" alt="delivery"/>
      </div>
    </div>
  );
}

export default App;
