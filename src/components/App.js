import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login"
import Home from "../pages/Home"
import Projects from "../pages/Projects/Projects";
import NavLayout from "./layouts/NavLayout";

export default function App() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/projects" element={<NavLayout><Projects /></NavLayout>} />
        </Routes>
    </BrowserRouter>
}