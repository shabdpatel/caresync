import React, { useState, useEffect } from 'react';

const Homepage: React.FC = () => {
    const [location, setLocation] = useState('Neuri, JH');
    const [insurance, setInsurance] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [specialty, setSpecialty] = useState('OB-GYNs');
    const [fadeClass, setFadeClass] = useState('opacity-0');

    // States for Suggestions
    const [locationSuggestions, setLocationSuggestions] = useState<string[]>([]);
    const [insuranceSuggestions, setInsuranceSuggestions] = useState<string[]>([]);
    const [doctorSuggestions, setDoctorSuggestions] = useState<string[]>([]);

    // Mock Data for Suggestions
    const locations = ['Neuri, JH', 'Ranchi, JH', 'Mumbai, MH', 'Delhi, DL', 'Kolkata, WB'];
    const insurancePlans = ['Aetna', 'Cigna', 'Blue Cross Blue Shield', 'UnitedHealthcare', 'Humana'];
    const doctors = [
        'Dr. Smith - OB-GYN',
        'Dr. Johnson - Dentist',
        'Dr. Williams - Cardiologist',
        'Dr. Brown - Psychologist',
        'Dr. Miller - Dermatologist',
    ];

    // Specialty Rotation
    const specialties = [
        'Care Physicians',
        'Dentists',
        'OB-GYNs',
        'Psychologists',
        'Cardiologists',
        'Dermatologists',
        'Orthopedists',
    ];

    const specialtyCards = [
        { name: 'Dermatologist - Acne, Pimples', icon: '/skin-probs.svg' },
        { name: 'Sexologist', icon: '/sex-probs.svg' },
        { name: 'Gynecologist', icon: '/women-issues.svg' },
        { name: 'Gastroenterologist - Acidity, Gas', icon: '/acidity.svg' },
        { name: 'Infertility Specialist', icon: '/concieving.svg' },
        { name: 'Psychiatrist', icon: '/psycologial.svg' },
        { name: 'General Physician', icon: '/general-physician.svg' },
        { name: 'Neurologist', icon: '/neurology.svg' },
        { name: 'Orthopedist', icon: '/ortho.svg' },
        { name: 'Pediatrician', icon: '/child-infant.svg' },
        { name: 'Diabetologist', icon: '/diabetes.svg' },
        { name: 'Cardiologist', icon: '/cardiac.svg' },
        { name: 'Pregnancy Specialist', icon: '/pregnant.svg' },
        { name: 'Urologist', icon: '/nephrology.svg' },
        { name: 'Dentist', icon: '/dentistry.svg' }
    ];

    useEffect(() => {
        let index = 0;

        const interval = setInterval(() => {
            setFadeClass('opacity-0');
            setTimeout(() => {
                index = (index + 1) % specialties.length;
                setSpecialty(specialties[index]);
                setFadeClass('opacity-100');
            }, 300); // Time for fade-out animation
        }, 2000); // Total interval time (fade-out + fade-in)

        return () => clearInterval(interval);
    }, []);

    // Filter Suggestions Based on Input
    const handleSearchInput = (value: string) => {
        setSearchTerm(value);
        setDoctorSuggestions(
            doctors.filter((doc) =>
                doc.toLowerCase().includes(value.toLowerCase())
            )
        );
    };

    const handleLocationInput = (value: string) => {
        setLocation(value);
        setLocationSuggestions(
            locations.filter((loc) =>
                loc.toLowerCase().includes(value.toLowerCase())
            )
        );
    };

    const handleInsuranceInput = (value: string) => {
        setInsurance(value);
        setInsuranceSuggestions(
            insurancePlans.filter((plan) =>
                plan.toLowerCase().includes(value.toLowerCase())
            )
        );
    };

    return (
        <div className="bg-[#FFF8E7] min-h-screen flex flex-col items-center justify-start mt-[2rem]">
            {/* Hero Section */}
            <section className="container mx-auto px-4 py-16 max-w-5xl">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="w-full md:w-1/2 mb-4 md:mb-0">
                        <h1 className="text-4xl font-bold text-gray-800 leading-snug mb-4">
                            Book local{' '}
                            <span
                                className={`text-gray-500 transition-opacity duration-300 ${fadeClass}`}
                            >
                                {specialty}
                            </span>
                            <br />
                            who take your insurance
                        </h1>
                    </div>
                    <div className="w-full md:w-1/3 flex justify-center">
                        <iframe className="w-full h-full" src="https://lottie.host/embed/0ebf2be5-0015-4ad8-af31-cc896c085726/Zf3UxRxH3L.lottie"></iframe>
                    </div>
                </div>
            </section>

            {/* Search Bar Section */}
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="flex border rounded-lg overflow-hidden shadow-md bg-white h-16 max-w-5xl mx-auto relative">
                    {/* Search Field */}
                    <div className="w-1/2 sm:w-2/3 relative">
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => handleSearchInput(e.target.value)}
                            placeholder="Search for a doctor or procedure..."
                            className="w-full py-4 px-4 text-gray-900 outline-none"
                        />
                        {doctorSuggestions.length > 0 && (
                            <ul className="absolute bg-white border top-full w-full sm:w-2/3 shadow-md z-10">
                                {doctorSuggestions.map((suggestion, index) => (
                                    <li
                                        key={index}
                                        onClick={() => {
                                            setSearchTerm(suggestion);
                                            setDoctorSuggestions([]);
                                        }}
                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                    >
                                        {suggestion}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* Location Input */}
                    <div className="flex items-center border-l px-4 relative">
                        <span className="text-gray-600 mr-1">📍</span>
                        <input
                            type="text"
                            value={location}
                            onChange={(e) => handleLocationInput(e.target.value)}
                            placeholder="Enter your location"
                            className="outline-none text-gray-800 w-40 sm:w-56"
                        />
                        {locationSuggestions.length > 0 && (
                            <ul className="absolute bg-white border top-full w-40 sm:w-56 shadow-md z-10">
                                {locationSuggestions.map((suggestion, index) => (
                                    <li
                                        key={index}
                                        onClick={() => {
                                            setLocation(suggestion);
                                            setLocationSuggestions([]);
                                        }}
                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                    >
                                        {suggestion}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* Insurance Input */}
                    <div className="flex items-center border-l px-4 relative">
                        <span className="text-gray-600 mr-1">💳</span>
                        <input
                            type="text"
                            value={insurance}
                            onChange={(e) => handleInsuranceInput(e.target.value)}
                            placeholder="Insurance carrier and plan"
                            className="outline-none text-gray-800 w-56 sm:w-64"
                        />
                        {insuranceSuggestions.length > 0 && (
                            <ul className="absolute bg-white border top-full w-56 sm:w-64 shadow-md z-10">
                                {insuranceSuggestions.map((suggestion, index) => (
                                    <li
                                        key={index}
                                        onClick={() => {
                                            setInsurance(suggestion);
                                            setInsuranceSuggestions([]);
                                        }}
                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                    >
                                        {suggestion}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* Search Button */}
                    <button className="bg-yellow-400 hover:bg-yellow-300 px-6 text-black font-semibold">
                        🔍
                    </button>
                </div>
            </div>

            {/* Specialties Section */}
            <div className="w-full mt-8 px-4">
                <div className="bg-white shadow-md rounded-lg py-4 px-6 flex items-center max-w-5xl mx-auto overflow-x-auto scrollbar-none">
                    <div className="flex flex-nowrap space-x-14">
                        {specialtyCards.map((item, index) => (
                            <div key={index} className="flex flex-col items-center justify-center w-24 text-center flex-shrink-0">
                                <img
                                    src={item.icon}
                                    alt={item.name}
                                    className="w-12 h-12 mb-2 object-contain"
                                />
                                <p className="text-gray-800 text-sm font-medium leading-tight">
                                    {item.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homepage;

