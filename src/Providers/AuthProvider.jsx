import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import auth from "../firebase_init";
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const authInfo = {
        createUser
    }
    

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

/**
 * 1. call the createContext outside of any components to create Context
 * 2. set a default parameter in it 
 * 3. use the Provider with the context name . like { authProvider.Provider }
 * 4. Wrap the components inside the context as children. 
 */