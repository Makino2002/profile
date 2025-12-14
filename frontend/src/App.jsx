import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Health from "./pages/Health/Health.jsx";
import Layout from "./components/Layout/Layout.jsx";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/health" element={<Health />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
