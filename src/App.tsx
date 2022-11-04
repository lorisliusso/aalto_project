import Home from './pages/Home';
import { Provider } from './context/Context';

const App = (): JSX.Element => {

  return (

    <Provider>

      <Home />

    </Provider>
  );

}

export default App;
