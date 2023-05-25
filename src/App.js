
import './App.css';
import Recipeitem from './recipe-item/Recipeitem';

function App() {
  
  return (
    <div className="App">
    <Recipeitem
    recipe={{
      id:1,
      name:'Лагман',
    }}
    />
     <Recipeitem
    recipe={{
      id:1,
      name:'Плов',
    }}
    />
     <Recipeitem
    recipe={{
      id:1,
      name:'Манты',
    }}
    />
    </div>
  );
}

export default App;
