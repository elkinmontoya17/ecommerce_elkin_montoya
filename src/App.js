import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemlistContainer from './components/ItemlistContainer';


function App() {
  return (
  <> 
    <NavBar />
    <ItemlistContainer greeting={"Titulo provisional"}/>
  </>
  )  
}

export default App;
