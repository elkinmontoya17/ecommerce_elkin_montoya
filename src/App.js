import './App.css';
import NavBar from './components/NavBar';
import ItemlistContainer from './components/ItemlistContainer';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';



function App() {


  const onAdd = (count) =>{
    alert(`Llevas ${count} en el carrito`);
  }
  return (
  <> 
    <NavBar />
    <ItemlistContainer greeting={"Titulo provisional"}/>
    <ItemCount initial={1} max={10} onAdd={onAdd}/>
    <ItemDetailContainer />
  </>
  )  
}

export default App;
