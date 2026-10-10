import { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    const user = true;
    const [profileOpen, setProfileOpen] = useState(false);
    return (
        <header className='w-full h-20 px-16 py-2 bg-white flex items-center justify-between'>
            <div className="flex flex-row items-center justify-center">
                <div className="mr-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 text-3xl font-bold text-white shadow-xl shadow-blue-600/25">
                    ✓
                </div>
                <span className="text-2xl font-bold ">TaskFlow</span>
            </div>
            <nav>
                <ul className='flex flex-row items-center gap-10'>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `text-xl font-semibold transition-all ${isActive ? "text-primary" : "text-muted"
                                } hover:text-primary-hover`
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                `text-xl font-semibold transition-all ${isActive ? "text-primary" : "text-muted"
                                } hover:text-primary-hover`
                            }
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                `text-xl font-semibold transition-all ${isActive ? "text-primary" : "text-muted"
                                } hover:text-primary-hover`
                            }
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div className="flex flex-row items-center w-[100px] justify-center ">
                {user ? (
                    <div>
                        <div onClick={() => setProfileOpen(!profileOpen)} className='flex relative flex-row items-center gap-2 justify-center border border-muted rounded-full pr-2'>
                            <div className='w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-blue-500 hover:text-blue-500 cursor-pointer transition-all'>
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
                            {profileOpen ? (<svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                            >
                                <path d="m6 15 6-6 6 6" />
                            </svg>
                            )
                                : (<svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    aria-hidden="true"
                                >
                                    <path d="m6 9 6 6 6-6" />
                                </svg>)
                            }
                        </div>
                        <div className={`${profileOpen ? "flex" : "hidden"} absolute top-20 right-18 flex-col items-center bg-white rounded-xl shadow-lg p-4`}>
                            <div className='flex flex-row items-center gap-4'>
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
                                <NavLink to="/profile" className="text-xl  text-primary font-semibold hover:text-primary-hover transition-all">Profile</NavLink>
                            </div>
                            <div className='w-full h-0.5 bg-muted my-1'></div>
                            <div className='flex flex-row items-center gap-2'>
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
                                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                                    <polyline points="16 17 21 12 16 7" />
                                    <line x1="21" y1="12" x2="9" y2="12" />
                                </svg>
                                <NavLink to="/logout" className="text-xl text-red-600 font-semibold hover:text-primary-hover transition-all">Logout</NavLink>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="flex w-full flex-row justify-center items-center gap-4">
                        <NavLink to="/login" className="w-full text-center rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 py-3 text-white font-semibold hover:opacity-90 transition duration-300">Login</NavLink>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Navbar