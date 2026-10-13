import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Footer() {
    const isAuthenticated = useSelector(
        (state) => state.auth.isAuthenticated
    );

    return (
        <footer className="w-full border-t border-slate-200 bg-slate-50">
            {/* Main footer */}
            <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 px-4 py-10 sm:grid-cols-2 sm:gap-10 sm:px-6 md:grid-cols-3 md:py-12">

                {/* Brand */}
                <div className="min-w-0">
                    <Link
                        to="/"
                        className="flex w-fit items-center gap-2"
                    >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold text-white">
                            ✓
                        </div>

                        <span className="text-2xl font-bold text-slate-900">
                            Task<span className="text-blue-600">Flow</span>
                        </span>
                    </Link>

                    <p className="mt-4 max-w-xs leading-7 text-slate-600">
                        A simple way to manage your tasks, stay focused,
                        and achieve more.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="min-w-0">
                    <h3 className="font-semibold text-slate-900">
                        Quick Links
                    </h3>

                    <ul className="mt-4 space-y-3 text-slate-600">
                        <li>
                            <Link
                                to="/"
                                className="transition hover:text-blue-600"
                            >
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/about"
                                className="transition hover:text-blue-600"
                            >
                                About
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/contact"
                                className="transition hover:text-blue-600"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Call to Action */}
                <div className="min-w-0">
                    <h3 className="font-semibold text-slate-900">
                        {isAuthenticated
                            ? "Keep Going"
                            : "Get Started"}
                    </h3>

                    <p className="mt-4 leading-7 text-slate-600">
                        {isAuthenticated
                            ? "Ready to get more done? Continue organizing your tasks with TaskFlow."
                            : "Ready to organize your day? Start managing your tasks with TaskFlow."}
                    </p>

                    {isAuthenticated ? (
                        <Link
                            to="/profile"
                            className="mt-4 inline-flex max-w-full items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-center font-medium text-white transition hover:bg-blue-700"
                        >
                            Go to Dashboard
                        </Link>
                    ) : (
                        <Link
                            to="/register"
                            className="mt-4 inline-flex max-w-full items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-center font-medium text-white transition hover:bg-blue-700"
                        >
                            Create Account
                        </Link>
                    )}
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-200">
                <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-5 text-sm text-slate-500 sm:px-6 md:flex-row md:items-center md:justify-between">
                    <p>
                        © {new Date().getFullYear()} TaskFlow.
                        All rights reserved.
                    </p>

                    <p>
                        Organize your work. One task at a time.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;