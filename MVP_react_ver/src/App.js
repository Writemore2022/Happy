import './App.css';
import Header from './components/Header.js';
import { ReactComponent as totalMap } from './images/totalmap.svg';
import BottomMenu from './components/BottomMenu.js';

function App() {
  return (
    <div className="App">
      <Header />
      <img src="./images/totalmap.svg" alt="totalmap" />
      <BottomMenu />
    </div>
  );
}

export default App;
