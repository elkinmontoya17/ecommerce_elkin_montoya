import './App.css';
import NavBar from './components/NavBar';
import ItemlistContainer from './components/ItemlistContainer';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom";



function App() {


  const onAdd = (count) =>{
    alert(`Llevas ${count} en el carrito`);
  }
  return (
  <> 
    <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/' element={<ItemlistContainer greeting={"Tienda orgánica"}/>} /> 
          <Route path='/categoria/:id' element={<ItemlistContainer greeting={"Tienda orgánica"}/>} />
          <Route path='/producto/:id' element={<ItemlistContainer greeting={"Tienda orgánica"}/>} />

          {/* <ItemCount initial={1} max={10} onAdd={onAdd}/>
          <ItemDetailContainer /> */}
        </Routes>
    </BrowserRouter>
  </>
  )  
}

export default App;
