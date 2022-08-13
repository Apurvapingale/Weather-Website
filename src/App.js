import './App.css';
import Card from './Components/Card'
import Search from './Components/Search/Search';

function App() {
  return ( 
    <div className="container">
      <h1 className='name'>Weather Update</h1>
      <Search/>
    </div>
  );
}

export default App;
