import Weather from "./containers/Weather"
import Music from "./containers/Music";
import { GlobalStyles } from "./styledComponents/GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Weather />
      <Music />
    </div>
  );
}

export default App;
