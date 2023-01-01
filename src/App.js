import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Hotel from "./pages/hotel/Hotel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<Home />} />
          <Route path="hotels" >
            <Route index element={<List />} />
            <Route path=":id" element={<Hotel />} />
          </Route>
        </Route>
      </Routes>

    </BrowserRouter>

  );
}

export default App;
