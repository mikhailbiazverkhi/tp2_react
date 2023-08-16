import { useState } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Header from "./Header";
import ResulsList from "./ResulsList";
import CoffeeDetails from "./CoffeeDetails";
import AjouterCoffee from "./AjouterCoffee";
import Footer from "./Footer";
import CategoryDetails from "./CategoryDetails";
import ProductDetails from "./ProductDetails";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

function App() {
  const [type, setType] = useState("product-categories");

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Container>
          <Header changeType={setType} />
          <Routes>
            <Route path="/coffee-details/:id" element={<CoffeeDetails />} />
            <Route path="/category-details/:id" element={<CategoryDetails />} />
            <Route path="/product-details/:id" element={<ProductDetails />} />
            <Route path="/" element={<ResulsList type={type} />} />
            <Route path="/ajouter/" element={<AjouterCoffee />} />
          </Routes>
          <Footer />
        </Container>
      </QueryClientProvider>
    </BrowserRouter>
  );
}
export default App;
