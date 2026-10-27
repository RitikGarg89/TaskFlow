import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../Features/AuthSlice";
import { fetchTasks } from "../Features/TaskSlice";
import api, { setToken } from "../Utils/api";

function LoginForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage("");
        setLoading(true);

        try {
            const data = await api.post("/auth/login", {
                email: email.trim(),
                password,
            });

            if (data.token) {
                setToken(data.token);
            }

            dispatch(loginSuccess(data.user));
            dispatch(fetchTasks());
            navigate("/");
        } catch (err) {
            setErrorMessage(err.message || "Invalid email or password");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex h-full w-[440px] items-center justify-center bg-page px-6 md:px-8">
            <div className="w-full max-w-md">
                <header className="mb-3 text-center">
                    <div className="mb-3 flex flex-row items-center justify-center">
                        <div className="mr-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 text-3xl font-bold text-white shadow-xl shadow-blue-600/25">
                            ✓
                        </div>
                        <span className="text-2xl font-bold">TaskFlow</span>
                    </div>
                    <h1 className="text-3xl font-bold text-slate-900">
                        Welcome back 👋
                    </h1>
                    <p className="mt-2 text-slate-600">
                        Sign in to your account to continue
                    </p>
                </header>

                {/* Error Banner */}
                {errorMessage && (
                    <div className="mb-4 rounded-xl border border-red-200 bg-red-50 p-3 text-sm font-medium text-red-600">
                        {errorMessage}
                    </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-5">
                        <div>
                            <label
                                htmlFor="email"
                                className="mb-2 block text-sm font-medium text-slate-700"
                            >
                                Email address
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="example@email.com"
                                id="email"
                                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                required
                            />
                        </div>

                        <div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="mb-2 block text-sm font-medium text-slate-700"
                                >
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="••••••••"
                                        id="password"
                                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                        required
                                        minLength={6}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-slate-500 hover:text-slate-700"
                                    >
                                        {showPassword ? "Hide" : "Show"}
                                    </button>
                                </div>
                            </div>
                            <button
                                type="button"
                                className="mt-2 text-sm font-medium text-blue-600 hover:underline"
                            >
                                Forgot Password?
                            </button>
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 py-3 font-semibold text-white transition duration-300 hover:opacity-90 disabled:opacity-50"
                            >
                                {loading ? "Logging in..." : "Log in"}
                            </button>
                            <p className="mt-4 text-center text-sm text-slate-600">
                                Don't have an account?{" "}
                                <Link
                                    to="/register"
                                    className="font-bold text-blue-600 hover:underline"
                                >
                                    Sign up
                                </Link>
                            </p>
                        </div>
                    </div>
                </form>

                {/* Divider */}
                <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-slate-300" />
                    </div>
                    <div className="relative flex justify-center">
                        <span className="bg-page px-4 text-sm font-medium text-slate-600">
                            OR
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;