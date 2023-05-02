import { createContext, useContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from "../firebase/fireBase.config";

const ContextCreate = createContext();

const auth = getAuth(app);

const DataProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const gitHubProvider = new GithubAuthProvider()
    const signInGitHub = () => {
        setLoading(true)
        signInWithPopup(auth,gitHubProvider)
        .then(()=>{})
        .catch(()=>{})
    }

    const googleProvider = new GoogleAuthProvider();
    const signInGoogle = () => {
        setLoading(true)
        signInWithPopup(auth, googleProvider)
            .then(() => { })
            .catch(() => { })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            return unsubscribe()
        }
    }, [])

    const allData = {
        createUser,
        signIn,
        signInGoogle,
        signInGitHub,
        loading,
        user
    }

    return <ContextCreate.Provider value={allData}>
        {children}
    </ContextCreate.Provider>
}

const useDataGlobally = () => {
    return useContext(ContextCreate)
}

export { DataProvider, useDataGlobally }