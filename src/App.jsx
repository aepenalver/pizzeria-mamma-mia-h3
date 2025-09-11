import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavMenu from "./components/Navbar";
import RegisterPage from "./components/RegisterPage";
import Login from "./components/Login";

function App() {
  return (
    <>
      <NavMenu />
      {/* <Home /> */}
      <RegisterPage />
      {/* <Login /> */}
      <Footer />
    </>
  );
}

export default App;
