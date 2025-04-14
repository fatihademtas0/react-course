import "./App.css";
import RouterConfig from "./config/RouterConfig.jsx";
import Navbar from "./components/Navbar.jsx";
import Auth from "./pages/Auth.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <div>
            <Navbar />
            <RouterConfig />
            <ToastContainer position='top-right' autoClose={4000} />
        </div>
    );
}

export default App;
