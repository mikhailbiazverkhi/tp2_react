import { useState } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Header from "./components/Header";
import ResulsList from "./components/ResulsList";
import CoffeeDetails from "./components/CoffeeDetails";
import AjouterCoffee from "./components/AjouterCoffee";
import Footer from "./components/Footer";
import CategoryDetails from "./components/CategoryDetails";
import ProductDetails from "./components/ProductDetails";
import Home from "./pages/Home";
import Coffees from "./pages/Coffees";
import Products from "./pages/Products";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Container>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/coffees/" element={<Coffees />} />
            <Route path="/products/" element={<Products />} />
            <Route path="/coffee-details/:id" element={<CoffeeDetails />} />
            <Route path="/category-details/:id" element={<CategoryDetails />} />
            <Route path="/product-details/:id" element={<ProductDetails />} />
            <Route path="/ajouter/" element={<AjouterCoffee />} />
          </Routes>
          <Footer />
        </Container>
      </QueryClientProvider>
    </BrowserRouter>
  );
}
export default App;
