import { Route, Routes } from "react-router";
import Navigation from "./routes/navigation/Navigation";
import Home from "./routes/home/Home";

const Shop = () => <h1>IM THE SHOP PAGE🚀🚀🚀🚀</h1>;

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
