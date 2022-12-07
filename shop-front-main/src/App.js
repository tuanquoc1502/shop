import './index.css';
import { routes } from './routes';
import { Route, Routes } from 'react-router-dom';
import NotMath from './app/components/notMath';

function App() {
  return (
    <div className="App">
      <Routes>
        {routes.map((e, i) => (
          <Route key={i} {...e} />
        ))}
        <Route path="*" element={<NotMath />} />
      </Routes>
    </div>
  );
}

export default App;
