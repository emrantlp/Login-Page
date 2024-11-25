import { useState } from "react";

function LoginPage () {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    // সাবমিট করা ডেটার জন্য স্টেট তৈরি
    const [submittedData, setSubmittedData] = useState(null);

    // ইনপুট পরিবর্তনের জন্য হ্যান্ডলার
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    // ফর্ম সাবমিটের সময় API তে ডেটা পাঠানোর জন্য ফাংশন
    const handleSubmit = async (e) => {
        e.preventDefault(); // ডিফল্ট ফর্ম সাবমিট বন্ধ

        // এখানে ফর্ম ডেটা ব্যাকএন্ডে পাঠানো হতে পারে, কিন্তু আপাতত কেবল ফর্ম ডেটা দেখানো হবে
        setSubmittedData(formData); // সাবমিট হওয়া ডেটা স্টেটে আপডেট
    };

    return(
    <>
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-green-500 bg-auto-gradient">

            <div className="w-full p-10 max-w-md bg-white rounded-lg shadow-sm">

                <span className="bg-blue-600 py-1 px-2 rounded-r-xl font-serif text-white">Emran Dev</span>

                <h1 className="text-2xl font-bold text-gray-800 text-center">Login Form</h1>

                    <form onSubmit={handleSubmit}>

                        <div>
                            <label className="block text-sm text-gray-600">Name:</label>
                            <input className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter Your Name"/>
                        </div>

                        <div className="mt-2">
                            <label className="block text-sm text-gray-600">Email:</label>
                            <input className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Your Email"/>
                        </div>

                        <div className="mt-2">
                            <label className="block text-sm text-gray-600">Password:</label>
                            <input className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter Your Password"/>
                        </div>

                        <button className="w-full p-2 mt-2 rounded-md transition-colors duration-300 bg-indigo-600 hover:bg-indigo-700 focus:bg-indigo-800 text-white" type="submit">Login</button>
                        
                    </form>

                    {submittedData && (
                        <div className="mt-5">
                            <h2 className="text-center font-semibold">Submitted User Info</h2>
                            <p className="text-gray-600">Name: {submittedData.name}</p>
                            <p className="text-gray-600">Email: {submittedData.email}</p>
                            <p className="text-gray-600">Password: {submittedData.password}</p>
                        </div>
                    )}

            </div>

        </div>
    </>
    );
}

export default LoginPage;