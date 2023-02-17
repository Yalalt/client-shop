import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext(null);

export function useUserContext() {
    return useContext(UserContext);
}

export default function UserProvider({ children }) {
    // UserContext
    const [usersData, setUsersData] = useState();
    const [openLogin, setOpenLogin] = useState(false);
    const [login, setLogin] = useState(false);

    useEffect(() => {
        if (!localStorage.getItem("login")) {
            localStorage.setItem("login", false);
        }
        setLogin(JSON.parse(localStorage.getItem("login")));

        return () => {
            console.log("Clean up user");
        }
    }, []);

    return (
        <UserContext.Provider value={{ usersData, setUsersData, openLogin, setOpenLogin, login, setLogin }}>
            {children}
        </UserContext.Provider>
    );
}