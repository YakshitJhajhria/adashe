import "./App.css";
import Buytoken from "./components/Buytoken";
import Faq from "./components/Faq";
import Projectadashe from "./components/Projectadashe";
import Smartcontract from "./components/Smartcontract";
import Navbar from "./components/common/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Projectadashe />
      <Smartcontract />
      <Faq />
      <Buytoken />
    </div>
  );
}

export default App;
