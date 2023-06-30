import './App.css';
import WithoutAuth from './components/WithoutAuth';
import WithMetamaskAuth from './components/WithMetamaskAuth';

function App() {
  return (
    <div className='App'>
      <h2>Decir SDK Demo</h2>
      <div className='container'>
        <WithMetamaskAuth />
        <WithoutAuth />
      </div>
    </div>
  );
}

export default App;
