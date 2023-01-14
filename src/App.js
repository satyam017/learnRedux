
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import HomeContainer from './containers/HomeContainer';
import Home from './components/Home';
import ShowItem from './components/ShowItem';

function App() {
  return (
    <div className="App">
      <ShowItem />
     <Home/>

    </div>
  );
}

export default App;
 