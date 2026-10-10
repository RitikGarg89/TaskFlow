import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function RegisterForm() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password, confirmPassword);
    }
    return (
        <div className="flex h-full w-[440px] items-center justify-center bg-page px-6 md:px-8">
            <div className="w-full max-w-md">
                <header className="mb-3">
                    <div className="flex flex-row items-center  mb-3">
                        <div className="mr-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 text-3xl font-bold text-white shadow-xl shadow-blue-600/25">
                            ✓
                        </div>
                        <span className="text-2xl font-bold ">TaskFlow</span>
                    </div>
                    <h1 className="text-3xl font-bold text-slate-900">
                        Create your account 🙌
                    </h1>
                    <p className="mt-2 text-slate-600">
                        Join TaskFlow and start organizing your life
                    </p>
                </header>
                {/* Form goes here */}
                <form>
                    <div className="grid grid-cols-1 gap-5">
                        <div>
                            <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">
                                Full name
                            </label>
                            <input type="text" placeholder='Enter your full name' id="name" className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" />
                        </div>
                        <div>
                            <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
                                Email address
                            </label>
                            <input type="email" placeholder='example@email.com' id="email" className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" />
                        </div>

                        <div>
                            <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-700">
                                Password
                            </label>
                            <div className="relative">
                                <input type={showPassword ? "text" : "password"} placeholder='••••••••' id="password" className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" />
                                <button type='button' onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 text-muted  -translate-y-1/2">
                                    {showPassword ? "Hide" : "Show"}
                                </button>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="confirmPassword" className="mb-2 block text-sm font-medium text-slate-700">
                                Confirm Password
                            </label>
                            <div className="relative">
                                <input type={showConfirmPassword ? "text" : "password"} placeholder='••••••••' id="confirmPassword" className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" />
                                <button type='button' onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-1/2 text-muted  -translate-y-1/2">
                                    {showConfirmPassword ? "Hide" : "Show"}
                                </button>
                            </div>
                        </div>


                        <div>
                            <button type='submit' className='w-full rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 py-3 text-white font-semibold hover:opacity-90 transition duration-300'>
                                Sign up
                            </button>
                            <p className="mt-4 text-center text-sm text-slate-600">
                                Already have an account?{" "}
                                <Link
                                    to="/login"
                                    className="font-bold text-blue-600 hover:underline"
                                >
                                    Sign in
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
                        <span className="bg-page  px-4 text-sm font-medium text-slate-600">
                            OR
                        </span>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default RegisterForm