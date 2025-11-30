import React, { useState } from "react";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  return (
    <Layout selectedPage={page} onSetPage={setPage}>
      {page === "home" && <HomePage />}
      {page === "contact" && <ContactPage />}

    </Layout>
  );
}

export default App;
