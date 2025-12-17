import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Health from "./pages/Health/Health.jsx";
import CV from "./pages/CV/CV.jsx";
import Layout from "./components/Layout/Layout.jsx";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/health" element={<Health />} />
          <Route path="/cv" element={<CV />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
