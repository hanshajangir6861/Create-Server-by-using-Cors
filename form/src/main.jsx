import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import table from "./table.jsx"
import  {BrowserRouter,Route,}








ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<table/>}></>
  </Routes>
  </>
    <App />
)
