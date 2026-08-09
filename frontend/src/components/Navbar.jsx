import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
    Leaf,
    Menu,
    X,
} from "lucide-react";

import ThemeToggle from "./ThemeToggle";

function Navbar() {
    const navigate = useNavigate();
    const [mobileOpen, setMobileOpen] = useState(false);

    const isLoggedIn = !!localStorage.getItem("token");

    const logout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    const navItem = ({ isActive }) =>
        `flex items-center px-1 py-1 font-medium transition-all duration-300 whitespace-nowrap ${
            isActive
                ? "text-green-600 border-b-2 border-green-600"
                : "text-gray-700 hover:text-green-600"
        }`;

    return (
        <header className="bg-white border-b border-green-100 shadow-sm">
            <div className="w-full px-6 lg:px-10 xl:px-16 py-4 flex items-center justify-between gap-6">

                {/* Logo */}
                <div
                    onClick={() => navigate("/")}
                    className="flex items-center gap-3 xl:gap-4 cursor-pointer shrink-0"
                >
                    <div className="h-10 w-10 xl:h-12 xl:w-12 rounded-2xl bg-green-600 flex items-center justify-center shadow">
                        <Leaf className="text-white" size={24} />
                    </div>

                    <div>
                        <h1 className="text-2xl xl:text-3xl font-extrabold leading-none">
                            <span className="text-gray-900">
                                Krishi
                            </span>
                            <span className="text-green-600">
                                Sathi
                            </span>
                        </h1>

                        <p className="text-xs xl:text-sm text-gray-500">
                            AI Agriculture Platform
                        </p>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-6 xl:gap-8 justify-center">
                    <NavLink to="/" className={navItem}>
                        Home
                    </NavLink>

                    <NavLink to="/about" className={navItem}>
                        About
                    </NavLink>

                    {isLoggedIn && (
                        <>
                            <NavLink
                                to="/crop-planner"
                                className={navItem}
                            >
                                Crop Planner
                            </NavLink>

                            <NavLink
                                to="/analysis"
                                className={navItem}
                            >
                                Farm Analysis
                            </NavLink>

                            <NavLink
                                to="/dashboard"
                                className={navItem}
                            >
                                Dashboard
                            </NavLink>

                            {/* Market Insight */}
                            <NavLink
                                to="/market-insight"
                                className={navItem}
                            >
                                Market Insight
                            </NavLink>
                        </>
                    )}
                </nav>

                {/* Right Side */}
                <div className="hidden lg:flex items-center justify-end gap-5 xl:gap-8 shrink-0">

                    <div className="flex items-center h-full">
                        <ThemeToggle />
                    </div>

                    {!isLoggedIn ? (
                        <>
                            <NavLink
                                to="/login"
                                className="px-5 py-2 rounded-xl border border-green-600 text-green-700 font-semibold hover:bg-green-50 transition whitespace-nowrap"
                            >
                                Login
                            </NavLink>

                            <NavLink
                                to="/register"
                                className="px-5 py-2 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition shadow whitespace-nowrap"
                            >
                                Register
                            </NavLink>
                        </>
                    ) : (
                        <button
                            onClick={logout}
                            className="px-5 py-2 rounded-xl border border-red-500 text-red-500 font-semibold hover:bg-red-50 transition shadow-sm whitespace-nowrap"
                        >
                            Logout
                        </button>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="lg:hidden text-gray-700"
                >
                    {mobileOpen ? (
                        <X size={28} />
                    ) : (
                        <Menu size={28} />
                    )}
                </button>

            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="lg:hidden border-t border-green-100 bg-white px-8 py-4 space-y-3 shadow-lg">

                    <NavLink
                        to="/"
                        className={navItem}
                        onClick={() => setMobileOpen(false)}
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/about"
                        className={navItem}
                        onClick={() => setMobileOpen(false)}
                    >
                        About
                    </NavLink>

                    {isLoggedIn && (
                        <>
                            <NavLink
                                to="/crop-planner"
                                className={navItem}
                                onClick={() => setMobileOpen(false)}
                            >
                                Crop Planner
                            </NavLink>

                            <NavLink
                                to="/analysis"
                                className={navItem}
                                onClick={() => setMobileOpen(false)}
                            >
                                Farm Analysis
                            </NavLink>

                            <NavLink
                                to="/dashboard"
                                className={navItem}
                                onClick={() => setMobileOpen(false)}
                            >
                                Dashboard
                            </NavLink>

                            {/* Market Insight */}
                            <NavLink
                                to="/market-insight"
                                className={navItem}
                                onClick={() => setMobileOpen(false)}
                            >
                                Market Insight
                            </NavLink>
                        </>
                    )}

                    <div className="pt-3 flex items-center justify-between border-t border-gray-100">

                        <ThemeToggle />

                        {!isLoggedIn ? (
                            <div className="flex gap-3">

                                <NavLink
                                    to="/login"
                                    className="px-4 py-2 rounded-xl border border-green-600 text-green-700 font-semibold text-sm"
                                >
                                    Login
                                </NavLink>

                                <NavLink
                                    to="/register"
                                    className="px-4 py-2 rounded-xl bg-green-600 text-white font-semibold text-sm"
                                >
                                    Register
                                </NavLink>

                            </div>
                        ) : (
                            <button
                                onClick={logout}
                                className="px-4 py-2 rounded-xl border border-red-500 text-red-500 font-semibold text-sm"
                            >
                                Logout
                            </button>
                        )}

                    </div>
                </div>
            )}
        </header>
    );
}

export default Navbar;