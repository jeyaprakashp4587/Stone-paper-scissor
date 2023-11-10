import './App.css';
import Main from './components/Main';
import { Dataexport } from './Export';

function App() {
  return (
    <div className="App">
      <Dataexport>
          <Main />
        </Dataexport>
    </div>
  );
}
export default App;
