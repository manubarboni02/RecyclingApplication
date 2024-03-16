import {BrowserRouter, Navigate, Route, Routes, } from "react-router-dom";
import MainPage from "./pages/MainPage.tsx";
import AuthenticationPage from "./pages/AuthenticationPage.tsx";
function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Navigate to="/login" /> }/>
            <Route
                path="/login"
                element={<AuthenticationPage />}
            />
            <Route
                path="/register"
                element={<AuthenticationPage />}
            />
            <Route
                path="/mainpage"
                element={<MainPage />}
            />
            <Route
                path="*"
                element={<Navigate to="/" />}
            />
        </Routes>
      </BrowserRouter>
  )
}

export default App
