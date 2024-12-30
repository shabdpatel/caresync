import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const states = [
    "Maharashtra", "Karnataka", "Tamil Nadu", "Delhi", "West Bengal",
    "Gujarat", "Rajasthan", "Uttar Pradesh", "Madhya Pradesh", "Punjab"
];

const Navbar: React.FC = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isSpecialtiesOpen, setSpecialtiesOpen] = useState(false);
    const [isProceduresOpen, setProceduresOpen] = useState(false);
    const [activeSpecialty, setActiveSpecialty] = useState<string | null>(null);
    const [activeProcedure, setActiveProcedure] = useState<string | null>(null);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isLoginDropdownOpen, setLoginDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => {
        setDropdownOpen(false);
        setSpecialtiesOpen(false);
        setProceduresOpen(false);
    };

    const renderStatesDropdown = () => (
        <div className="absolute top-0 left-full ml-2 w-40 bg-white shadow-md rounded-md py-2 z-20">
            {states.map((state, index) => (
                <a key={index} href="#" className="block px-4 py-2 hover:bg-gray-100 text-gray-800">
                    {state}
                </a>
            ))}
        </div>
    );

    return (
        <nav className="fixed top-0 left-0 w-full bg-[#FFF8E7] p-4 shadow-lg z-50">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <a href="#" className="flex items-center text-gray-800 font-semibold text-2xl">
                    <div className="bg-yellow-400 rounded-full p-1 mr-2">
                        <span className="text-black font-extrabold text-lg">C</span>
                    </div>
                    <span className="text-gray-700">Care-Sync</span>
                </a>

                {/* Menu Items */}
                <div className="hidden md:flex space-x-8 text-gray-800 text-lg font-light">
                    <div
                        className="relative"
                        onMouseEnter={() => setDropdownOpen(true)}
                        onMouseLeave={closeDropdown}
                    >
                        <button className="hover:text-gray-700 flex items-center" onClick={toggleDropdown}>
                            Browse <FaChevronDown className="ml-1" />
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute top-full left-0 w-60 bg-white shadow-md rounded-md py-2 z-20">
                                {/* Specialties */}
                                <div
                                    className="relative"
                                    onMouseEnter={() => setSpecialtiesOpen(true)}
                                    onMouseLeave={() => setSpecialtiesOpen(false)}
                                >
                                    <button
                                        className="block w-full px-4 py-2 hover:bg-gray-100 text-gray-800 flex justify-between"
                                        onClick={() => setSpecialtiesOpen(!isSpecialtiesOpen)}
                                    >
                                        Specialties <FaChevronDown />
                                    </button>
                                    {isSpecialtiesOpen && (
                                        <div className="absolute top-0 left-full ml-0.5 w-60 bg-white shadow-md rounded-md py-2 z-10">
                                            {["Primary Care Physicians", "Dentists", "OBGYNs", "Psychologists", "Cardiologists", "Dermatologists", "Orthopedists"].map((specialty) => (
                                                <div
                                                    key={specialty}
                                                    className="relative"
                                                    onMouseEnter={() => setActiveSpecialty(specialty)}
                                                    onMouseLeave={() => setActiveSpecialty(null)}
                                                >
                                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 text-gray-800">
                                                        {specialty}
                                                    </a>
                                                    {activeSpecialty === specialty && renderStatesDropdown()}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Procedures */}
                                <div
                                    className="relative"
                                    onMouseEnter={() => setProceduresOpen(true)}
                                    onMouseLeave={() => setProceduresOpen(false)}
                                >
                                    <button
                                        className="block w-full px-4 py-2 hover:bg-gray-100 text-gray-800 flex justify-between"
                                        onClick={() => setProceduresOpen(!isProceduresOpen)}
                                    >
                                        Procedures <FaChevronDown />
                                    </button>
                                    {isProceduresOpen && (
                                        <div className="absolute top-0 left-full ml-0.5 w-60 bg-white shadow-md rounded-md py-2 z-10">
                                            {["Dental Implants", "PCR Test", "Laser Hair Removal", "X-Ray", "MRI Scans", "Physical Therapy", "Vaccinations"].map((procedure) => (
                                                <div
                                                    key={procedure}
                                                    className="relative"
                                                    onMouseEnter={() => setActiveProcedure(procedure)}
                                                    onMouseLeave={() => setActiveProcedure(null)}
                                                >
                                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 text-gray-800">
                                                        {procedure}
                                                    </a>
                                                    {activeProcedure === procedure && renderStatesDropdown()}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 text-gray-800">Doctors</a>
                            </div>
                        )}
                    </div>
                    <a href="#" className="hover:text-black">Help</a>
                    <a href="#" className="hover:text-black">List your practice on Care Sync</a>
                </div>

                {/* Log In & Sign Up */}
                <div className="hidden md:flex items-center space-x-6">
                    <div
                        className="relative"
                        onMouseEnter={() => setLoginDropdownOpen(true)}
                        onMouseLeave={() => setLoginDropdownOpen(false)}
                    >
                        <a href="#" className="text-gray-800 hover:text-black text-lg font-semibold">Log in</a>
                        {isLoginDropdownOpen && (
                            <div className="absolute top-full left-0 w-56 bg-white shadow-md rounded-md py-2 z-10">
                                <div>
                                    <p className="px-4 py-2 text-gray-600 font-semibold">Patients</p>
                                    <a href="#" className="block px-6 py-2 hover:bg-gray-100 text-gray-800">Log in</a>
                                </div>
                                <hr className="my-2" />
                                <div>
                                    <p className="px-4 py-2 text-gray-600 font-semibold">Doctors</p>
                                    <a href="#" className="block px-6 py-2 hover:bg-gray-100 text-gray-800">Log in</a>
                                </div>
                                <hr className="my-2" />
                                <div>
                                    <p className="px-4 py-2 text-gray-600 font-semibold">Pharmacists</p>
                                    <a href="#" className="block px-6 py-2 hover:bg-gray-100 text-gray-800">Log in</a>
                                </div>
                            </div>
                        )}
                    </div>

                    <a
                        href="#"
                        className="bg-yellow-400 text-black font-semibold py-2 px-5 rounded-lg text-lg hover:bg-yellow-300"
                    >
                        Sign Up
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-gray-800 focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden flex flex-col mt-4 space-y-5 text-gray-800 text-lg font-medium">
                    <a href="#" className="hover:text-black">Browse</a>
                    <a href="#" className="hover:text-black">Help</a>
                    <a href="#" className="hover:text-black">List your practice on Care Sync</a>
                    <a href="#" className="hover:text-black">Log in</a>
                    <a
                        href="#"
                        className="bg-yellow-400 text-black font-semibold py-2 px-5 rounded-lg text-lg hover:bg-yellow-300 text-center"
                    >
                        Sign Up
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
