import Layout from './modules/Layout.tsx';
import { ProductsWrapper } from './components/ProductsWrapper/ProductsWrapper.tsx';


function App() {
  return (
    <>
      <div>
        <Layout>
         <ProductsWrapper/>
        </Layout>
      </div>
    </>
  );
}

export default App;
