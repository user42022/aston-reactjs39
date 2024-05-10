import './App.css';
import Form from './components/Form/Form';

function App() {
  return (
    <div>
      <Form addName={console.log} componentName={'Form'}/>
    </div>
  );
}

export default App;
