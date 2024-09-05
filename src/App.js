import "./App.css";
import Teams from "./components/Teams";
import { HeaderModule } from "./components/HeaderModule";

function App() {
  return (
    <div className="containerModule">
      <HeaderModule/>
      <Teams/>
    </div>
  );
}

export default App;
