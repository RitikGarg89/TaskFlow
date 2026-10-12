
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="border-t border-slate-200 bg-slate-50">
            <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 sm:grid-cols-2 md:grid-cols-3">

                {/* Brand */}
                <div>
                    <Link to="/" className="flex w-fit items-center gap-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold text-white">
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
                <div>
                    <h3 className="font-semibold text-slate-900">
                        Quick Links
                    </h3>

                    <ul className="mt-4 space-y-3 text-slate-600">
                        <li>
                            <Link to="/" className="transition hover:text-blue-600">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="transition hover:text-blue-600">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="transition hover:text-blue-600">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Call to Action */}
                <div>
                    <h3 className="font-semibold text-slate-900">
                        Get Started
                    </h3>

                    <p className="mt-4 leading-7 text-slate-600">
                        Ready to organize your day? Start managing your
                        tasks with TaskFlow.
                    </p>

                    <Link
                        to="/register"
                        className="mt-4 inline-flex rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white transition hover:bg-blue-700"
                    >
                        Create Account
                    </Link>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-200">
                <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-5 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
                    <p>
                        © {new Date().getFullYear()} TaskFlow. All rights reserved.
                    </p>

                    <p>Organize your work. One task at a time.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
