import "./styles.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export default function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}
