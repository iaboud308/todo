import { BrowserRouter } from "react-router-dom";
import AppContextProvider from "./Context/AppContext";
import Main from "./Components/Main";



function App() {
  return (
    <div>
      <BrowserRouter>
        <AppContextProvider>
            <Main />
        </AppContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
