import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import SingleCar from "./pages/SingleCar";
import Cars from "./pages/Cars";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home } />
        <Route exact path="/cars/" component={Cars} />
        <Route exact path="/cars/:v1" component={SingleCar} />

        <Route path="*" component={Error } />
      </Switch>
    </>
  );
}

export default App;
