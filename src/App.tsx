import RandomIcon from "./components/random-icon";

import "./App.css";
import RandomIconProvider from "./components/random-icon/random-icon-context";

function App() {
  return (
    <RandomIconProvider>
      <RandomIcon />
    </RandomIconProvider>
  );
}

export default App;
