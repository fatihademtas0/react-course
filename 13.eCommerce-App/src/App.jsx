import "./App.css";
import PageContainer from "./container/PageContainer";
import Header from "./components/Header";
import RouterConfig from "./config/RouterConfig";
import Loading from "./components/Loading";
import { useSelector } from "react-redux";
import DrawerComponent from "./components/DrawerComponent";

function App() {
    const { products } = useSelector((store) => store.basket);

    return (
        <div>
            <PageContainer>
                <Loading />
                <Header />
                <DrawerComponent />
                <RouterConfig />
            </PageContainer>
        </div>
    );
}

export default App;
