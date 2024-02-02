import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/Home";
import Navigation from "./routes/navigation/Navigation";
import Authentication from "./routes/authentication/Authentication";

const Shopping = () => {
  return (
    <div>
      <h1>I'm shopping</h1>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shopping />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
