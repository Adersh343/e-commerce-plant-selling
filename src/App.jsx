import React from "react";
import Index from "./Index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthRoutes from "./routes/AuthRoutes";
import MainLayout from "./layouts/MainLayout";

// Browser router
// routes
// route

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path="/" element={<Index />} />
        </Route>

        <Route path="/auth/*" element={<AuthRoutes />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
