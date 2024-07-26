import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Exams from "./pages/Screen2";
import Instructions from "./pages/Instructions";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="/tests"
          element={
            <Layout>
              <Exams />
            </Layout>
          }
        />
        <Route
          path="/tests/:id"
          element={
            <Layout>
              <Instructions />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
