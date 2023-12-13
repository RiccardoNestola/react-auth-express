import React, { useState } from 'react';
import { useAuth } from '../ContextAPI/AuthContext';



const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        login(username, password);


    };




    return (

        <>

            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="p-6 max-w-sm w-full bg-white rounded-lg border border-gray-200 shadow-md">
                    <h2 className="text-center text-lg font-semibold text-gray-700">Login</h2>
                    <form onSubmit={handleSubmit} className="space-y-6 mt-4">
                        <div>
                            <label htmlFor="username" className="text-sm font-medium text-gray-700 block mb-2">Username</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded-md"
                                placeholder="Username"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="text-sm font-medium text-gray-700 block mb-2">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded-md"
                                placeholder="Password"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                            Login
                        </button>
                    </form>

                    <div className="flex items-center justify-between mt-4">
                        <p className="text-sm font-medium text-gray-700"> per accesso demo usare username: riccardo password: 1234 </p>
                    </div>

                </div>
            </div>



        </>
    );
};

export default Login;
