import { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';


const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const fakeUser = {
        username: "riccardo",
        password: "1234"
    };

    const login = (username, password) => {

        if (username === fakeUser.username && password === fakeUser.password) {
            setIsAuthenticated(true);
            navigate("/");
            setUser({ name: username });

        } else {
            alert("Credenziali errate");
            setIsAuthenticated(false);
        }
    };

    const logout = () => {
        setIsAuthenticated(false);
    };




    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
