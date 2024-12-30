const Doctor = () => {
    // Mock data for top doctors
    const topDoctors = [
        {
            name: 'Dr. Priya Sharma',
            specialty: 'Cardiologist',
            degree: 'MD, FACC',
            charges: '₹9,000/hr',
            rating: 4.9,
            experience: '15 years',
            photo: '/images/doctor1.jpg',
        },
        {
            name: 'Dr. Rajesh Gupta',
            specialty: 'Dermatologist',
            degree: 'MBBS, DDVL',
            charges: '₹7,500/hr',
            rating: 4.7,
            experience: '12 years',
            photo: '/images/doctor2.jpg',
        },
        {
            name: 'Dr. Ananya Desai',
            specialty: 'Pediatrician',
            degree: 'MD, FAAP',
            charges: '₹6,500/hr',
            rating: 4.8,
            experience: '10 years',
            photo: '/images/doctor3.jpg',
        },
        {
            name: 'Dr. Vikram Reddy',
            specialty: 'Orthopedist',
            degree: 'MS Ortho',
            charges: '₹8,000/hr',
            rating: 4.6,
            experience: '9 years',
            photo: '/images/doctor4.jpg',
        },
    ];

    return (
        <div className="bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 min-h-screen py-8">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
                    Top Doctors Available
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {topDoctors.map((doctor, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                        >
                            <img
                                src={doctor.photo}
                                alt={doctor.name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h2 className="text-2xl font-semibold text-gray-800">{doctor.name}</h2>
                                <p className="text-indigo-600 font-medium">{doctor.specialty}</p>
                                <p className="text-gray-500 text-sm">{doctor.degree}</p>
                                <div className="flex items-center justify-between mt-4">
                                    <p className="text-green-600 font-semibold">{doctor.charges}</p>
                                    <p className="text-yellow-500 flex items-center">
                                        {doctor.rating} ⭐
                                    </p>
                                </div>
                                <p className="text-gray-600 text-sm mt-2">Experience: {doctor.experience}</p>
                                <button className="mt-6 w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 rounded-lg hover:from-blue-600 hover:to-blue-800 transition-all duration-300">
                                    Book Appointment
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Doctor;
