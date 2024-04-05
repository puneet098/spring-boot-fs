import './App.css';
import Counter from './components/counter/Counter'

function App() {
  return (
    <div className="App">
      <Counter by={1}/>
      <Counter by={3}/>
      <Counter by={5}/>
    </div>
  );
}

export default App;
