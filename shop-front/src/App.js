import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";

function App() {
  return (
    <div className="App">
      <div>***</div>

      <Routes>
        {routes.map((e, i) => (
          <Route key={i} {...e} />
        ))}
        <Route path="*" element={<App />} />
      </Routes>
    </div>
  );
}

export default App;
