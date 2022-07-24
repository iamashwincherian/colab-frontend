import { Navigate } from "react-router-dom";

export default function Home() {
    return (
        // <div>Home</div>
        <Navigate to={"/login"} replace />
    )
}