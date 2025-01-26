import React from 'react'
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from '../pages/home';
import RegistrationLogin from '../pages/UserRegistration/Login';
import LoanRequestForm from '../pages/loanForm';
import CalculatorPage from '../pages/calculatorPage';


function AppRouter() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/loanForm" element={<LoanRequestForm/>}/>
        <Route path="/calculatorPage" element={<CalculatorPage/>}/>
        <Route path='login' element={<RegistrationLogin/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default AppRouter