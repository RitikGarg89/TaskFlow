import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

function ProtectedRoute() {
    const { isAuthenticated, isInitialized } = useSelector(
        (state) => state.auth
    );
    const location = useLocation();

    if (!isInitialized) {
        return (
            <div className="flex min-h-[calc(100vh-5rem)] w-full items-center justify-center p-6">
                <div className="flex flex-col items-center gap-4 text-center">
                    <div className="flex h-12 w-12 animate-pulse items-center justify-center rounded-xl bg-blue-600 text-2xl font-bold text-white shadow-lg shadow-blue-600/25">
                        ✓
                    </div>
                    <div className="text-sm font-medium text-slate-500">
                        Verifying session...
                    </div>
                </div>
            </div>
        );
    }

    if (!isAuthenticated) {
        return (
            <Navigate
                to="/login"
                replace
                state={{ from: location.pathname }}
            />
        );
    }

    return <Outlet />;
}

export default ProtectedRoute;

