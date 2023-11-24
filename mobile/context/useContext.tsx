import React, { createContext, useState, ReactNode, useContext, Dispatch, SetStateAction } from 'react';

interface UserContextType {
    userId: string;
    setUserId: Dispatch<SetStateAction<string>>;
}

const initialUserContext: UserContextType = {
    userId: "",
    setUserId: () => {}
};

const userType = createContext<UserContextType>(initialUserContext);

interface UserProviderProps {
    children: ReactNode;
}

const UserContext: React.FC<UserProviderProps> = ({ children }) => {
    const [userId, setUserId] = useState<string>("");

    const userContextValue: UserContextType = {
        userId,
        setUserId
    };

    return (
        <userType.Provider value={userContextValue}>
            {children}
        </userType.Provider>
    );
};

export { UserContext, userType };