"use client";

import { useState } from "react";

export default function HamburguerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div 
            className="flex flex-col justify-center items-center w-12 h-12 cursor-pointer"
            onClick={toggleMenu}
        >
            <div
                className={`w-10 h-1 bg-black transform transition duration-300 ${
                    isOpen ? "rotate-45 translate-y-2.5" : ""
                }`}
            ></div>
            <div
                className={`w-10 h-1 bg-black mt-1 transition duration-300 ${
                    isOpen ? "opacity-0" : "opacity-100"
                }`}
            ></div>
            <div
                className={`w-10 h-1 bg-black mt-1 transform transition duration-300 ${
                    isOpen ? "-rotate-45 -translate-y-2.5" : ""
                }`}
            ></div>
        </div>
    );
}
