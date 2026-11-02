import { useState, useRef, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Features/AuthSlice";
import { clearTasks } from "../Features/TaskSlice";
import api, { clearToken } from "../Utils/api";

function Navbar() {
    const { isAuthenticated, user } = useSelector((state) => state.auth);

    const [profileOpen, setProfileOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const profileRef = useRef(null);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Close profile dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setProfileOpen(false);
            }
        };

        if (profileOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [profileOpen]);

    const handleLogout = async () => {
        setProfileOpen(false);
        setMobileMenuOpen(false);
        try {
            await api.post("/auth/logout");
        } catch {
            // Proceed with local logout regardless of network
        }
        clearToken();
        dispatch(logout());
        dispatch(clearTasks());
        navigate("/login");
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    const navLinkClass = ({ isActive }) =>
        `block whitespace-nowrap rounded-lg px-3 py-2 text-base font-semibold transition-colors ${isActive
            ? "text-blue-600 font-bold bg-blue-50/70 lg:bg-transparent"
            : "text-slate-600 hover:text-blue-600 hover:bg-slate-50 lg:hover:bg-transparent"
        }`;

    return (
        <header className="relative z-40 w-full border-b border-slate-100 bg-white shadow-xs">
            <div className="mx-auto flex min-h-16 w-full max-w-[1440px] items-center justify-between gap-3 px-4 py-3 sm:min-h-20 sm:px-6 lg:px-12 xl:px-16">
                {/* Logo */}
                <NavLink
                    to="/"
                    onClick={closeMobileMenu}
                    className="flex shrink-0 items-center gap-2 sm:gap-3"
                    aria-label="TaskFlow home"
                >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 text-2xl font-bold text-white shadow-lg shadow-blue-600/25 sm:h-12 sm:w-12 sm:text-3xl">
                        ✓
                    </div>

                    <span className="text-xl font-bold text-slate-900 sm:text-2xl">
                        TaskFlow
                    </span>
                </NavLink>

                {/* Desktop navigation */}
                <nav
                    className="hidden lg:block"
                    aria-label="Main navigation"
                >
                    <ul className="flex items-center gap-4 xl:gap-8">
                        <li>
                            <NavLink
                                to="/"
                                end
                                className={navLinkClass}
                            >
                                {isAuthenticated ? "Dashboard" : "Home"}
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/about"
                                className={navLinkClass}
                            >
                                About
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/contact"
                                className={navLinkClass}
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                {/* Right-side actions */}
                <div className="flex shrink-0 items-center gap-2 sm:gap-3">
                    {/* Unauthenticated Actions (Login & Register) */}
                    {!isAuthenticated && (
                        <div className="hidden items-center gap-2 sm:flex">
                            <NavLink
                                to="/login"
                                className="rounded-xl px-4 py-2 font-semibold text-slate-700 transition hover:text-blue-600"
                            >
                                Sign In
                            </NavLink>

                            <NavLink
                                to="/register"
                                className="rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-2.5 font-semibold text-white shadow-sm shadow-blue-600/20 transition hover:opacity-90"
                            >
                                Get Started
                            </NavLink>
                        </div>
                    )}

                    {/* Authenticated Actions */}
                    {isAuthenticated && (
                        <div className="flex items-center gap-2 sm:gap-3">

                            {/* User Profile dropdown trigger & container */}
                            <div className="relative" ref={profileRef}>
                                <button
                                    type="button"
                                    onClick={() => setProfileOpen((prev) => !prev)}
                                    aria-label="Toggle profile menu"
                                    aria-expanded={profileOpen}
                                    aria-controls="profile-menu"
                                    className="flex items-center gap-2 rounded-full border border-slate-200 bg-white py-1 pl-1.5 pr-3 shadow-xs transition hover:border-blue-400 hover:text-blue-600"
                                >
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600 sm:h-9 sm:w-9">
                                        {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
                                    </div>

                                    <span className="hidden max-w-[120px] truncate text-sm font-semibold text-slate-800 md:inline-block">
                                        {user?.name || "User"}
                                    </span>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        aria-hidden="true"
                                        className={`text-slate-500 transition-transform ${profileOpen ? "rotate-180" : ""
                                            }`}
                                    >
                                        <path d="m6 9 6 6 6-6" />
                                    </svg>
                                </button>

                                {profileOpen && (
                                    <div
                                        id="profile-menu"
                                        className="absolute right-0 top-full z-50 mt-2 flex min-w-56 flex-col rounded-2xl border border-slate-100 bg-white p-2 shadow-xl"
                                    >
                                        {/* User Info Header */}
                                        <div className="border-b border-slate-100 px-3 py-2.5">
                                            <p className="truncate text-sm font-bold text-slate-900">
                                                {user?.name || "User"}
                                            </p>
                                            <p className="truncate text-xs text-slate-500">
                                                {user?.email || ""}
                                            </p>
                                        </div>



                                        <NavLink
                                            to="/task/add"
                                            onClick={() => setProfileOpen(false)}
                                            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-blue-600"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="18"
                                                height="18"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                aria-hidden="true"
                                            >
                                                <circle cx="12" cy="12" r="10" />
                                                <line x1="12" y1="8" x2="12" y2="16" />
                                                <line x1="8" y1="12" x2="16" y2="12" />
                                            </svg>
                                            Add New Task
                                        </NavLink>

                                        <NavLink
                                            to="/profile"
                                            onClick={() => setProfileOpen(false)}
                                            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-blue-600"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="18"
                                                height="18"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                aria-hidden="true"
                                            >
                                                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                                <circle cx="12" cy="7" r="4" />
                                            </svg>
                                            Profile & Stats
                                        </NavLink>

                                        <div className="my-1 h-px bg-slate-100" />

                                        <button
                                            type="button"
                                            onClick={handleLogout}
                                            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-semibold text-red-600 transition hover:bg-red-50"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="18"
                                                height="18"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                aria-hidden="true"
                                            >
                                                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                                                <polyline points="16 17 21 12 16 7" />
                                                <line x1="21" y1="12" x2="9" y2="12" />
                                            </svg>
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Mobile hamburger button */}
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen((prev) => !prev)}
                        aria-label={
                            mobileMenuOpen
                                ? "Close navigation menu"
                                : "Open navigation menu"
                        }
                        aria-expanded={mobileMenuOpen}
                        aria-controls="mobile-navigation"
                        className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition hover:bg-slate-100 lg:hidden"
                    >
                        {mobileMenuOpen ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                            >
                                <path d="m18 6-12 12" />
                                <path d="m6 6 12 12" />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                            >
                                <path d="M4 6h16" />
                                <path d="M4 12h16" />
                                <path d="M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile navigation panel */}
            {mobileMenuOpen && (
                <nav
                    id="mobile-navigation"
                    aria-label="Mobile navigation"
                    className="absolute left-0 right-0 top-full z-50 border-t border-slate-100 bg-white p-4 shadow-xl lg:hidden"
                >
                    <ul className="mx-auto flex max-w-[1440px] flex-col gap-1">
                        {/* If authenticated: display user banner at top */}
                        {isAuthenticated && (
                            <li className="mb-2 rounded-xl bg-slate-50 p-3">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-base font-bold text-blue-600">
                                        {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
                                    </div>
                                    <div className="min-w-0">
                                        <p className="truncate text-sm font-bold text-slate-900">
                                            {user?.name || "User"}
                                        </p>
                                        <p className="truncate text-xs text-slate-500">
                                            {user?.email || ""}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        )}

                        <li>
                            <NavLink
                                to="/"
                                end
                                onClick={closeMobileMenu}
                                className={navLinkClass}
                            >
                                {isAuthenticated ? "Dashboard" : "Home"}
                            </NavLink>
                        </li>

                        {isAuthenticated && (
                            <>
                                <li>
                                    <NavLink
                                        to="/task/add"
                                        onClick={closeMobileMenu}
                                        className={navLinkClass}
                                    >
                                        + Add Task
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/profile"
                                        onClick={closeMobileMenu}
                                        className={navLinkClass}
                                    >
                                        Profile & Stats
                                    </NavLink>
                                </li>
                            </>
                        )}

                        <li>
                            <NavLink
                                to="/about"
                                onClick={closeMobileMenu}
                                className={navLinkClass}
                            >
                                About
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/contact"
                                onClick={closeMobileMenu}
                                className={navLinkClass}
                            >
                                Contact
                            </NavLink>
                        </li>

                        {/* Unauthenticated mobile buttons */}
                        {!isAuthenticated && (
                            <li className="mt-3 grid grid-cols-2 gap-2 border-t border-slate-100 pt-3">
                                <NavLink
                                    to="/login"
                                    onClick={closeMobileMenu}
                                    className="block rounded-xl border border-slate-300 px-4 py-2.5 text-center font-semibold text-slate-700 transition hover:bg-slate-50"
                                >
                                    Sign In
                                </NavLink>

                                <NavLink
                                    to="/register"
                                    onClick={closeMobileMenu}
                                    className="block rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-2.5 text-center font-semibold text-white shadow-sm transition hover:opacity-90"
                                >
                                    Get Started
                                </NavLink>
                            </li>
                        )}

                        {/* Authenticated mobile logout */}
                        {isAuthenticated && (
                            <li className="mt-2 border-t border-slate-100 pt-2">
                                <button
                                    type="button"
                                    onClick={handleLogout}
                                    className="flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-left font-semibold text-red-600 transition hover:bg-red-50"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        aria-hidden="true"
                                    >
                                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                                        <polyline points="16 17 21 12 16 7" />
                                        <line x1="21" y1="12" x2="9" y2="12" />
                                    </svg>
                                    <span>Logout</span>
                                </button>
                            </li>
                        )}
                    </ul>
                </nav>
            )}
        </header>
    );
}

export default Navbar;
