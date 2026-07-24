import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Solar from "./pages/Solar";
import Tools from "./pages/Tools";
import Brands from "./pages/Brands";
import Contact from "./pages/Contact";
import Quote from "./pages/Quote";
import Careers from "./pages/Careers";
import StoreLocator from "./pages/StoreLocator";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Warranty from "./pages/Warranty";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="solar" element={<Solar />} />
          <Route path="tools" element={<Tools />} />
          <Route path="brands" element={<Brands />} />
          <Route path="contact" element={<Contact />} />
          <Route path="quote" element={<Quote />} />
          <Route path="careers" element={<Careers />} />
          <Route path="store-locator" element={<StoreLocator />} />
          <Route path="terms" element={<Terms />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="warranty" element={<Warranty />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
