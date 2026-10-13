import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function AppLayout() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />

            <main className="mx-auto w-full max-w-[1440px] min-w-0 flex-1">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}

export default AppLayout;