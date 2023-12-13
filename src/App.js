import Faq from "./components/Faq";
import Projectadashe from "./components/Projectadashe";
import Smartcontract from "./components/Smartcontract";
import Layout from "./components/common/Layout";

function App() {
  return (
    <div>
      <Layout>
        <Projectadashe />
        <Smartcontract />
        <Faq />
      </Layout>
    </div>
  );
}

export default App;
