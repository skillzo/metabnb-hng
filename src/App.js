import { Route, Routes } from "react-router-dom";
import { ContextProvider } from "./authContext";
import Home from "./Pages/Home";
import Place from "./Pages/Place";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Modal from "./Components/Modal";

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/places-to-stay" element={<Place />} />
        </Routes>
        <Modal />

        <Footer />
      </div>
    </ContextProvider>
  );
}

export default App;
