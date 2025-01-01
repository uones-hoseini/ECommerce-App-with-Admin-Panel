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
import ShoppingLayout from "./pages/shopping-view/layout"
import NotFound from "./pages/not-found"
import ShoppingHome from "./pages/shopping-view/home"
import ShoppingListing from "./pages/shopping-view/listing"
import ShoppingCheckout from "./pages/shopping-view/checkout"
import ShoppingAccount from "./pages/shopping-view/account"
import CheckAuth from "./components/common/check-auth"
import UnAuthPage from "./pages/unauth-page"
import { useSelector } from "react-redux"
function App() {


	const {user,isAuthenticated}=useSelector(state=>state.auth)

	return (
		<div className="flex flex-col overflow-hidden bg-white">
			<Routes>
				<Route
					path="/auth"
					element={
						<CheckAuth
							isAuthenticated={isAuthenticated}
							user={user}>
							<AuthLayout />
						</CheckAuth>
					}>
					<Route
						path="login"
						element={<AuthLogin />}
					/>
					<Route
						path="register"
						element={<AuthRegister />}
					/>
				</Route>
				<Route
					path="/admin"
					element={
						<CheckAuth
							isAuthenticated={isAuthenticated}
							user={user}>
							<AdminLayout />
						</CheckAuth>
					}>
					<Route
						path="dashboard"
						element={<AdminDashboard />}
					/>
					<Route
						path="products"
						element={<AdminProducts />}
					/>
					<Route
						path="orders"
						element={<AdminOrders />}
					/>
					<Route
						path="featurs"
						element={<AdminFeaturs />}
					/>
				</Route>
				<Route
					path="/shop"
					element={
						<CheckAuth
							isAuthenticated={isAuthenticated}
							user={user}>
							<ShoppingLayout />
						</CheckAuth>
					}>
					<Route
						path="home"
						element={<ShoppingHome />}
					/>
					<Route
						path="listing"
						element={<ShoppingListing />}
					/>
					<Route
						path="chechout"
						element={<ShoppingCheckout />}
					/>
					<Route
						path="account"
						element={<ShoppingAccount />}
					/>
				</Route>
				<Route
					path="unauth-page"
					element={<UnAuthPage />}
				/>

				<Route
					path="*"
					element={<NotFound />}
				/>
			</Routes>
		</div>
	)
}

export default App
