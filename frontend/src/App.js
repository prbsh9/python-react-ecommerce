import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import logout from "./components/logout";
// import SearchBox from "./components/SearchBox";
import LoginScreen from "./screens/LoginScreen";
import ProductScreen from "./screens/ProductScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import HomeScreen from "./screens/HomeScreen";

function App() {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    // Send GET request to your Django API
    axios
      .get("http://localhost:8000/api/products/?format=json")
      .then((response) => {
        setProductsData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <div className="main-content">
          <Routes>
            <Route
              path="/"
              element={<HomeScreen productsData={productsData} />}
            />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/logout" action={logout} />

            <Route path="/register" element={<RegisterScreen />} />

            <Route path="/profile" element={<ProfileScreen />} />
            <Route
              path="/products/:id"
              element={<ProductScreen productsData={productsData} />}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
