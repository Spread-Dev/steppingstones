import Nav from "./Components/Nav/Nav.jsx";
import Header from "./Components/Header/Header.jsx";
import Programs from "./Components/Programs/Programs.jsx";
import Tuition from "./Components/Tuition/Tuition.jsx";
import './App.scss';
import Enrollment from "./Components/Enrollment/Enrollment";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
      <>
        <div className="container">
            <Nav />
            <Header />
            <Programs />
            <Tuition />
            <Enrollment />
        </div>
        <Footer />
      </>
  );
}

export default App;
