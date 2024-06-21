import logo from './logo.svg';
import './App.css';
import Apple from './Apple';
import Pear from './Pear';
import Bag from './Bag';

function Header(){
  return <h1>Hello Adam</h1>
}

function App() {
  return (
    <div>
      <Bag>
        <Apple/>
        <Pear/>
      </Bag>
    </div>
  )
  
}

export default App;
