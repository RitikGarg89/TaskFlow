import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Features/AuthSlice";
import { endSession } from "../Utils/UserStorage";

function Navbar() {
    const { user, isAuthenticated } = useSelector(
        (state) => state.auth
    );

    const [profileOpen, setProfileOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        setProfileOpen(false);
        setMobileMenuOpen(false);
        dispatch(logout());
        endSession();
        navigate("/login");
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    const navLinkClass = ({ isActive }) =>
        `block whitespace-nowrap rounded-lg px-3 py-2 text-base font-semibold transition-colors ${isActive
            ? "text-primary"
            : "text-muted"
        } hover:text-primary-hover`;

    return (
        <header className="relative z-40 w-full bg-white shadow-sm">
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

                    <span className="text-xl font-bold text-gray-900 sm:text-2xl">
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
                                className={navLinkClass}
                            >
                                Home
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
                <div className="flex shrink-0 items-center gap-2">

                    {/* Login button for desktop and tablet */}
                    {!isAuthenticated && (
                        <NavLink
                            to="/login"
                            className="hidden rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-2.5 font-semibold text-white transition hover:opacity-90 sm:inline-flex"
                        >
                            Login
                        </NavLink>
                    )}

                    {/* Authenticated profile dropdown */}
                    {isAuthenticated && (
                        <div className="relative">
                            <button
                                type="button"
                                onClick={() =>
                                    setProfileOpen((prev) => !prev)
                                }
                                aria-label="Toggle profile menu"
                                aria-expanded={profileOpen}
                                aria-controls="profile-menu"
                                className="flex items-center gap-2 rounded-full border border-gray-200 p-1.5 transition hover:border-blue-500 hover:text-blue-600"
                            >
                                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 sm:h-10 sm:w-10">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        aria-hidden="true"
                                    >
                                        <circle cx="12" cy="8" r="4" />
                                        <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
                                    </svg>
                                </div>

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
                                    className={`transition-transform ${profileOpen ? "rotate-180" : ""
                                        }`}
                                >
                                    <path d="m6 9 6 6 6-6" />
                                </svg>
                            </button>

                            {profileOpen && (
                                <div
                                    id="profile-menu"
                                    className="absolute right-0 top-full z-50 mt-2 flex min-w-44 flex-col rounded-xl border border-gray-100 bg-white p-2 shadow-xl"
                                >
                                    <NavLink
                                        to="/profile"
                                        onClick={() =>
                                            setProfileOpen(false)
                                        }
                                        className="flex items-center gap-3 rounded-lg px-3 py-3 font-medium text-gray-700 transition hover:bg-gray-50 hover:text-blue-600"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            aria-hidden="true"
                                        >
                                            <circle cx="12" cy="8" r="4" />
                                            <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
                                        </svg>
                                        Profile
                                    </NavLink>

                                    <div className="my-1 h-px bg-gray-100" />

                                    <button
                                        type="button"
                                        onClick={handleLogout}
                                        className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left font-medium text-red-600 transition hover:bg-red-50"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
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
                    )}

                    {/* Mobile hamburger button */}
                    <button
                        type="button"
                        onClick={() =>
                            setMobileMenuOpen((prev) => !prev)
                        }
                        aria-label={
                            mobileMenuOpen
                                ? "Close navigation menu"
                                : "Open navigation menu"
                        }
                        aria-expanded={mobileMenuOpen}
                        aria-controls="mobile-navigation"
                        className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-700 transition hover:bg-gray-100 lg:hidden"
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
                    className="absolute left-0 right-0 top-full z-50 border-t border-gray-100 bg-white p-4 shadow-lg lg:hidden"
                >
                    <ul className="mx-auto flex max-w-[1440px] flex-col gap-1">
                        <li>
                            <NavLink
                                to="/"
                                onClick={closeMobileMenu}
                                className={navLinkClass}
                            >
                                Home
                            </NavLink>
                        </li>

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

                        {!isAuthenticated && (
                            <li className="mt-2 border-t border-gray-100 pt-3 sm:hidden">
                                <NavLink
                                    to="/login"
                                    onClick={closeMobileMenu}
                                    className="block rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-3 text-center font-semibold text-white transition hover:opacity-90"
                                >
                                    Login
                                </NavLink>
                            </li>
                        )}

                        {isAuthenticated && (
                            <>
                                <li className="mt-2 border-t border-gray-100 pt-2">
                                    <NavLink
                                        to="/profile"
                                        onClick={() => {
                                            closeMobileMenu();
                                            setProfileOpen(false);
                                        }}
                                        className={navLinkClass}
                                    >
                                        Profile
                                    </NavLink>
                                </li>

                                <li>
                                    <button
                                        type="button"
                                        onClick={handleLogout}
                                        className="block w-full rounded-lg px-3 py-2 text-left font-semibold text-red-600 transition hover:bg-red-50"
                                    >
                                        Logout
                                    </button>
                                </li>
                            </>
                        )}
                    </ul>
                </nav>
            )}
        </header>
    );
}

export default Navbar;