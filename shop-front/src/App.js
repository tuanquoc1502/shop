import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { ChakraProvider } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import NotMath from "./containers/notMath";

function App() {
  return (
    <ChakraProvider>
      <ToastContainer />
      <div className="App">
        <Routes>
          {routes.map((e, i) => (
            <Route key={i} {...e} />
          ))}
          <Route path="*" element={<NotMath />} />
        </Routes>
      </div>
    </ChakraProvider>
  );
}

export default App;
