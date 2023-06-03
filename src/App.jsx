import React from "react";
import Header from "./Components/layout/Header";
import HomPage from "./Components/Home/HomPage";
import Footer from "./Components/layout/Footer";
import { Route, Routes } from "react-router-dom";
import BLogPage from "./Components/Blog/BLogPage";
import AuthorPage from "./Components/Author/AuthorPage";

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomPage />} />
        <Route path="/Blogs/:slug" element={<BLogPage />} />
        <Route path="/Authors/:slug" element={<AuthorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
