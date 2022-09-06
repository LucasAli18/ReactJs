//import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/Nav/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';


function App() {
  const productos = [ {id:1,nombre:"Cerveza 1", precio:100},{id:2,nombre:"Cerveza 2", precio:200},{id:3,nombre:"Cerveza 3", precio:300}];
  
  return (
    <div>
      <Header/>
      <ItemListContainer greeting= {productos} />
      <ItemCount stock={5} initial={1} onAdd={0} />
    </div>
  );
}

export default App;
