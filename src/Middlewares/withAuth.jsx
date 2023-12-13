
import React from 'react';
import { useAuth } from '../ContextAPI/AuthContext';
import { Navigate } from 'react-router-dom';


const withAuth = (WrappedComponent) => {
    return function AuthComponent(props) {
        const { isAuthenticated } = useAuth();

        if (!isAuthenticated) {
            return <Navigate to="/login" />;
        }

        return <WrappedComponent {...props} />;
    };
};

export default withAuth;
