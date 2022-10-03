/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import classes from './Router.module.css'
import Indexpage from "./Pages/Indexpage/Indexpage";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Login from "./Pages/Login/Login";
import AddProduct from "./Pages/Products/AddProducts/AddProduct";
import Signup from "./Pages/Login/Signup";
import Home from "./Pages/Home/Home";
import Customers from './Pages/Customers/Customers'
import Settings from './Pages/Settings/Settings'
import Customer from './Pages/Customer/Customer'
import Suppliers from './Pages/Suppliers/Suppliers'
import ProtectRoute from "./Pages/ProtectedPage/ProtectedRoute";
import Product from "./Pages/Products/Product/Product";
import Products from "./Pages/Products/Products/Products";
import AddCustomer from "./Pages/Customers/AddCustomer/AddCustomer";
import Employees from "./Pages/Employees/Employees";
import Employee from "./Pages/Employees/Employee/Employee";
import EditCustomer from "./Pages/Customers/EditCustomer/EditCustomer";
import Supplier from './Pages/Supplier/Supplier'

const AppRouter = () => {
  const currentUser = JSON.parse(localStorage.getItem('userCred'));

  useEffect(() => {
    currentUser ? <Dashboard /> : <Login />
  }, [currentUser])

  return (
    <div className={classes.router}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Indexpage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route element={<ProtectRoute />}>
            <Route path="/dashboard" element={<Dashboard />} exact />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:productId" element={<Product />} />
            <Route path="/new-product" element={<AddProduct />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/new-customer" element={<AddCustomer />} />
            <Route path="/customers/:customerId" element={<Customer />} />
            <Route path="/edit-customer/:customerId" element={<EditCustomer />} />
            <Route path="/suppliers" element={<Suppliers />} />
            <Route path="/new-supplier" element={<Supplier />} />
            <Route path="/new-supplier/:supplierId" element={<Supplier />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/employees" element={<Employees />} />
            <Route path=":employeeId" element={<Employee />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
