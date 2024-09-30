import Router from './routes';
import Context from './sections/auth/auth-context';

function App() {
  return (
    <Context>
      <Router />
    </Context>
  );
}

export default App;