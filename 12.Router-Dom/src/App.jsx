import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";
import EmployeeAbout from "./Pages/EmployeeAbout";
import CompanyAbout from "./Pages/CompanyAbout";
import Header from "./components/Header";
import ProductDetails from "./Pages/ProductDetails";

function App() {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <Routes>
                    <Route path='/' element={<Home />} />

                    <Route path='/about' element={<About />}>
                        <Route path='employee' element={<EmployeeAbout />} />
                        <Route path='company' element={<CompanyAbout />} />
                    </Route>

                    <Route path='/products' element={<Products />} />
                    <Route
                        path='/product-details/:id'
                        element={<ProductDetails />}
                    />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
