import React from "react"
import { Route, Routes } from "react-router-dom"
import AuthLayout from "./components/auth/layout"
import AuthLogin from "./pages/auth/login"
import AuthRegister from "./pages/auth/register"
import AdminLayout from "./components/admin-view/Layout"
import AdminDashboard from "./pages/admin-view/dashboard"
import AdminProducts from "./pages/admin-view/products"
import AdminOrders from "./pages/admin-view/orders"
import AdminFeaturs from "./pages/admin-view/featurs"
function App() {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <h1>Header Component</h1>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="featurs" element={<AdminFeaturs />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
