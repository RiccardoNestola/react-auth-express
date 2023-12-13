import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import {
    UserButton,
} from "@clerk/clerk-react";
/* import { useAuth } from '../../ContextAPI/AuthContext'; */

const Header = ({ onOpenModal }) => {
    /*  const { isAuthenticated } = useAuth(); */
    return (
        <>

            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 512 512">
                            <path d="M192 32c0 17.7 14.3 32 32 32c123.7 0 224 100.3 224 224c0 17.7 14.3 32 32 32s32-14.3 32-32C512 128.9 383.1 0 224 0c-17.7 0-32 14.3-32 32zm0 96c0 17.7 14.3 32 32 32c70.7 0 128 57.3 128 128c0 17.7 14.3 32 32 32s32-14.3 32-32c0-106-86-192-192-192c-17.7 0-32 14.3-32 32zM96 144c0-26.5-21.5-48-48-48S0 117.5 0 144V368c0 79.5 64.5 144 144 144s144-64.5 144-144s-64.5-144-144-144H128v96h16c26.5 0 48 21.5 48 48s-21.5 48-48 48s-48-21.5-48-48V144z" /></svg>
                        <a href="/" className="ml-3 text-xl">Il Mio Blog</a>
                    </div>
                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
                        <NavLink to='/' className="mr-5 hover:text-gray-900">Home</NavLink>
                        <NavLink to='/chi-sono' className="mr-5 hover:text-gray-900">Chi Sono</NavLink>
                        <NavLink to='/contatti' className="mr-5 hover:text-gray-900">Contatti</NavLink>
                    </nav>


                    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" onClick={onOpenModal}>Crea Post
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mx-1 w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </button>


                    <div className='px-2'>
                        <UserButton />

                    </div>

                </div>
            </header>

        </>
    )
};

export default Header;