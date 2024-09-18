import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs"
import Contact from "./pages/Contact";
import NoPage from "./Pages/NoPage";
import { useState } from "react";

export default function App() {
  const [access, setAccess] = useState(true);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element= {access?<Blogs />:<NoPage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
