import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-zinc-300 mt-10 rounded-md">
            <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:py-16 lg:px-8">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="grid grid-cols-2 gap-8 xl:col-span-2">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h4 className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
                                    About
                                </h4>
                                <ul className="mt-4">
                                    <li>
                                        <Link
                                            to="/"
                                            className="text-base leading-6 text-black hover:text-amber-500"
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li className="mt-4">
                                        <Link
                                            to="/blog"
                                            className="text-base leading-6 text-black hover:text-amber-500"
                                        >
                                            Blog
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <h4 className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
                                    Recipes
                                </h4>
                                <ul className="mt-4">
                                    <li>
                                        <Link
                                            to="#"
                                            className="text-base leading-6 text-black hover:text-amber-500"
                                        >
                                            Main Dishes
                                        </Link>
                                    </li>
                                    <li className="mt-4">
                                        <Link
                                            to="#"
                                            className="text-base leading-6 text-black hover:text-amber-500"
                                        >
                                            Desserts
                                        </Link>
                                    </li>
                                    <li className="mt-4">
                                        <Link
                                            to="#"
                                            className="text-base leading-6 text-black hover:text-amber-500"
                                        >
                                            Drinks
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h4 className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
                                    Follow Us
                                </h4>
                                <ul className="mt-4">
                                    <li>
                                        <Link
                                            to="#"
                                            className="text-base leading-6 text-black hover:text-amber-500"
                                        >
                                            Facebook
                                        </Link>
                                    </li>
                                    <li className="mt-4">
                                        <Link
                                            to="#"
                                            className="text-base leading-6 text-black hover:text-amber-500"
                                        >
                                            Instagram
                                        </Link>
                                    </li>
                                    <li className="mt-4">
                                        <Link
                                            to="#"
                                            className="text-base leading-6 text-black hover:text-amber-500"
                                        >
                                            Twitter
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <h4 className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
                                    Subscribe
                                </h4>
                                <p className="mt-4 text-base leading-6 text-black">
                                    Get the latest recipes delivered straight to your inbox.
                                </p>

                                <form className="mt-4 sm:flex">
                                    <label htmlFor="email" className="sr-only">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="Enter your email"
                                        className="appearance-none w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-black leading-tight focus:outline-none focus:bg-gray-600 focus:border-gray-700"
                                    />
                                    <button
                                        type="submit"
                                        className="mt-3 sm:mt-0 sm:ml-3 bg-gray-600 hover:bg-gray-500 text-white py-2 px-4 rounded-md transition-colors duration-300"
                                    >
                                        Subscribe
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 md:mt-16 xl:mt-0">
                        <h4 className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
                            Popular Recipes
                        </h4>
                        <div className="mt-4">
                            <Link
                                to="#"
                                className="text-base leading-6 text-black hover:text-amber-500"
                            >
                                coconut milk
                            </Link>
                            <div className="mt-2">
                                <Link
                                    to="#"
                                    className="text-base leading-6 text-black hover:text-amber-500"
                                >
                                    Jerk chicken with rice & peas
                                </Link>
                            </div>
                            <div className="mt-2">
                                <Link
                                    to="#"
                                    className="text-base leading-6 text-black hover:text-amber-500"
                                >
                                    glass noodles

                                </Link>
                            </div>
                            <div className="mt-2">
                                <Link
                                    to="#"
                                    className="text-base leading-6 text-black hover:text-amber-500"
                                >
                                    Tom Yum Goong
                                </Link>
                                <Link
                                    to="#"
                                    className="text-base leading-6 text-black hover:text-amber-500"
                                >
                                    mini wrap
                                </Link>
                                <Link
                                    to="#"
                                    className="text-base leading-6 text-black hover:text-amber-500"
                                >
                                    traditional Thai fish recipe
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-700 pt-8">
                    <p className="text-base leading-6 text-gray-400 xl:text-center">
                        © 2023 Recipe Website. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;