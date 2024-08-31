import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header/index.jsx";
import MenuHam from "./components/MenuHam/index.jsx";
import Sidebar from "./components/Sidebar/index.jsx";
import Rotas from "./routes.jsx";
import { GlobalCss } from "./styles.js";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Header />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Slide}
      />
      <Sidebar />
      <Rotas />
      <MenuHam />
    </BrowserRouter>
  );
}

export default App;
