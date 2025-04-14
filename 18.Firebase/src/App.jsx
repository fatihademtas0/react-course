import "./App.css";
import RouterConfig from "./config/RouterConfig.jsx";
import Navbar from "./components/Navbar.jsx";
import Auth from "./pages/Auth.jsx";
function App() {
    return (
        <div>
            <Navbar />
            <Auth />
            <RouterConfig />
        </div>
    );
}

export default App;
