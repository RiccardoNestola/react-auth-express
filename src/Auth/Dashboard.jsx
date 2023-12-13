import React, { useState } from 'react';
import { useAuth } from '../ContextAPI/AuthContext';
import Header from '../Components/Header/Header';
import Modal from '../Components/Modal/Modal';

const Dashboard = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const { user } = useAuth();

    return (
        <>

            {isModalOpen && <Modal onClose={() => setModalOpen(false)} />}

            <div>Dashboard</div>
            {user && <div>Bentornato, {user.name}</div>}
        </>
    );
}

export default Dashboard;
