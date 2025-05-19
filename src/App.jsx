import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./Pages/Home";

function App() {
  

  return (
    <div className="w-full h-auto">
      <Header />
      <Home/>
      <Footer />
    </div>
  );
}

export default App;
// bg-[#E5E5E5]