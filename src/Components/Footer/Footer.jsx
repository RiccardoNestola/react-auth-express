import React from 'react';

const Footer = () => {
    return (
        <footer className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
                    <a href="/" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 512 512">
                            <path d="M192 32c0 17.7 14.3 32 32 32c123.7 0 224 100.3 224 224c0 17.7 14.3 32 32 32s32-14.3 32-32C512 128.9 383.1 0 224 0c-17.7 0-32 14.3-32 32zm0 96c0 17.7 14.3 32 32 32c70.7 0 128 57.3 128 128c0 17.7 14.3 32 32 32s32-14.3 32-32c0-106-86-192-192-192c-17.7 0-32 14.3-32 32zM96 144c0-26.5-21.5-48-48-48S0 117.5 0 144V368c0 79.5 64.5 144 144 144s144-64.5 144-144s-64.5-144-144-144H128v96h16c26.5 0 48 21.5 48 48s-21.5 48-48 48s-48-21.5-48-48V144z" /></svg>
                        <span className="ml-3 text-xl">Il Mio Blog</span>

                    </a>
                    <p className="mt-2 text-sm text-gray-500"></p>
                </div>

                <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">

                    {[...Array(4)].map((_, index) => (
                        <div key={index} className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIE</h2>
                            <nav className="list-none mb-10">
                                <li><a href="/" className="text-gray-600 hover:text-gray-800">Chi sono</a></li>
                                <li><a href="/" className="text-gray-600 hover:text-gray-800">Contatti</a></li>
                                <li><a href="/" className="text-gray-600 hover:text-gray-800">Privacy Policy</a></li>
                                <li><a href="/" className="text-gray-600 hover:text-gray-800">Termini e Condizioni</a></li>
                            </nav>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-gray-100">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p className="text-gray-500 text-sm text-center sm:text-left">© 2023 Il Mio Blog —
                        <a href="http://riccardonestola.com" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@riccardonestola</a>
                    </p>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
