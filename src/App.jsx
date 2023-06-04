import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/layout/Header";
import HomPage from "./Components/Home/HomPage";
import Footer from "./Components/layout/Footer";
import BLogPage from "./Components/Blog/BLogPage";
import AuthorPage from "./Components/Author/AuthorPage";
import ScrollToTop from "./Components/shared/ScrollToTop";

export default function App() {
  return (
    <div>
      <Header />
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<HomPage />} />
        <Route path="/Blogs/:slug" element={<BLogPage />} />
        <Route path="/Authors/:slug" element={<AuthorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
