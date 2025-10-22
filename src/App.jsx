import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./comonents/Navbar";
import Footer from "./comonents/Footer";
import ProtectedRoute from "./comonents/ProtectedRoute";

import Home from "./pages/Home";
import ToyDetails from "./pages/ToyDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MyProfile from "./pages/MyProfile";
import SellerDashboard from "./pages/SellerDashboard";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/toy/:toyId" element={
          <ProtectedRoute><ToyDetails /></ProtectedRoute>
        } />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/my-profile" element={
          <ProtectedRoute><MyProfile /></ProtectedRoute>
        } /> */}
        {/* <Route path="/seller-dashboard" element={
          <ProtectedRoute><SellerDashboard /></ProtectedRoute>
        } />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
