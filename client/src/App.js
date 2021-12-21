import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { DataProvider } from "./GlobalState";
import { Header } from "./components/header/Header";
import Pages from "./components/mainpages/Pages";

function App() {
  return (
    <DataProvider>
      <Router>
        <div className="App">
          <Header />
          <Pages />
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
