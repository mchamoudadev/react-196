import './App.css';
import List from './components/List';

function App() {

  let style = {
    backgroundColor: "skyblue",
    padding: 30,
    borderRadius: 20,
    margin: 20,
    color: "white",
  };

  return (
    <div className="App" style={style}>
      <List />
    </div>
  );
}

export default App;
