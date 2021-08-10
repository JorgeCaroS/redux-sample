import logo from './logo.svg';
import './App.css';
import store from "./store/index";
import { connect } from "react-redux";
import { addArticle, deleteArticle } from './actions';

function App() {

 

  function handleAdd(){
    store.dispatch(addArticle({title:Math.random(1,100)}));
    console.log(store.getState());
  }


  function handleDelete(){
    store.dispatch(deleteArticle());
    console.log(store.getState());
  }



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <button onClick={handleAdd}>Add Item</button>
          <br></br>
          <button onClick={handleDelete}>Delete Item</button>
        </div>
        
      </header>
    </div>
  );
}

export default  App ;
