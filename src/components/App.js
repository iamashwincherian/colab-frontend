import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login";
import ForgotPassword from "../pages/auth/ForgotPassword";
import Signup from "../pages/auth/Signup";
import Home from "../pages/Home";
import Projects from "../pages/Projects/Projects";
import ProjectItem from "../pages/Projects/ProjectItem";
import NavLayout from "./layouts/NavLayout";
import CreateOrganisation from "../pages/create-organisation";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/create-org" element={<CreateOrganisation />} />
                <Route
                    path="/projects"
                    element={
                        <NavLayout>
                            <Projects />
                        </NavLayout>
                    }
                />
                <Route
                    path="/projects/:projectName"
                    element={
                        <NavLayout>
                            <ProjectItem />
                        </NavLayout>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}
