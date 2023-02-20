import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={""} />
      </Routes>
    </div>
  );
}

export default App;
