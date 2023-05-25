
import './App.css';
import Header from './Components/Header/Header';
import Recipeitem from './Components/recipe-item/Recipeitem';

function App() {

  return (

    <div className="App">
      <Header/>
    <Recipeitem
    recipe={{
      id:1,
      name:'Лагман',
    }}
    />
     <Recipeitem
    recipe={{
      id:2,
      name:'Плов',
    }}
    />
     <Recipeitem
    recipe={{
      id:3,
      name:'Манты',
    }}
    />
    </div>
  );
}

export default App;
