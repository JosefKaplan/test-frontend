//import logo from './logo.svg';
import './App.css';
import List from './components/List';

alert("I thought about the exercise and in the end, I did something completly different.")

function App() {

  return (
    <div className='App'>
      <div className='instructions'>
        <article>
          <h3>
            In this "app" you can add, edit and remove tags of your choice.
          </h3>
        </article>
      </div>
      <div className='Aplikace' id='Aplikace'>
        <h1>Test-Frontend</h1>
        <ul>
          <List />
        </ul>
      </div>
    </div>
    
  );
}


export default App;
