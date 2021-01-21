import "./App.css";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/homepage/HomePage";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
